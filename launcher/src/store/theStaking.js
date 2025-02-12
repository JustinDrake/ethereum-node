import { defineStore } from "pinia";

export const useStakingStore = defineStore("theStaking", {
  state: () => {
    return {
      totalBalance: 0,
      keys: [],
      forceRefresh: false,
      storedValidatorKeys: [],
    };
  },
  actions: {},
});
