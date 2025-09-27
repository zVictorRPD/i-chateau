<script setup lang="ts">
const team = [
  {
    id: 1,
    name: "Fernando Silva",
    role: "CEO & Fundador",
    photo: "/img/about-us/team/person-1.jpg",
  },
  {
    id: 2,
    name: "Rafael Lima",
    role: "Diretor de Operações",
    photo: "/img/about-us/team/person-2.jpg",
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    role: "Gerente de Marketing",
    photo: "/img/about-us/team/person-3.jpg",
  },
  {
    id: 4,
    name: "Juliana Costa",
    role: "Coordenadora de Vendas",
    photo: "/img/about-us/team/person-4.jpg",
  },
  {
    id: 5,
    name: "Mariana Souza",
    role: "Desenvolvedora Sênior",
    photo: "/img/about-us/team/person-5.jpg",
  },
  {
    id: 6,
    name: "Patrícia Mendes",
    role: "Analista Financeira",
    photo: "/img/about-us/team/person-6.jpg",
  },
  {
    id: 7,
    name: "Lucas Pereira",
    role: "Especialista em Atendimento",
    photo: "/img/about-us/team/person-7.jpg",
  },
  {
    id: 8,
    name: "Ana Paula Ribeiro",
    role: "Recursos Humanos",
    photo: "/img/about-us/team/person-8.jpg",
  },
];
</script>

<template>
  <div class="bg-gray-100 dark:bg-old-neutral-900">
    <HomeContainer class="py-4 md:py-8">
      <h2 class="text-3xl text-center font-medium mb-4 md:mb-8">
        Conheça Nosso Time
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
        <div v-for="member in team" :key="member.id" class="flex flex-col items-center">
          <div class="w-28 h-28 mb-2">
            <img
              :src="member.photo"
              :alt="member.name"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <h6 class="font-semibold text-lg text-center">{{ member.name }}</h6>
          <p class="text-sm text-center text-gray-600 dark:text-gray-400">{{ member.role }}</p>
        </div>
      </div>
    </HomeContainer>
  </div>
</template>
