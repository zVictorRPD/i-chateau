<template>
  <div class="grid grid-cols-1 gap-4">
    <div class="flex flex-col gap-2">
      <label class="font-medium" for="contact-name"> Nome </label>
      <UInput id="contact-name" size="xl" placeholder="Digite seu nome" />
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-medium" for="contact-phone"> Celular </label>
      <UInput id="contact-phone" size="xl" placeholder="Digite seu celular" />
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-medium" for="contact-email"> E-mail </label>
      <UInput id="contact-email" size="xl" placeholder="Digite seu e-mail" />
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-medium" for="contact-message"> Mensagem </label>
      <UTextarea
        id="contact-message"
        size="xl"
        placeholder="Digite sua mensagem"
        default-value="Olá, tenho interesse neste imóvel e gostaria de mais informações."
        autoresize
        :rows="4"
      />
    </div>
    <div class="flex justify-end">
      <UButton color="primary" size="xl"> Enviar Mensagem </UButton>
    </div>
  </div>
</template>
