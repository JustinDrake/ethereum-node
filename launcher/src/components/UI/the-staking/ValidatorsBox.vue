<template>
  <div class="validators-box">
    <div class="validator-table">
      <comming-soon></comming-soon>
      <div class="validator-table-title">
        <span>{{ $t("validatorsBox.date") }}</span>
        <span>{{ $t("validatorsBox.validator") }}</span>
        <span>{{ $t("validatorsBox.attestRate") }}</span>
        <span>{{ $t("validatorsBox.reward") }}</span>
      </div>
      <div class="validator-table-content">
        <div class="validator-table-row">
          <span>{{ $t("validatorsBox.date") }}</span>
          <span>{{ $t("validatorsBox.validator") }}</span>
          <span>{{ $t("validatorsBox.attestRate") }}</span>
          <span>{{ $t("validatorsBox.reward") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.validators-box {
  width: 100%;
  height: 95%;
  grid-column: 10/13;
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.validators-box .validator-title {
  width: 94%;
  height: 15%;
  background-color: #bfbfbf;
  border-radius: 20px 20px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.validator-title .title {
  width: 80%;
  height: 80%;
  font-size: 14px;
  font-weight: 900;
  color: rgb(36, 36, 36);
}

.validators-box .validator-table {
  width: 90%;
  height: 98%;
  background-color: #bfbfbf;
  margin: 2px auto 0 auto;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  position: relative;
}
.validator-table .validator-table-title {
  width: 100%;
  height: 10%;
  color: #333;
  font-size: 8px;
  font-weight: 900;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.validator-table .validator-table-content {
  width: 95%;
  height: 85%;
  background-color: #000000;
  margin-bottom: 5px;
  overflow-x: hidden;
  overflow-y: auto;
}
.validator-table-content .validator-table-row {
  width: 100%;
  height: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2px;
}
.validator-table-content .validator-table-row span {
  color: #fff;
  font-size: 9px;
  font-weight: 800;
}
.validator-table-content .validator-table-row span:last-child {
  color: tomato;
}
</style>
