<script setup lang="ts">
import type {
  CheckboxGroupItem,
  CheckboxGroupValue,
  RadioGroupItem,
  RadioGroupValue,
} from "@nuxt/ui";
const checkboxValue = ref<CheckboxGroupValue[]>([]);
const checkboxItems = ref<CheckboxGroupItem[]>([
  { label: "Apartamento", value: "apartment" },
  { label: "Casa", value: "house" },
  { label: "Cobertura", value: "penthouse" },
  { label: "Terreno", value: "land" },
  { label: "Comercial", value: "commercial" },
]);

const placeItems = ref<RadioGroupItem[]>([
  { label: "1+", value: "1" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
]);
const bedroomValue = ref<RadioGroupValue>("1");
const suitsValue = ref<RadioGroupValue>("1");
const bathroomValue = ref<RadioGroupValue>("1");
const garageValue = ref<RadioGroupValue>();
</script>

<template>
  <form action="">
    <div class="h-[calc(100vh_-_69px)] p-4 pb-20 sticky top-0 overflow-y-auto">
      <div class="flex flex-col gap-4">
        <div class="flex gap-1 w-full p-0.5 border border-gray-200 rounded-sm">
          <UButton color="primary" variant="solid" block>Comprar</UButton>
          <UButton color="primary" variant="ghost" block>Alugar</UButton>
        </div>

        <div class="flex flex-col gap-2 border-b border-primary/20 pb-4">
          <label class="text-lg font-bold" for="filter-property-type">
            Tipo de imóvel
          </label>
          <UCheckboxGroup
            id="filter-property-type"
            name="filter-property-type"
            v-model="checkboxValue"
            :items="checkboxItems"
            size="xl"
          />
        </div>
        <div class="flex flex-col gap-2 border-b border-primary/20 pb-4">
          <div class="flex flex-col gap-2">
            <label class="text-lg font-bold" for="filter-bedroom">
              Quartos
            </label>
            <URadioGroup
              id="filter-bedroom"
              name="filter-bedroom"
              variant="table"
              indicator="hidden"
              orientation="horizontal"
              v-model="bedroomValue"
              :items="placeItems"
              size="sm"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-lg font-bold" for="filter-suits"> Suítes </label>
            <URadioGroup
              id="filter-suits"
              name="filter-suits"
              variant="table"
              indicator="hidden"
              orientation="horizontal"
              v-model="suitsValue"
              :items="placeItems"
              size="sm"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-lg font-bold" for="filter-bathroom">
              Banheiros
            </label>
            <URadioGroup
              id="filter-bathroom"
              name="filter-bathroom"
              variant="table"
              indicator="hidden"
              orientation="horizontal"
              v-model="bathroomValue"
              :items="placeItems"
              size="sm"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-lg font-bold" for="filter-garage"> Vagas </label>
            <URadioGroup
              id="filter-garage"
              name="filter-garage"
              variant="table"
              indicator="hidden"
              orientation="horizontal"
              v-model="garageValue"
              :items="placeItems"
              size="sm"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2 border-b border-primary/20 pb-4">
          <label class="text-lg font-bold" for="filter-min-price">Preço</label>
          <div class="flex items-center gap-2">
            <UInput
              id="filter-min-price"
              size="lg"
              default-value="R$ 1000,00"
              name="filter-min-price"
            />
            <UIcon name="i-lucide-minus" />
            <UInput
              size="lg"
              name="filter-max-price"
              default-value="R$ 3500,00"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2 border-b border-primary/20 pb-4">
          <label class="text-lg font-bold" for="filter-min-area">Área</label>
          <div class="flex items-center gap-2">
            <UInput
              id="filter-min-area"
              name="filter-min-area"
              size="lg"
              placeholder="20m²"
            />
            <UIcon name="i-lucide-minus" />
            <UInput size="lg" name="filter-max-area" placeholder="50m²" />
          </div>
        </div>
        <div class="flex flex-col gap-2 border-b border-primary/20 pb-4">
          <label class="text-lg font-bold" for="filter-id"
            >Código do imóvel</label
          >
          <UInput
            id="filter-id"
            icon="i-lucide-search"
            size="lg"
            placeholder="Digite o código"
          />
        </div>
      </div>
    </div>
    <div
      class="sticky bottom-0 left-0 flex w-full p-4 bg-bg border-t border-primary/20 gap-2"
    >
      <UButton variant="soft" color="primary" block size="lg"
        >Limpar filtros</UButton
      >
      <UButton color="primary" variant="solid" block size="lg">
        Buscar imóveis
      </UButton>
    </div>
  </form>
</template>
