<template>
  <HomeBanner title="Contato" />
  <HomeContainer class="py-4 md:py-8">
    <div class="grid lg:grid-cols-2 gap-4 mb-4">
      <HomeContactForm />
      <div class="flex flex-col gap-4 h-full">
        <HomeContactInfo />
        <HomeContactWorktime />
      </div>
    </div>
    <HomeContactMap />
  </HomeContainer>
</template>
