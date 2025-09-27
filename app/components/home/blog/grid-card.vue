<template>
  <ULink to="/blog/1" class="group hover:opacity-100">
    <div class="flex flex-col gap-4 max-w-96 mx-auto">
      <div class="h-64">
        <img
        src="/img/blog/blog.jpg"
        alt="Blog Image"
        class="w-full h-full object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div class="flex flex-col gap-2.5">
        <div class="flex gap-2">
          <span class="font-semibold text-pink-600"> Categoria </span>
          <span class="text-gray-300"> | </span>
          <time datetime="2024-07-01" class="text-muted font-semibold">
            01/07/2024
          </time>
        </div>
        <h2 class="text-xl font-bold">
          Lorem ipsum dolor sit amet. Lorem, ipsum.
        </h2>
        <p class="text-gray-700 dark:text-gray-300 line-clamp-2">
          This is a brief description of the blog post. It provides an overview of
          the content and entices readers to click through and read more.
        </p>
      </div>
    </div>
  </ULink>
</template>
