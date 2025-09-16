<script setup lang="ts">
import FilterForm from "./filter-form.vue";
const propertiesStore = usePropertiesStore();
</script>

<template>
  <UDrawer
    v-model:open="propertiesStore.isFilterDrawerOpen"
    direction="right"
    title="Filtrar imóveis"
    description="Refine sua busca"
  >
    <template #content>
      <FilterForm />
    </template>
  </UDrawer>
</template>
