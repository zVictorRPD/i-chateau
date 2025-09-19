<script setup lang="ts">
defineProps<{
  class?: string;
}>();
</script>

<template>
  <UContainer :class="class">
    <slot />
  </UContainer>
</template>
