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
  <div class="relative bg-slate-200">
    <HomeContainer
      class="py-4 md:py-8 md:min-h-[600px] flex items-center relative z-20"
    >
      <div class="bg-slate-200 lg:rounded-r-full md:p-8">
        <div class="max-w-3xl space-y-4">
          <h1 class="text-2xl sm:text-3xl md:text-5xl font-light">
            Encontre o imóvel dos seus sonhos com
            <span class="font-medium">
              facilidade, segurança e praticidade.
            </span>
          </h1>
          <p class="text-md md:text-2xl text-gray-700">
            Explore nossas opções e descubra o lugar perfeito para você!
          </p>
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div class="flex flex-col gap-1 md:col-span-6">
                <label class="font-light text-gray-700" for="filter-address">
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
                <label class="font-light text-gray-700" for="filter-address">
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
      </div>
    </HomeContainer>
    <div class="hidden lg:block xl:w-3xl 2xl:w-4xl h-[600px] absolute z-10 top-0 right-0">
      <img
        src="/img/home/banner.jpg"
        class="h-full w-full object-cover rounded-bl-[20%]"
      />
    </div>
  </div>
</template>
