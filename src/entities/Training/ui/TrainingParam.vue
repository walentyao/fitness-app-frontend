<template>
  <div>
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
      class="w-full md:w-14rem"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown'
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>

<style lang="scss" scoped></style>
