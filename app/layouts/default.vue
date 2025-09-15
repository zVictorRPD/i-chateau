<script setup lang="ts">
import FooterHome from "~/components/layouts/home/footer.vue";
import HomeHeader from "~/components/layouts/home/header.vue";
</script>

<template>
  <HomeHeader />
  <main>
    <UContainer>
      <slot />
    </UContainer>
  </main>
  <FooterHome />
</template>
