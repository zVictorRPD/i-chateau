<script setup lang="ts">
import ColorModeButton from "../color-mode-button.vue";
import Logo from "../logo.vue";
import MobileNavbar from "./mobile-navbar.vue";
</script>

<template>
  <header class="py-6">
    <UContainer class="flex items-center justify-between">
      <ULink to="/" active-class="false">
        <Logo />
      </ULink>
      <nav class="flex items-center gap-8 lg:gap-24">
        <ul class="hidden md:flex gap-6 lg:gap-8 font-medium text-lg">
          <li>
            <ULink
              to="/properties"
              class="hover:border-b-2 pb-1"
              active-class="border-b-2"
            >
              Imóveis
            </ULink>
          </li>
          <li>
            <ULink
              to="/blog"
              class="hover:border-b-2 pb-1"
              active-class="border-b-2"
            >
              Blog
            </ULink>
          </li>
          <li>
            <ULink
              to="/contact"
              class="hover:border-b-2 pb-1"
              active-class="border-b-2"
            >
              Contato
            </ULink>
          </li>
          <li>
            <ULink
              to="/about-us"
              class="hover:border-b-2 pb-1"
              active-class="border-b-2"
            >
              Sobre nós
            </ULink>
          </li>
        </ul>
        <div class="flex gap-3">
          <UButton
            size="lg"
            class="px-6 hidden md:inline-flex pointer-events-none"
            as="ULink"
            to="/auth/login"
          >
            Entrar
          </UButton>
          <ColorModeButton />
          <MobileNavbar />
        </div>
      </nav>
    </UContainer>
  </header>
</template>
