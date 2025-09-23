<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="h-48 bg px-4 flex flex-col justify-center items-center text-white bg-[linear-gradient(225deg,rgba(67,67,67,1)_0%,rgba(0,0,0,1)_50%)]"
  >
    <h1 class="text-3xl md:text-5xl font-bold text-center uppercase tracking-wider">{{ title }}</h1>
  </div>
</template>