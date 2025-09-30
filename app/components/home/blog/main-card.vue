<template>
  <ULink to="/blog/1" class="group hover:opacity-100">
    <div
      class="flex flex-col max-w-96 mx-auto md:max-w-none md:flex-row gap-4 md:gap-8"
    >
      <div class="md:w-1/2 md:h-[300px] lg:h-[400px] flex-shrink-0">
        <img
          src="/img/blog/main-blog.jpg"
          alt="Blog Image"
          class="w-full h-full object-cover rounded-lg lg:group-hover:scale-[1.01] transition-transform duration-300"
        />
      </div>
      <div class="flex flex-col gap-4 md:gap-8">
        <div class="flex gap-2">
          <span class="font-semibold text-pink-600"> Categoria </span>
          <span class="text-gray-300"> | </span>
          <time datetime="2024-07-01" class="text-muted font-semibold">
            01/07/2024
          </time>
        </div>
        <h2 class="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          Lorem ipsum dolor sit amet. Lorem, ipsum.
        </h2>
        <p
          class="lg:text-lg xl:text-xl text-gray-700 line-clamp-2 md:line-clamp-4"
        >
          This is a brief description of the blog post. It provides an overview
          of the content and entices readers to click through and read more.
          This is a brief description of the blog post. It provides an overview
          of the content and entices readers to click through and read more.
        </p>
      </div>
    </div>
  </ULink>
</template>
