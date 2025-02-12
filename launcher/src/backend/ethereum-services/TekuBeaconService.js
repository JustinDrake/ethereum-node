import { NodeService } from './NodeService.js'
import { ServicePortDefinition } from './SerivcePortDefinition.js'
import { ServiceVolume } from './ServiceVolume.js'
import { CL_BootNodes } from './GnosisBootNodes.js'

export class TekuBeaconService extends NodeService {
    static buildByUserInput(network, ports, dir, executionClients, mevboost, checkpointURL) {
        const service = new TekuBeaconService()
        service.setId()
        const workingDir = service.buildWorkingDir(dir)

        const image = 'consensys/teku'

        const executionLayer = (executionClients.map(client => { return client.buildExecutionClientEngineRPCHttpEndpointUrl() })).join()

        // mevboost endpoint
        const mevboostEndpoint = (mevboost.map(mevboost => { return mevboost.buildMevboostEndpointURL() })).join()

        const JWTDir = '/engine.jwt'
        const dataDir = '/opt/app/data'
        const graffitiDir = '/opt/app/graffitis'

        const volumes = [
            new ServiceVolume(workingDir + '/data', dataDir),
            new ServiceVolume(workingDir + '/graffitis', graffitiDir)
        ]

        if(executionClients && executionClients.length > 0){
            const elJWTDir = (executionClients[0].volumes.find(vol => vol.servicePath === '/engine.jwt')).destinationPath
            volumes.push(new ServiceVolume(elJWTDir, JWTDir))
        }

        service.init(
            'TekuBeaconService',    // service
            service.id,             // id
            1,                      // configVersion
            image,                  // image
            '22.10.1',               // imageVersion
            [
                `--network=${network}`,
                '--logging=INFO',
                '--p2p-enabled=true',
                '--p2p-port=9001',
                '--validators-keystore-locking-enabled=true',
                `--validators-graffiti-file=${graffitiDir}/graffitis.yaml`,
                //`--eth1-endpoints=${executionLayer}`,
                `--ee-endpoint=${executionLayer}`,
                `--ee-jwt-secret-file=${JWTDir}`,
                `--validators-proposer-default-fee-recipient=0x0000000000000000000000000000000000000000`,
                '--metrics-enabled=true',
                '--metrics-port=8008',
                '--metrics-interface=0.0.0.0',
                '--metrics-host-allowlist=*',
                '--metrics-publish-interval=10',
                `--data-path=${dataDir}`,
                '--data-storage-mode=prune',
                '--rest-api-port=5051',
                '--rest-api-host-allowlist=*',
                '--rest-api-interface=0.0.0.0',
                '--rest-api-docs-enabled=true',
                '--rest-api-enabled=true',
                '--log-destination=CONSOLE',
                '--validator-api-enabled=true',
                '--validator-api-port=5052',
                '--validator-api-host-allowlist=*',
                '--validator-api-cors-origins=*',
                `--validator-api-keystore-file=${dataDir}/teku_api_keystore`,
                `--validator-api-keystore-password-file=${dataDir}/teku_api_password.txt`,
                '--validators-builder-registration-default-enabled=true',
                '--validators-proposer-blinded-blocks-enabled=true',
            ],                      // command
            ["/opt/teku/bin/teku"], // entrypoint
            {JAVA_OPTS: '-Xmx4g'},  // env
            ports,                  // ports
            volumes,                // volumes
            null,                   // user
            network,                // network
            executionClients,       // executionClients
            executionClients,  //executionClients
            null, //consensusClients
            null,  //prometheusNodeExporterClients
            mevboost  //mevboost
        )
        if(checkpointURL)
            service.command.push('--initial-state=' + checkpointURL)
        if(mevboostEndpoint)
            service.command.push(`--builder-endpoint=${mevboostEndpoint}`)
        if(network == "gnosis")
            service.command.push(`--p2p-discovery-bootnodes=${CL_BootNodes.join()}`)
        return service
    }

    static buildByConfiguration(config) {
        const service = new TekuBeaconService()

        service.initByConfig(config)

        return service
    }

    buildConsensusClientHttpEndpointUrl() {
        return 'http://stereum-' + this.id + ':5051'
    }

    buildConsensusClientEndpoint () {
        return 'stereum-' + this.id + ':5051'
      }
    
    buildConsensusClientGateway () {
        return 'stereum-' + this.id + ':5051'
      }
    
    buildConsensusClientMetricsEndpoint () {
        return 'stereum-' + this.id + ':8008'
    }

    buildPrometheusJob () {
        return `\n  - job_name: stereum-${this.id}\n    scrape_timeout: 10s\n    metrics_path: /metrics\n    scheme: http\n    static_configs:\n      - targets: [${this.buildConsensusClientMetricsEndpoint()}]`
    }

    getAvailablePorts() {
        return [
            new ServicePortDefinition(9001, 'tcp', 'P2P connections'),
            new ServicePortDefinition(9001, 'udp', 'P2P connections'),
            new ServicePortDefinition(5052, 'tcp', 'Validator API Port'),
            new ServicePortDefinition(5051, 'tcp', 'REST API Port'),
            new ServicePortDefinition(8008, 'tcp', 'METRICS Port')
        ]
    }
}

// EOF
