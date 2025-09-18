<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <template v-if="!isDark">
      <img
        src="/img/logo/light-logo.png"
        class="hidden md:block"
        width="176"
        height="28"
        alt="i chateau logo"
      />
      <img
        src="/img/logo/short-light-logo.png"
        class="block md:hidden"
        width="32"
        height="28"
        alt="i chateau logo"
      />
    </template>
    <template v-else>
      <img
        src="/img/logo/dark-logo.png"
        class="hidden md:block"
        width="176"
        height="28"
        alt="i chateau logo"
      />
      <img
        src="/img/logo/short-dark-logo.png"
        class="block md:hidden"
        width="32"
        height="28"
        alt="i chateau logo"
      />
    </template>

    <template #fallback>
      <div class="w-44 h-[28px]" />
    </template>
  </ClientOnly>
</template>
