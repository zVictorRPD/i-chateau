<script setup lang="ts">
const neighborhoods = [
  { name: "Ipanema", image: "/img/home/ipanema.jpg" },
  { name: "Leblon", image: "/img/home/leblon.jpg" },
  { name: "Barra da Tijuca", image: "/img/home/barra-da-tijuca.webp" },
  { name: "Botafogo", image: "/img/home/botafogo.jpg" },
];
</script>

<template>
  <HomeContainer class="py-4 md:py-8 flex flex-col gap-6">
    <div class="flex justify-center">
      <h2 class="text-3xl font-semibold">Principais Bairros</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ULink
        to="/properties"
        class="hover:opacity-100"
        v-for="(neighborhood, index) in neighborhoods"
        :key="index"
      >
        <div
          class="w-52 h-80 mx-auto flex flex-col items-center gap-2 relative neighborhood-card hover:scale-105 transition-transform duration-300"
        >
          <img
            :src="neighborhood.image"
            :alt="neighborhood.name"
            class="rounded-2xl w-52 h-80 object-cover"
          />
          <span class="text-lg font-medium text-white absolute bottom-2.5 z-10">
            {{ neighborhood.name }}
          </span>
        </div>
      </ULink>
    </div>
  </HomeContainer>
</template>
<style scoped>
.neighborhood-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 0 0 1rem 1rem;
}
</style>
