<script setup lang="ts">
const propertiesStore = usePropertiesStore();
</script>

<template>
  <UDrawer
    v-model:open="propertiesStore.isFilterDrawerOpen"
    direction="left"
    title="Filtrar imóveis"
    description="Refine sua busca"
  >
    <template #content>
      <HomePropertiesFilterForm />
    </template>
  </UDrawer>
</template>
