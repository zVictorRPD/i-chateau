<script setup lang="ts">
const secondaryContainerClass = "bg-slate-200 dark:bg-slate-800";
</script>

<template>
  <div :class="secondaryContainerClass">
    <HomeIndexBanner />
  </div>
  <div :class="secondaryContainerClass"></div>
  <HomeIndexPropertiesCarousel title="Imóveis em Destaque" :properties="[]" />
  <div :class="secondaryContainerClass">
    <HomeIndexPropertiesCarousel
      title="Vistos Anteriormente"
      :properties="[]"
    />
  </div>
  <HomeIndexBlogCarousel />
  <div :class="secondaryContainerClass">
    <HomeIndexNeighborhood />
  </div>
</template>
