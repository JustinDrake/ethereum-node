<template>
  <div class="validatorContainerBoxParent">
    <div class="validatorContainerBox">
      <div class="validatorContainerBox_left">
        <inclusion-distance></inclusion-distance>
      </div>
      <div class="validatorContainerBox_right">
        <the-validator></the-validator>
      </div>
    </div>
  </div>
</template>
<script>
import InclusionDistance from "./InclusionDistance.vue";
import TheValidator from "./TheValidator.vue";
export default {
  components: {
    InclusionDistance,
    TheValidator,
  },
};
</script>
<style scoped>
.validatorContainerBoxParent {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
}
.validatorContainerBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 80%;
}
.validatorContainerBox_left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}
.validatorContainerBox_right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
}
</style>
