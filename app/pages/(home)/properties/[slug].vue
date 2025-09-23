<script setup lang="ts">
const { openContactModal } = usePropertiesStore();
</script>

<template>
  <HomePropertiesSlugCarousel />
  <HomeContainer class="py-4 md:py-8">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
      <div class="flex flex-col gap-4">
        <HomePropertiesSlugActions />
        <HomePropertiesSlugPrice />
        <HomePropertiesSlugFeatures />
        <HomePropertiesSlugLocation />
        <HomePropertiesSlugDescription />
      </div>
      <div class="hidden lg:block">
        <HomePropertiesSlugContactSection />
      </div>
    </div>
  </HomeContainer>
  <div class="fixed bottom-4 right-4 lg:hidden">
    <UButton
      size="xl"
      color="info"
      icon="i-lucide-message-circle"
      @click="openContactModal"
    >
      Contato
    </UButton>
  </div>
  <HomePropertiesSlugContactModal />
  <HomePropertiesSlugMapModal />
  <HomePropertiesSlugGalleryModal />
</template>
