<script lang="ts" setup>
const contactSubjectsItems = [
  { label: "Dúvidas", value: "doubts" },
  { label: "Orçamento", value: "budget" },
  { label: "Parcerias", value: "partnerships" },
  { label: "Outros", value: "others" },
];
const contactSubjectValue = ref("");
</script>

<template>
  <div>
    <UCard variant="outline" class="shadow-md h-full">
      <template #header>
        <h3 class="text-md md:text-xl font-bold uppercase">
          Envie sua mensagem
        </h3>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label class="font-medium" for="contact-name"> Nome </label>
          <UInput id="contact-name" size="xl" placeholder="Digite seu nome" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-medium" for="contact-phone"> Celular </label>
          <UInput
            id="contact-phone"
            size="xl"
            placeholder="Digite seu celular"
          />
        </div>
        <div class="flex flex-col gap-2 md:col-span-2">
          <label class="font-medium" for="contact-email"> E-mail </label>
          <UInput
            id="contact-email"
            size="xl"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div class="flex flex-col gap-2 md:col-span-2">
          <label class="font-medium" for="contact-subject"> Assunto </label>
          <USelect
            v-model="contactSubjectValue"
            :items="contactSubjectsItems"
            placeholder="Selecione o assunto"
            id="contact-subject"
            size="xl"
            class="w-full"
          />
        </div>
        <div class="flex flex-col gap-2 md:col-span-2">
          <label class="font-medium" for="contact-message"> Mensagem </label>
          <UTextarea
            id="contact-message"
            size="xl"
            placeholder="Digite sua mensagem"
            autoresize
            :rows="4"
          />
        </div>
        <div class="md:col-span-2 flex justify-end">
          <UButton color="primary" size="xl"> Enviar Mensagem </UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>
