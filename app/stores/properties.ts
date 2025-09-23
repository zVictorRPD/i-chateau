import type { IPropertiesStore } from "~/interfaces/properties";

export const usePropertiesStore = defineStore("properties", {
  state: (): IPropertiesStore => ({
    // List page
    isFilterDrawerOpen: false,
    listStyle: "grid",

    // Slug page
    isContactModalOpen: false,
    isMapModalOpen: false,
    isGalleryModalOpen: false,
    currentGalleryImageIndex: 0,
  }),
  actions: {
    // List page
    openFilterDrawer() {
      this.isFilterDrawerOpen = true;
    },
    closeFilterDrawer() {
      this.isFilterDrawerOpen = false;
    },
    changeListStyle(style: "grid" | "list") {
      this.listStyle = style;
    },

    // Slug page
    openContactModal() {
      this.isContactModalOpen = true;
    },
    closeContactModal() {
      this.isContactModalOpen = false;
    },

    openMapModal() {
      this.isMapModalOpen = true;
    },
    closeMapModal() {
      this.isMapModalOpen = false;
    },

    openGalleryModal() {
      this.isGalleryModalOpen = true;
    },
    closeGalleryModal() {
      this.isGalleryModalOpen = false;
    },
    setCurrentGalleryImageIndex(index: number) {
      this.currentGalleryImageIndex = index;
    },


  },
  getters: {
    // List page
    isGridStyle: (state) => state.listStyle === "grid",
  }
});