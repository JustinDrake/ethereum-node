<template>
  <div class="staking-parent">
    <div class="staking-box">
      <div class="staking-ico">
        <div class="staking-ico_container">
          <img
            src="../../../../public/img/icon/control/keyEth.svg"
            alt="Key-icon"
          />
        </div>
        <span>STAKING</span>
      </div>
      <div class="staking-container">
        <div class="side-top">
          <div class="top-icon">
            <img
              src="../../../../public/img/icon/control/stakingWu.svg"
              alt="coin-icon"
            />
          </div>
          <div class="top-value">
            <span>{{ ethValue }}</span>
          </div>
        </div>
        <div class="side-bottom">
          <div class="number-of-validators">
            <span>{{ numberOfValidators }}</span>
          </div>
          <div class="number-of-validators_title">
            <span>IMPORTED</span>
            <span>VALIDATOR</span>
          </div>
          <div class="controller">
            <span>INCLUSION DISTANCE</span>
            <vertical-bar-controller></vertical-bar-controller>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VerticalBarController from "./VerticalBarController.vue";
export default {
  components: { VerticalBarController },
  data() {
    return {
      //dummy value o test
      ethValue: 32.0000001,
      numberOfValidators: 1,
    };
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.staking-parent {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.staking-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.staking-ico {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.staking-ico span {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50%;
  font-weight: bold;
  color: #c1c1c1;
}
.staking-ico_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
}
.staking-ico_container img {
  width: 72%;
  height: 90%;
}
.staking-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 100%;
  flex-direction: column;
}
.side-top {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-icon {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-icon img {
  width: 70%;
  height: 90%;
  min-width: 70%;
}
.top-value {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 90%;
  font-weight: 600;
  color: #74fa65;
}
.side-bottom {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-of-validators {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  font-weight: 800;
}
.number-of-validators_title {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50%;
  font-weight: 600;
}
.controller {
  width: 45%;
  height: 85%;
  display: flex;
  flex-direction: column;
  font-size: 10%;
  font-weight: 600;
  justify-content: center;
  align-items: center;
}
</style>
