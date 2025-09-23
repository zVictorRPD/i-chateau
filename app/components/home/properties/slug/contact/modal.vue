<script setup lang="ts">
const propertiesStore = usePropertiesStore();
</script>

<template>
  <UModal
    fullscreen
    title="Entre em Contato"
    :open="propertiesStore.isContactModalOpen"
    @update:open="propertiesStore.closeContactModal"
    description="Fale com um de nossos consultores para saber mais sobre esta propriedade."
  >
    <template #body>
      <HomePropertiesSlugContactForm />
    </template>
  </UModal>
</template>
