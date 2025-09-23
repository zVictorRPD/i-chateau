<script setup lang="ts">
const showAllDescription = ref(false);
</script>
<template>
  <div class="flex flex-col gap-4 border-b border-gray-300 pb-4">
    <h2 class="text-2xl font-medium">Descrição</h2>
    <p
      class="text-justify relative"
      :class="!showAllDescription ? 'h-24 overflow-y-hidden preview-blur' : ''"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <UButton
      variant="link"
      :trailing-icon="
        showAllDescription ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'
      "
      size="lg"
      class="px-0 font-semibold"
      @click="showAllDescription = !showAllDescription"
    >
      {{ showAllDescription ? "Ocultar" : "Mostrar" }} descrição
    </UButton>
  </div>
</template>

<style scoped>
.preview-blur::after {
  content: "";
  display: block;
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
