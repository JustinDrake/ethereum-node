import { NodeService } from "./NodeService";
import { ServiceVolume } from "./ServiceVolume";
import { EL_BootNodes } from "./GnosisBootNodes";

export class NethermindService extends NodeService {
    static buildByUserInput (network, ports, dir){
        const service = new NethermindService()
        service.setId()
        const workingDir = service.buildWorkingDir(dir)
        const dataDir = '/opt/app/data'
        const JWTDir = '/engine.jwt'

        const volumes = [
            new ServiceVolume(workingDir + '/data',dataDir),
            new ServiceVolume(workingDir + '/engine.jwt', JWTDir)
        ]

        service.init(
            'NethermindService',    // service
            service.id,             // id
            1,                      // configVersion
            'nethermind/nethermind',// image
            '1.14.3',               // imageVersion
            [
                `--config=${network === "gnosis" ? "xdai" : network}`,
                '--log=info',
                `--datadir=${dataDir}`,
                '--Network.DiscoveryPort=30303',
                '--Network.P2PPort=30303',
                '--Sync.FastSync=true',
                '--Sync.SnapSync=true',
                '--Sync.FastBlocks=true',
                '--Sync.AncientBodiesBarrier=11052984',
                '--Sync.AncientReceiptsBarrier=11052984',
                '--Merge.Enabled=true',
                '--JsonRpc.Enabled=true',
                '--JsonRpc.JwtSecretFile=/engine.jwt',
                '--JsonRpc.Host=0.0.0.0',
                '--JsonRpc.EngineHost=0.0.0.0',
                '--Init.WebSocketsEnabled=true',
                '--JsonRpc.WebSocketsPort=8546',
                '--JsonRpc.EnabledModules=[web3,eth,subscribe,net]',
                '--JsonRpc.AdditionalRpcUrls=http://0.0.0.0:8551|http;ws|engine;eth;subscribe',
                '--Metrics.Enabled=true',
                '--Metrics.ExposePort=6060',
                '--HealthChecks.Enabled=true',
                '--Pruning.Mode=Hybrid'
            ],                      // command
            ["./Nethermind.Runner"],// entrypoint
            null,                   // env
            ports,                  // ports
            volumes,                // volumes
            'root',                   // user
            network,                // network
            // executionClients
            // consensusClients
        )
        if(network == "gnosis")
          service.command.push(`--Discovery.Bootnodes=${EL_BootNodes.join()}`)

      return service
    }


  static buildByConfiguration (config) {
    const service = new NethermindService()

    service.initByConfig(config)

    return service
  }

  buildExecutionClientHttpEndpointUrl() {
    return 'http://stereum-' + this.id + ':8545'
  }

  buildExecutionClientWsEndpointUrl() {
    return 'ws://stereum-' + this.id + ':8546'
  }

  buildExecutionClientEngineRPCHttpEndpointUrl() {
    return 'http://stereum-' + this.id + ':8551'
  }

  buildExecutionClientEngineRPCWsEndpointUrl() {
    return 'ws://stereum-' + this.id + ':8551'
  }

  buildExecutionClientMetricsEndpoint () {
    return 'stereum-' + this.id + ':6060'
  }

  buildPrometheusJob () {
    return `\n  - job_name: stereum-${this.id}\n    static_configs:\n      - targets: [${this.buildExecutionClientMetricsEndpoint()}]`
  }
}