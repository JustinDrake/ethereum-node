<template>
  <div class="nodeResponse_parent">
    <comming-soon></comming-soon>
    <div class="nodeResponse_box">
      <div class="success">
        <div class="successValue">
          <span>{{ successVal }}%</span>
        </div>
        <div class="resLbl">
          <span>Success Rate</span>
        </div>
      </div>
      <div class="resTime">
        <div class="resTimeVal">
          <span>{{ lastTimeVal }}</span>
          <small>ms</small>
        </div>
        <div class="resLbl">
          <span>Response Time(last)</span>
        </div>
      </div>
      <div class="resTime">
        <div class="resTimeVal">
          <span>{{ lastTimeVal }}</span>
          <small>ms</small>
        </div>
        <div class="resLbl">
          <span>Response Time(⌀)</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // datas are dummy, for wire the have to change to null
      successVal: null,
      lastTimeVal: null,
    };
  },
};
</script>
<style scoped>
.nodeResponse_parent {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  color: #c1c1c1;
  position: relative;
}
.nodeResponse_ttl {
  width: 100%;
  height: 15%;
  background: #33393e;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  color: #c1c1c1;
}
.nodeResponse_ttl span {
  font-size: 10%;
  color: #eee;
  border: 1px solid rgb(27, 26, 26);
  width: 40%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nodeResponse_box {
  width: 100%;
  height: 84%;
  display: flex;
  box-sizing: border-box;
}
.success {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.resLbl {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 95%;
  font-size: 50%;
  font-weight: 400;
}
.successValue {
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 80%;
  font-weight: 600;
}
.resTime {
  display: flex;
  width: 32%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.resTimeVal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 80%;
  width: 55%;
  font-weight: 800;
}
.resTimeVal small {
  font-size: 50%;
}
</style>
