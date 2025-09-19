<template>
  <HomeContainer class="py-4 md:py-8">
    <section class="flex flex-col gap-8">
      <HomeBlogMainCard />
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <HomeBlogGridCard v-for="n in 6" :key="n" />
      </div>
    </section>
  </HomeContainer>
</template>
