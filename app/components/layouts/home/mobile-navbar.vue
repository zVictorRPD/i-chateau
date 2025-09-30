<script setup lang="ts">
const open = ref(false);
function closeDrawer() {
  open.value = false;
}
</script>

<template>
  <UDrawer
    direction="right"
    v-model:open="open"
    title="Menu"
    description="Navegação do site"
  >
    <UButton
      class="inline-flex md:hidden"
      color="neutral"
      variant="outline"
      trailing-icon="i-lucide-menu"
    />

    <template #content>
      <nav class="min-h-96 min-w-[80vw]">
        <div class="flex flex-col gap-4 items-end p-6">
          <UButton
            size="lg"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-x"
            @click="closeDrawer"
          />

          <ul class="flex flex-col gap-4 items-end font-medium text-lg w-full">
            <li class="border-b border-primary/20 w-full text-end pb-2">
              <ULink to="/properties" @click="closeDrawer" active-class="font-bold border-b"> Imóveis </ULink>
            </li>
            <li class="border-b border-primary/20 w-full text-end pb-2">
              <ULink to="/blog" @click="closeDrawer" active-class="font-bold border-b"> Blog </ULink>
            </li>
            <li class="border-b border-primary/20 w-full text-end pb-2">
              <ULink to="/contact" @click="closeDrawer" active-class="font-bold border-b"> Contato </ULink>
            </li>
            <li class="border-b border-primary/20 w-full text-end pb-2">
              <ULink to="/about-us" @click="closeDrawer" active-class="font-bold border-b"> Sobre nós </ULink>
            </li>
          </ul>
           <UButton
            size="lg"
            class="px-6 inline-flex"
            @click="closeDrawer"
          >
            Entrar
          </UButton> 
        </div>
      </nav>
    </template>
  </UDrawer>
</template>
