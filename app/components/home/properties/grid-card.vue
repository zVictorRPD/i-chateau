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
    class="flex justify-center hover:opacity-100 lg:hover:scale-[1.02] transition-all duration-200"
  >
    <div class="flex flex-col gap-2 max-w-[269px]">
      <div>
        <Swiper
          :slides-per-view="1"
          :navigation="swiperNavigation"
          :modules="[Navigation]"
        >
          <SwiperSlide>
            <div class="aspect-square overflow-hidden">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/house.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full rounded-sm hover:rounded-none"
                width="400"
                height="400"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="aspect-square overflow-hidden">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/bedroom.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full rounded-sm hover:rounded-none"
                width="400"
                height="400"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="aspect-square overflow-hidden">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/bathroom.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full rounded-sm hover:rounded-none"
                width="400"
                height="400"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="aspect-square overflow-hidden">
              <NuxtImg
                :src="`/img/properties/house-${(number % 3) + 1}/livingroom.png`"
                format="png"
                preload
                loading="eager"
                fectch-priority="high"
                class="object-cover w-full h-full rounded-sm hover:rounded-none"
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
      <div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-0.5">
            <h3 class="font-bold text-lg">R$ 1350</h3>
            <span class="text-muted">/mês</span>
          </div>
          <UButton
            :icon="'i-lucide-heart'"
            variant="ghost"
            size="sm"
            aria-label="Salvar imóvel"
          />
        </div>
        <div>
          <p class="text-muted text-xs">Cond. R$ 350 | IPTU R$ 50</p>
        </div>
      </div>

      <div>
        <p class="text-sm font-semibold">Endereço do local, Cidade</p>
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
    </div>
  </ULink>
</template>
