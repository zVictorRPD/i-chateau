<template>
  <div class="flex flex-col gap-4 border-b border-gray-300 pb-4">
    <h2 class="text-2xl font-medium">Localização</h2>
    <div class="flex gap-3 items-center">
      <UIcon name="i-lucide-map-pin" size="24" />
      <span class="font-semibold">Endereço do local, Cidade - RJ</span>
    </div>
    <div class="w-full h-64 rounded-lg overflow-hidden">
      <iframe
        class="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.737634576953!2d-46.65641968445687!3d-23.564224984686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7b5a1b6b7%3A0x8e8e8e8e8e8e8e8e!2sAvenida%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1616171234567!5m2!1spt-BR!2sus"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</template>
