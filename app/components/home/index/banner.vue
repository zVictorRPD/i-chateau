<script lang="ts" setup>
import type { SelectMenuItem } from "@nuxt/ui";
const placeTypes = ref<SelectMenuItem[]>([
  { label: "Apartamento", id: "apartment" },
  { label: "Casa", id: "house" },
  { label: "Comercial", id: "commercial" },
  { label: "Terreno", id: "land" },
]);
const selectedPlaceTypes = ref<string[]>([]);
</script>

<template>
  <div class="relative">
    <HomeContainer
      class="py-4 md:py-8 md:min-h-[600px] flex items-center justify-center lg:justify-start relative"
    >
      <div class="md:max-w-lg xl:max-w-2xl 2xl:max-w-[750px] space-y-4">
        <h1 class="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-light">
          Encontre o imóvel dos seus sonhos com
          <span class="font-medium">
            facilidade, segurança e praticidade.
          </span>
        </h1>
        <p
          class="text-md md:text-lg lg:text-xl 2xl:text-2xl text-gray-700 dark:text-gray-300"
        >
          Explore nossas opções e descubra o lugar perfeito para você!
        </p>
        <form>
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div class="flex flex-col gap-1 md:col-span-6">
              <label
                class="font-light text-gray-700 dark:text-gray-300"
                for="filter-address"
              >
                Onde gostaria de morar?
              </label>
              <UInput
                id="filter-address"
                size="xl"
                placeholder="Digite a rua, bairro ou cidade"
                :icon="'i-lucide-search'"
              />
            </div>
            <div class="flex flex-col gap-1 md:col-span-3">
              <label
                class="font-light text-gray-700 dark:text-gray-300"
                for="filter-address"
              >
                Tipo de imóvel
              </label>
              <USelectMenu
                v-model="selectedPlaceTypes"
                multiple
                :items="placeTypes"
                class="w-full"
                id="filter-place-type"
                size="xl"
                placeholder="Selecione"
                :search-input="{
                  placeholder: 'Buscar...',
                }"
              />
            </div>
            <div class="flex items-end md:col-span-3">
              <UButton size="xl"> Buscar </UButton>
            </div>
          </div>
        </form>
      </div>
    </HomeContainer>
    <div
      class="hidden lg:block lg:w-md xl:w-xl 2xl:w-2xl h-[600px] absolute z-10 top-0 right-0"
    >
      <img
        src="/img/home/banner.jpg"
        class="h-full w-full object-cover rounded-bl-full"
      />
    </div>
  </div>
</template>
