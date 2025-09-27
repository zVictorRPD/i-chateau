<script setup lang="ts">
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const props = defineProps<{
  title: string;
  properties: Array<any>;
}>();

const nextElClass = `${formatText(props.title)}-swiper-next-button`;
const prevElClass = `${formatText(props.title)}-swiper-prev-button`;

const swiperNavigation = computed(() => ({
  nextEl: "." + nextElClass,
  prevEl: "." + prevElClass,
}));
</script>

<template>
  <HomeContainer class="py-4 md:py-8 flex flex-col gap-6">
    <div class="flex justify-center">
      <h2 class="text-3xl font-semibold">{{ title }}</h2>
    </div>
    <div>
      <Swiper
        :space-between="16"
        :slides-per-group="2"
        :navigation="swiperNavigation"
        :modules="[Navigation]"
        class="h-full"
        :breakpoints="{
          320: { slidesPerView: 1, slidesPerGroup: 1 },
          540: { slidesPerView: 1.8, slidesPerGroup: 1 },
          768: { slidesPerView: 2.6, slidesPerGroup: 2 },
          1024: { slidesPerView: 3.3, slidesPerGroup: 2 },
          1280: { slidesPerView: 4.3, slidesPerGroup: 2 },
        }"
      >
        <SwiperSlide v-for="property in 16" :key="property">
          <HomePropertiesGridCard :number="property" class="sm:justify-start" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex justify-end gap-2">
      <UButton
        :class="prevElClass"
        aria-label="Slide anterior"
        tabindex="0"
        size="lg"
        icon="i-lucide-chevron-left"
        />
        <UButton
        :class="nextElClass"
        aria-label="Próximo slide"
        tabindex="0"
        size="lg"
        icon="i-lucide-chevron-right"
      />
    </div>
  </HomeContainer>
</template>
