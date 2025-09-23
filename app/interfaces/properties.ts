export interface IPropertiesStore {
  // List page
  isFilterDrawerOpen: boolean;
  listStyle: "grid" | "list";

  // Slug page
  isContactModalOpen: boolean;
  isGalleryModalOpen: boolean;
  isMapModalOpen: boolean;
  currentGalleryImageIndex: number;
}