<script setup lang="ts">
const features = [
  {
    id: 1,
    icon: "i-lucide-land-plot",
    label: "60 m²",
  },
  {
    id: 2,
    icon: "i-lucide-bed-double",
    label: "3 quartos",
  },
  {
    id: 3,
    icon: "i-lucide-shower-head",
    label: "2 banheiros",
  },
  {
    id: 4,
    icon: "i-lucide-car",
    label: "1 garagem",
  },
  {
    id: 5,
    icon: "i-lucide-armchair",
    label: "Mobilhado",
  },
  {
    id: 6,
    icon: "i-lucide-check",
    label: "Cozinha",
  },
  {
    id: 7,
    icon: "i-lucide-check",
    label: "Área de serviço",
  },
  {
    id: 8,
    icon: "i-lucide-check",
    label: "Varanda",
  },
  {
    id: 9,
    icon: "i-lucide-check",
    label: "Aceita pet",
  },
  {
    id: 10,
    icon: "i-lucide-check",
    label: "Portaria 24h",
  },
];
const showAllFeatures = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4 border-b border-gray-300 pb-4">
    <h2 class="text-2xl font-medium">Características</h2>
    <div
      class="grid grid-cols-2 lg:grid-cols-3 gap-4"
      :class="showAllFeatures ? 'h-auto' : 'h-16 overflow-y-hidden'"
    >
      <div
        class="flex items-center gap-3"
        v-for="feature in features"
        :key="feature.id"
      >
        <UIcon :name="feature.icon" size="24" />
        <span class="font-medium">{{ feature.label }}</span>
      </div>
    </div>
    <UButton
      variant="link"
      :trailing-icon="
        showAllFeatures ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'
      "
      size="lg"
      class="px-0 font-semibold"
      @click="showAllFeatures = !showAllFeatures"
    >
      {{ showAllFeatures ? "Ocultar" : "Todas" }} as características
    </UButton>
  </div>
</template>
