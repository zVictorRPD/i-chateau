import type { IPropertiesStore } from "~/interfaces/properties";

export const usePropertiesStore = defineStore("properties", {
  state: (): IPropertiesStore => ({
    isFilterDrawerOpen: false,
    listStyle: "grid",
  }),
  actions: {
    openFilterDrawer() {
      this.isFilterDrawerOpen = true;
    },
    closeFilterDrawer() {
      this.isFilterDrawerOpen = false;
    },
    changeListStyle(style: "grid" | "list") {
      this.listStyle = style;
    }
  },
  getters: {
    isGridStyle: (state) => state.listStyle === "grid",
  }
});
