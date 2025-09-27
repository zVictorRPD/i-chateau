<script setup lang="ts">
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const swiperNavigation = {
  nextEl: ".home-blog-swiper-next-button",
  prevEl: ".home-blog-swiper-prev-button",
};
</script>

<template>
  <HomeContainer class="py-4 md:py-8 flex flex-col gap-6">
    <div class="flex justify-center">
      <h2 class="text-3xl font-semibold">Confira Nosso Blog</h2>
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
          540: { slidesPerView: 1.3, slidesPerGroup: 1 },
          768: { slidesPerView: 1.6, slidesPerGroup: 1 },
          994: { slidesPerView: 2.3, slidesPerGroup: 2 },
          1280: { slidesPerView: 3.3, slidesPerGroup: 2 },
        }"
      >
        <SwiperSlide v-for="property in 16" :key="property">
          <HomeBlogGridCard />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex justify-end gap-2">
      <UButton
        class="home-blog-swiper-prev-button"
        aria-label="Slide anterior"
        tabindex="0"
        size="lg"
        icon="i-lucide-chevron-left"
      />
      <UButton
        class="home-blog-swiper-next-button"
        aria-label="Próximo slide"
        tabindex="0"
        size="lg"
        icon="i-lucide-chevron-right"
      />
    </div>
  </HomeContainer>
</template>
