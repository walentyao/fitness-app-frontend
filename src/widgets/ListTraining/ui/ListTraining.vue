<script setup lang="ts">
import CardTraining from '@/entities/CardTraining/ui/CardTraining.vue'
import { useStore } from '@/app/providers/store'
import { storeToRefs } from 'pinia'

const store = useStore()
const { trainings } = storeToRefs(store)
</script>

<template>
  <div class="list-training">
    <CardTraining
      v-for="item in trainings"
      :key="item.title"
      :training="item"
    />
  </div>
</template>

<style scoped lang="scss">
.list-training {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
