<template>
  <div class="h-full">
    <UCard variant="outline" class="shadow-md h-full">
      <template #header>
        <h3 class="text-md md:text-xl font-bold uppercase">Horário de funcionamento</h3>
      </template>

      <div class="flex flex-col justify-between gap-4">
        <div class="flex gap-4 items-center">
          <UIcon name="i-lucide-clock-3" size="28" />
          <div class="flex flex-col gap-0.5">
            <div class="font-semibold">Segunda a Sexta-feira</div>
            <div>9:00am - 8:00pm</div>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <UIcon name="i-lucide-clock-12" size="28" />
          <div class="flex flex-col gap-0.5">
            <div class="font-semibold">Sábados</div>
            <div>9:00am - 12:00pm</div>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
