<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

const items: TimelineItem[] = [
  {
    date: "Jan 2014",
    title: "Fundação da iChateau",
    icon: "i-lucide-building",
    value: "foundation",
    description: "A iChateau foi fundada com o objetivo de transformar o mercado imobiliário, trazendo inovação e excelência no atendimento aos clientes."
  },
  {
    date: "Jun 2016",
    title: "Primeira Expansão Regional",
    icon: "i-lucide-map-pin",
    value: "expansion",
    description: "Expandimos nossas operações para novas regiões, ampliando nosso alcance e fortalecendo nossa presença no setor."
  },
  {
    date: "Set 2018",
    title: "Lançamento da Plataforma Digital",
    icon: "i-lucide-monitor",
    value: "digital",
    description: "Lançamos nossa plataforma digital, facilitando o acesso dos clientes aos nossos serviços e modernizando nossos processos internos."
  },
  {
    date: "Mar 2021",
    title: "Reconhecimento Nacional",
    icon: "i-lucide-award",
    value: "recognition",
    description: "Recebemos reconhecimento nacional pela qualidade dos nossos serviços e pelo compromisso com a satisfação dos clientes."
  },
  {
    date: "Dez 2023",
    title: "Inovação em Sustentabilidade",
    icon: "i-lucide-leaf",
    value: "sustainability",
    description: "Implementamos práticas inovadoras de sustentabilidade, reafirmando nosso compromisso com o meio ambiente e a responsabilidade social."
  },
];
</script>

<template>
  <HomeContainer class="py-4 md:py-8">
    <h2 class="text-3xl text-center font-medium mb-4 md:mb-8">
      Nossa Linha do Tempo
    </h2>
    <UTimeline
      :items="items"
      :default-value="2"
      :ui="{
        item: 'lg:even:flex-row-reverse lg:even:-translate-x-[calc(100%-2rem)] lg:even:text-right',
      }"
      class="max-w-96 lg:translate-x-[calc(50%-1rem)] mx-auto"
    />
  </HomeContainer>
</template>
