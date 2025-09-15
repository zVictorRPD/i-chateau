<script setup lang="ts">
import ColorModeButton from "../color-mode-button.vue";
import Logo from "../logo.vue";
import MobileNavbar from "./mobile-navbar.vue";
</script>

<template>
  <header class="py-6">
    <UContainer class="flex items-center justify-between">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <nav class="flex items-center gap-8 lg:gap-24">
        <ul class="hidden md:flex gap-6 lg:gap-8 font-medium text-lg">
          <li>
            <NuxtLink to="/properties" class="hover:border-b-2 pb-1"> Imóveis </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="hover:border-b-2 pb-1"> Blog </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:border-b-2 pb-1"> Contato </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-us" class="hover:border-b-2 pb-1"> Sobre nós </NuxtLink>
          </li>
        </ul>
        <div class="flex gap-3">
          <NuxtLink to="/auth/login">
            <UButton size="lg" class="px-6 hidden md:inline-flex">
              Entrar
            </UButton>
          </NuxtLink>
          <ColorModeButton />
          <MobileNavbar />
        </div>
      </nav>
    </UContainer>
  </header>
</template>

<style scoped>
.router-link-active {
  border-bottom: 2px solid;
}
</style>
