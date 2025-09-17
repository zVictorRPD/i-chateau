<script setup lang="ts">
import { usePropertiesStore } from "~/stores/properties";

const propertiesStore = usePropertiesStore();
</script>
<template>
  <div class="flex justify-between flex-col md:flex-row gap-4 md:items-center">
    <div class="flex md:items-center gap-1">
      <UButton
        @click="propertiesStore.openFilterDrawer"
        :icon="'i-lucide-funnel'"
        class="lg:hidden"
      >
        Filtros
      </UButton>
      <UButton variant="ghost" size="lg" :icon="'i-lucide-layout-grid'" />
      <UButton variant="ghost" size="lg" :icon="'i-lucide-list'" />
    </div>
    <div class="flex items-center gap-2">
      <span class="text-muted">Ordenar por</span>
      <USelect
        default-value="Mais recentes"
        variant="outline"
        class="w-44"
        size="md"
        :items="['Mais recentes', 'Menor preço', 'Maior área']"
      />
    </div>
  </div>
</template>
