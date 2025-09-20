<template>
  <div>
    <UCard variant="outline" class="shadow-md">
      <template #header>
        <h3 class="text-md md:text-xl font-bold uppercase">Informações de contato</h3>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex gap-4 items-center">
          <UIcon name="i-lucide-phone" size="28" />
          <div class="flex flex-col gap-0.5">
            <div class="font-semibold">Telefone</div>
            <div>(11) 1234-5678</div>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <UIcon name="i-lucide-message-square" size="28" />
          <div class="flex flex-col gap-0.5">
            <div class="font-semibold">WhatsApp</div>
            <div>(11) 1234-5678</div>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <UIcon name="i-lucide-mail" size="28" />
          <div class="flex flex-col gap-0.5">
            <div class="font-semibold">E-mail</div>
            <div>iChateau@teste.com</div>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <UIcon name="i-lucide-contact-round" size="28" />
          <div class="flex flex-col gap-0.5 justify-between">
            <div class="font-semibold">Redes Sociais</div>
            <div class="flex gap-2 flex-wrap">
              <UIcon name="i-lucide-facebook" size="22" />
              <UIcon name="i-lucide-instagram" size="22" />
              <UIcon name="i-lucide-youtube" size="22" />
              <UIcon name="i-lucide-linkedin" size="22" />
            </div>
          </div>
        </div>
        <div class="flex gap-4 md:col-span-2 items-center">
          <UIcon name="i-lucide-map-pin" size="28" />
          <div class="flex flex-col gap-0.5">
            <div class="font-semibold">Endereço</div>
            <div>Rua Exemplo, 123 - Bonsucesso - Rio de Janeiro</div>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
