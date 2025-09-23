<script setup lang="ts">
const { setCurrentGalleryImageIndex, closeGalleryModal } = usePropertiesStore();
const { currentGalleryImageIndex, isGalleryModalOpen } =
  storeToRefs(usePropertiesStore());
const shouldDisplayImage = computed(() => {
  return (index: number | string) => {
    return index === currentGalleryImageIndex.value ? "block" : "hidden";
  };
});

const mockPropertyImages = [
  "/img/properties/house-1/house.png",
  "/img/properties/house-1/bedroom.png",
  "/img/properties/house-1/bathroom.png",
  "/img/properties/house-1/livingroom.png",
  "/img/properties/house-3/bathroom.png",
  "/img/properties/house-3/livingroom.png",
];

function incrementCurrentGalleryImageIndex() {
  setCurrentGalleryImageIndex(currentGalleryImageIndex.value + 1);
}

function decrementCurrentGalleryImageIndex() {
  setCurrentGalleryImageIndex(currentGalleryImageIndex.value - 1);
}

const galleryLegend = computed(() => {
  return `Imagem ${currentGalleryImageIndex.value + 1} de ${
    mockPropertyImages.length
  }`;
});
</script>

<template>
  <UModal
    fullscreen
    title="Galeria de Fotos"
    description="Clique nas setas para navegar pelas imagens"
    :open="isGalleryModalOpen"
    @update:open="closeGalleryModal"
  >
    <template #body>
      <div class="flex items-center justify-center relative">
        <div class="flex flex-col gap-4">
          <div class="h-[calc(100vh-11rem)] flex items-center justify-center">
            <img
              v-for="(image, index) in mockPropertyImages"
              :src="image"
              alt="Imagem da propriedade"
              class="object-cover max-h-full mx-auto"
              :class="shouldDisplayImage(index)"
              :key="index"
            />
          </div>
          <div>
            <p class="text-center">{{ galleryLegend }}</p>
          </div>
        </div>
        <UButton
          class="absolute top-1/2 -translate-y-1/2 left-2 z-10 rounded-full"
          aria-label="Slide anterior"
          tabindex="0"
          size="xl"
          icon="i-lucide-chevron-left"
          @click="decrementCurrentGalleryImageIndex"
          :disabled="currentGalleryImageIndex === 0"
        />
        <UButton
          class="absolute top-1/2 -translate-y-1/2 right-2 z-10 rounded-full"
          aria-label="Próximo slide"
          tabindex="0"
          size="xl"
          icon="i-lucide-chevron-right"
          @click="incrementCurrentGalleryImageIndex"
          :disabled="currentGalleryImageIndex === mockPropertyImages.length - 1"
        />
      </div>
    </template>
  </UModal>
</template>
