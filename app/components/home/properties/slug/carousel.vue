<script setup lang="ts">
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const swiperNavigation = {
  nextEl: ".swiper-next-button",
  prevEl: ".swiper-prev-button",
};

const mockPropertyImages = [
  "/img/properties/house-1/house.png",
  "/img/properties/house-1/bedroom.png",
  "/img/properties/house-1/bathroom.png",
  "/img/properties/house-1/livingroom.png",
  "/img/properties/house-3/bathroom.png",
  "/img/properties/house-3/livingroom.png",
];

const { openGalleryModal, openMapModal } = usePropertiesStore();
</script>

<template>
  <div class="relative">
    <Swiper
      :navigation="swiperNavigation"
      :modules="[Navigation]"
      space-between="8"
      :breakpoints="{
        360: {
          slidesPerView: 1.2,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 8,
        },
      }"
    >
      <SwiperSlide v-for="(image, index) in mockPropertyImages" :key="index">
        <NuxtImg
          :src="image"
          format="png"
          preload
          loading="eager"
          fectch-priority="high"
          width="400"
          height="400"
          class="object-cover w-full h-[400px]"
        />
      </SwiperSlide>
      <UButton
        class="swiper-prev-button absolute top-1/2 -translate-y-1/2 left-2 z-10 rounded-full"
        aria-label="Slide anterior"
        tabindex="0"
        size="xl"
        icon="i-lucide-chevron-left"
      />
      <UButton
        class="swiper-next-button absolute top-1/2 -translate-y-1/2 right-2 z-10 rounded-full"
        aria-label="Próximo slide"
        tabindex="0"
        size="xl"
        icon="i-lucide-chevron-right"
      />
    </Swiper>
    <HomeContainer class="absolute bottom-4 z-30 left-1/2 -translate-x-1/2">
      <div class="flex gap-3">
        <UButton icon="i-lucide-image" size="lg" @click="openGalleryModal">
          <span class="hidden md:inline">Visualizar galeria completa</span>
          <span class="inline md:hidden">Galeria</span>
        </UButton>
        <UButton icon="i-lucide-map-pin" size="lg" @click="openMapModal"> 
          <span class="hidden md:inline">Ver localização no mapa</span>
          <span class="inline md:hidden">Mapa</span>  
        </UButton>
      </div>
    </HomeContainer>
  </div>
</template>
