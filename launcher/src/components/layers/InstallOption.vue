<template>
  <div class="parent">
    <div class="header">ONE CLICK INSTALLATION</div>
    <div class="containerOption">
      <div class="text">
        {{ $t("installOption.installText") }}
      </div>
      <div class="plugin-container">
        <vue-select @disable-btn="enableButtonHandler"> </vue-select>
      </div>
    </div>
    <div class="btn-container">
      <router-link class="back-box" :to="{ path: '/welcome' }">
        <button id="back">{{ $t("installOption.back") }}</button>
      </router-link>
      <div class="install-box">
        <button v-if="isButtonEnabled" @click="clickedToInstall" class="instal">
          {{ $t("installOption.install") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from "../UI/click-installation/VueSelect.vue";
import { mapState } from "pinia";
import { useClickInstall } from "@/store/clickInstallation";
export default {
  components: {
    VueSelect,
  },
  data() {
    return {
      isTestnetActive: false,
      isButtonEnabled: false,
      testnetBtn: false,
      isMainnetActive: false,
      mainnetBtn: false,
    };
  },
  computed: {
    ...mapState(useClickInstall, {
      selectedPreset: "selectedPreset",
    }),
  },
  methods: {
    enableButtonHandler() {
      this.isButtonEnabled = true;
    },
    testnetActive() {
      this.isTestnetActive = true;
      this.testnetBtn = true;
      this.isMainnetActive = false;
      this.mainnetBtn = false;
    },
    mainnetActive() {
      this.isMainnetActive = true;
      this.mainnetBtn = true;
      this.isTestnetActive = false;
      this.testnetBtn = false;
    },
    clickedToInstall() {
      if (Object.keys(this.selectedPreset).length > 0) {
        this.$router.push("/install");
      }
    },
  },
};
</script>

<style scoped>
.parent {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10% 15% 60% 25%;
}
.header {
  grid-column: 2/4;
  grid-row: 2/3;
  margin: 0 auto;
  border: 5px solid #929292;
  background-color: #194747;
  width: 60%;
  height: 49%;
  text-align: center;
  border-radius: 40px;
  font-size: 1.1rem;
  color: rgb(214, 214, 214);
  font-weight: 700;
  position: relative;
  opacity: 0.8;
  box-shadow: 0 1px 3px 1px rgb(46, 57, 55);
  display: flex;
  justify-content: center;
  align-items: center;
}

.containerOption {
  grid-column: 1/5;
  grid-row: 3/4;
  border: 4px solid #929292;
  width: 50%;
  height: 90%;
  margin: 10px auto;
  background: #2a4243;
  border-radius: 30px;
  opacity: 0.87;
  position: relative;
  box-shadow: 0 1px 3px 1px rgb(25, 33, 32);
}
.plugin-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container p {
  text-align: center;
  width: 95%;
}

.text {
  text-align: center;
  width: 90%;
  margin: 2% auto;
  font-size: 0.8rem;
  color: rgb(200, 200, 200);
  font-weight: 500;
  text-align: justify;
}
.select-box {
  width: 50%;
  margin: 0 auto;
}
.btn-container {
  grid-column: 1/5;
  grid-row: 4/5;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.install-box {
  width: 15%;
  height: 100%;
  margin-right: 50px;
}
.btn-container a {
  width: 15%;
  height: 100%;
  margin-left: 50px;
  text-align: right;
}
.instal {
  width: max-content;
  padding: 0 0.7%;
  min-width: 120px;
  height: 70%;
  resize: both;
  border-radius: 40px;
  border: 3px solid #929292;
  background-color: #194747;
  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(191, 191, 191);
  box-shadow: 0 1px 3px 1px rgb(33, 49, 41);
  outline-style: none;
  cursor: pointer;
}

#back {
  width: auto;
  height: 70%;
  min-width: 120px;
  resize: both;
  border-radius: 40px;
  border: 3px solid #929292;
  background-color: #194747;
  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(191, 191, 191);
  box-shadow: 0 1px 3px 1px rgb(41, 61, 51);
  outline-style: none;
  cursor: pointer;
}
.instal:hover,
#back:hover {
  background-color: rgb(31, 48, 43);
  box-shadow: 0 1px 3px 0 rgb(21, 31, 26);
}
.instal:active,
#back:active {
  box-shadow: inset 1px 1px 3px 1px rgb(14, 19, 17);
}
.disabledBtn {
  width: auto;
  min-width: 120px;
  height: 70%;
  resize: both;
  border: 3px solid #545454;
  border-radius: 40px;
  background-color: rgb(50, 71, 65) !important;
  font-size: 1.3rem;
  box-shadow: none !important;
  font-weight: 800;
  color: rgb(135, 135, 135) !important;
  outline-style: none;
}
</style>
