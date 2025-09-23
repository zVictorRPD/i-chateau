<template>
  <div
    class="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-300 pb-4"
  >
    <h2 class="font-semibold text-lg">Título da propridade</h2>

    <div class="flex gap-3 items-center flex-shink-0">
      <UButton
        variant="outline"
        size="md"
        icon="i-lucide-share-2"
        aria-label="Compartilhar imóvel"
      >
        Compartilhar
      </UButton>
      <UButton
        variant="outline"
        size="md"
        icon="i-lucide-heart"
        aria-label="Salvar imóvel"
      >
        Salvar
      </UButton>
    </div>
  </div>
</template>
