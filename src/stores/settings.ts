import { defineStore } from "pinia";
import { SETTINGS } from "@/stores/namespace";

const useSettingsStore = defineStore(SETTINGS, {
  state() {
    return {
      collapsedAside: false,
    };
  },
  getters: {
    isAsideMenuCollapsed: (state) => state.collapsedAside,
  },
  actions: {
    updateCollapsedState(state: boolean) {
      this.collapsedAside = state;
    },
  },
});

export { useSettingsStore };
