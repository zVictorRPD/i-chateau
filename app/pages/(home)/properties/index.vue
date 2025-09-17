<template>
  <div class="flex gap-4">
    <aside
      class="hidden lg:flex h-full min-w-[360px] w-[360px] flex-col sticky top-0"
    >
      <HomePropertiesFilterForm />
    </aside>
    <section class="flex-1 flex flex-col gap-4 pb-4">
      <HomePropertiesListOptions />
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <HomePropertiesPropertyGridCard v-for="property in 16" :key="property" />
      </div>
    </section>
  </div>
  <HomePropertiesFilterDrawer />
</template>
