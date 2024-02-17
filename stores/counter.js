import { defineStore } from "pinia";
export const CounterStore = defineStore({
  id: "store",
  state: () => ({
    storekey: 7,
    nowTime: new Date(),
  }),
  getters: {
    storeName: (state) => state.storekey,
    nowTimeIs: (state) => state.nowTime,
  },
  actions: {
    handstorekey() {
      this.storekey++;
    },
  },
});
