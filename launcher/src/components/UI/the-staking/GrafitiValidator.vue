<template>
  <div class="grafitiRow">
    <div class="iconBox">
      <img
        class="grafiti-icon"
        src="../../../../public/img/icon/the-staking/option-graffiti.png"
        alt="icon"
      />
    </div>
    <div class="inputBox">
      <input
        type="text"
        :placeholder="$t('grafitiMultipleValidator.textPlaceHolder')"
      />
    </div>
    <div class="confirmBox">
      <button class="confirmBtn" @click="$emit('confirmChange')">
        {{ $t("exitMultipleValidator.confirm") }}
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.grafitiRow {
  grid-column: 1/8;
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5% 85% 10%;
  grid-template-rows: 1fr;
  background-color: #723979;
  border-radius: 50px;
  position: absolute;
  z-index: 1000;
}
.iconBox {
  grid-column: 1/2;
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconBox img {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin: 0 auto;
}
.inputBox {
  grid-column: 2/3;
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.inputBox input {
  width: 80%;
  height: 95%;
  padding: 0;
  padding-left: 10px;
  background-color: #3d0444;
  border: 1px solid #958797;
  border-radius: 35px;
  color: #958797;
  font-size: 0.8rem;
  font-weight: 500;
}
.confirmBox {
  grid-column: 3/4;
  grid-row: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirmBtn {
  width: 100%;
  height: 100%;
  border-radius: 0 35px 35px 0;
  background-color: #292929;
  color: #b5b5b5;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
}
.confirmBtn:focus {
  outline: none;
}
.confirmBtn:hover {
  background-color: #3b3b3b;
}
.confirmBtn:active {
  background-color: #292929;
  font-size: 0.67rem;
}
</style>
