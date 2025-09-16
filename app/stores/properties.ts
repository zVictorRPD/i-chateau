import type { IPropertiesStore } from "~/interfaces/properties";

export const usePropertiesStore = defineStore("properties", {
  state: (): IPropertiesStore => ({
    isFilterDrawerOpen: false,
  }),
  actions: {
    openFilterDrawer() {
      this.isFilterDrawerOpen = true;
    },
    closeFilterDrawer() {
      this.isFilterDrawerOpen = false;
    },
  },
});
