<template>
  <div class="pluginLog-parent">
    <div class="logsContainer">
      <div class="logsHeader">
        <div class="title">
          <img src="/img/icon/plugin-menu-icons/log-icon.png" alt="icon" />
          <span>PLUG-IN LOGS</span>
        </div>
        <div class="serviceDetails">
          <div class="serviceIcon">
            <img :src="item.icon" alt="icon" />
          </div>
          <div class="serviceName">
            <span>{{ item.name }}</span>
          </div>
          <div class="categoryBox">
            <p class="category">
              {{ item.category
              }}<span v-if="item.category != 'service'"> client</span>
            </p>
            <span id="serviceVersion">{{ item.config.imageVersion }}</span>
          </div>
        </div>
        <div class="closeBox" @click="$emit('closeLog')">
          <img src="/img/icon/plugin-menu-icons/close12.png" alt="icon" />
        </div>
      </div>
      <div class="logsTable">
        <template v-if="logsList.length">
          <div
            class="tableRow"
            v-for="(log, idx) in logsList.slice(-150)"
            :key="idx"
          >
            <div class="rowMsg" @dblclick="copy">
              <span>#{{ idx + 1 }}</span>
              <span id="log">{{ log }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="tableRow">
            <span>No log found in the list</span>
          </div>
        </template>
      </div>
      <div class="logsFooter">
        <div class="textBox">
          <span>Click on the logs to copy</span>
        </div>
        <div class="searchBox">
          <input
            id="search"
            type="search"
            placeholder="Search"
            v-model="searchValue"
          />
          <img src="/img/icon/arrows/search.png" alt="icon" />
        </div>
        <div class="serviceBox">
          <span>service id:</span>
          <span>{{ item.config.serviceID }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ControlService from "@/store/ControlService";
import { mapWritableState } from "pinia";
import { useNodeStore } from "@/store/theNode";
export default {
  props: ["item"],
  data() {
    return {
      logs: [],
      searchValue: "",
      logVal: "",
    };
  },

  computed: {
    logsList() {
      if (this.searchValue.length > 0) {
        return this.logs.filter((i) =>
          i.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }
      return this.logs;
    },
    ...mapWritableState(useNodeStore, {
      serviceLogs: "serviceLogs",
    }),
  },
  mounted() {
    this.filteredServiceLogs();
  },
  updated() {
    this.filteredServiceLogs();
  },
  methods: {
    filteredServiceLogs() {
      this.serviceLogs.forEach((i) => {
        if (i.config.serviceID == this.item.config.serviceID) {
          this.logs = i.logs;
        }
      });
    },
    copy(e) {
      const copyText = e.target.innerText;
      navigator.clipboard.writeText(copyText);
    },
  },
};
</script>
<style scoped>
.pluginLog-parent {
  width: 100%;
  height: 91%;
  background-color: #32564f;
  background-color: #242529;
  border-radius: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.logsContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 4px solid rgb(156, 156, 156);
  border-radius: 10px;
}
.logsHeader {
  width: 100%;
  height: 10%;
  border-bottom: 4px solid rgb(156, 156, 156);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logsHeader .title {
  width: 50%;
  height: 100%;
  color: rgb(203, 202, 202);
  display: flex;
  justify-content: center;
  align-items: center;
}
.logsHeader .title img {
  width: 5%;
}
.logsHeader .title span {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 10px;
}
.logsHeader .serviceDetails {
  width: 45%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: center;
  padding: 2px 5px;
}
.logsHeader .serviceDetails .serviceIcon {
  grid-column: 1/2;
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logsHeader .serviceDetails img {
  width: 60%;
}
.logsHeader .serviceDetails .serviceName {
  grid-column: 2/7;
  grid-row: 1/2;
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  margin-left: 3%;
}
.serviceDetails .serviceName span {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(202, 205, 206);
}
.logsHeader .serviceDetails .categoryBox {
  grid-column: 9/10;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 5%;
}
.logsHeader .closeBox {
  width: 5%;
  height: 100%;
  padding: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.logsHeader .closeBox img {
  width: 93%;
  height: 100%;
}
.logsHeader .closeBox img:active {
  transform: scale(0.9);
}
.categoryBox .category,
.categoryBox .category span {
  font-size: 0.7rem;
  font-weight: 600;
  text-align: left;
  color: rgb(202, 205, 206);
  text-transform: uppercase;
}
#serviceVersion {
  width: max-content;
  font-size: 0.7rem;
  font-weight: 600;
  text-align: left;
  color: rgb(202, 205, 206);
}
.logsTable {
  width: 100%;
  height: 80%;
  background: #3b4146;
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
}
.logsTable::-webkit-scrollbar {
  width: 5px;
  height: 10px;
}

.logsTable::-webkit-scrollbar-track {
  background: transparent;
}
.logsTable::-webkit-scrollbar-thumb {
  background-color: #32564f;
  border-radius: 10px;
  cursor: pointer;
}
.logsTable::-webkit-scrollbar-thumb:horizontal {
  background-color: #32564f;
  border-radius: 10px;
  cursor: pointer;
}
.logsTable::-webkit-scrollbar-thumb:hover {
  background-color: #4a7d73;
}
.logsTable::-webkit-scrollbar-thumb:hover {
  background-color: #4a7d73;
}
.logsTable::-webkit-scrollbar-corner {
  background: transparent;
}
.tableRow {
  width: 100%;
  min-height: 35px;
  margin-top: 5px;
  padding: 2px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  overflow-y: hidden;
  overflow-x: auto;
}
.tableRow::-webkit-scrollbar {
  height: 5px;
  background: transparent;
  padding: 0 20px;
}
.tableRow::-webkit-scrollbar-thumb {
  background-color: #3c6283;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 20px;
}
.tableRow::-webkit-scrollbar-thumb:hover {
  background-color: #3e78ab;
}
.logsTable .tableRow:nth-child(odd) {
  background-color: #4c5157;
}
.tableRow:nth-child(even) {
  background-color: #2d2e34;
}
.rowMsg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: normal;
  cursor: pointer;
}

.rowMsg span:last-child {
  width: 98%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: pre;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(203, 202, 202);
  margin-left: 10px;
}
.rowMsg span:first-child {
  min-width: 2%;
  max-width: max-content;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: pre;
  font-size: 0.8rem;
  font-weight: 600;
  color: #d9d9d6;
  margin: 0 5px;
}

.logsFooter {
  width: 100%;
  height: 10%;
  border-top: 4px solid rgb(156, 156, 156);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100%;
  align-items: center;
}
.logsFooter .textBox {
  grid-column: 1/4;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logsFooter .textBox span {
  font-size: 0.9rem;
  color: #d8d8d8;
  font-weight: 600;
  margin-left: 20%;
}

.logsFooter .searchBox {
  grid-column: 5/9;
  grid-row: 1/2;
  width: 98%;
  height: 76%;
  background-color: #eaeaea;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.searchBox img {
  width: 9%;
  margin-right: 5px;
}
.logsFooter .searchBox input {
  width: 95%;
  height: 90%;
  background-color: #eaeaea;
  border-radius: 5px;
  border: none;
  outline: none;
  color: rgb(101, 101, 101);
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0.5rem;
}
.logsFooter .serviceBox {
  grid-column: 9/13;
  grid-row: 1/2;
  width: 97%;
  height: 70%;
  border: 2px solid rgb(156, 156, 156);
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.logsFooter .serviceBox span:first-child {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #c4c4c4;
}
.logsFooter .serviceBox span:last-child {
  font-size: 0.7rem;
  font-weight: 400;
  color: #d8d8d8;
}
</style>
