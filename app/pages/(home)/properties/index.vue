<script setup lang="ts">
import FilterDrawer from "~/components/home/properties/filter-drawer.vue";
import FilterForm from "~/components/home/properties/filter-form.vue";
import { usePropertiesStore } from "~/stores/properties";

const propertiesStore = usePropertiesStore();
</script>

<template>
  <div class="flex gap-4">
    <aside
      class="hidden lg:flex h-full min-w-[360px] w-[360px] flex-col sticky top-0"
    >
      <FilterForm />
    </aside>
    <div class="min-h-[3000px]">
      <UButton @click="propertiesStore.openFilterDrawer"> open drawer filter </UButton>
    </div>
  </div>
  <FilterDrawer />
</template>
