<script setup lang="ts">
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const swiperNavigation = {
  nextEl: ".swiper-next-button",
  prevEl: ".swiper-prev-button",
};

defineProps<{
  number: number;
}>();
</script>

<template>
  <ULink
    as="div"
    to="/properties/1"
    class="block hover:opacity-100 lg:hover:scale-[1.01] hover:shadow-md transition-all duration-200"
  >
    <div
      class="flex w-full max-w-[840px] max-h-52 gap-2 border rounded-md border-gray-300"
    >
      <div class="w-5/12">
        <Swiper
          :slides-per-view="1"
          :navigation="swiperNavigation"
          :modules="[Navigation]"
          class="h-full"
        >
          <SwiperSlide class="h-full">
            <div class="h-full">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/house.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full"
                width="400"
                height="400"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide class="h-full">
            <div class="h-full">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/bedroom.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full"
                width="400"
                height="400"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide class="h-full">
            <div class="h-full">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/bathroom.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full"
                width="400"
                height="400"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide class="h-full">
            <div class="h-full">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/livingroom.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full"
                width="400"
                height="400"
              />
            </div>
          </SwiperSlide>
          <UButton
            class="swiper-prev-button absolute top-1/2 -translate-y-1/2 left-2 z-10 rounded-full"
            aria-label="Slide anterior"
            tabindex="0"
            size="xs"
            icon="i-lucide-chevron-left"
          />
          <UButton
            class="swiper-next-button absolute top-1/2 -translate-y-1/2 right-2 z-10 rounded-full"
            aria-label="Próximo slide"
            tabindex="0"
            size="xs"
            icon="i-lucide-chevron-right"
          />
        </Swiper>
      </div>
      <div class="flex flex-col min-h-52 justify-between w-full gap-2 p-3">
        <div class="flex items-center justify-between gap-3">
          <div>
            <h4 class="text-lg font-semibold">Endereço do local, Cidade</h4>
          </div>
          <div class="flex-shrink-0">
            <UButton
              :icon="'i-lucide-heart'"
              variant="outline"
              size="xl"
              aria-label="Salvar imóvel"
            />
          </div>
        </div>
        <div class="flex items-center gap-4 text-muted">
          <div class="flex gap-0.5 items-center">
            <UIcon name="i-lucide-land-plot" size="20" />
            <span class="font-semibold">36 m²</span>
          </div>
          <div class="flex gap-0.5 items-center">
            <UIcon name="i-lucide-bed-double" size="20" />
            <span class="font-semibold">3</span>
          </div>
          <div class="flex gap-0.5 items-center">
            <UIcon name="i-lucide-shower-head" size="20" />
            <span class="font-semibold">3</span>
          </div>
          <div class="flex gap-0.5 items-center">
            <UIcon name="i-lucide-car" size="20" />
            <span class="font-semibold">3</span>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-0.5">
            <h3 class="font-bold text-xl">R$ 1350</h3>
            <span class="text-muted">/mês</span>
          </div>
          <div>
            <p class="text-muted text-sm">Cond. R$ 350 | IPTU R$ 50</p>
          </div>
        </div>
      </div>
    </div>
  </ULink>
</template>
