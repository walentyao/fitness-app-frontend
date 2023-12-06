<script setup lang="ts">
import { ref } from 'vue'
import OpenCardAddTraining from './OpenCardAddTraining.vue'
import CardCreateTraining from '@/entities/Training/ui/CardCreateTraining.vue'

const isOpenTraining = ref(false)
</script>

<template>
  <div>
    <OpenCardAddTraining>
      <CardCreateTraining />
    </OpenCardAddTraining>
  </div>
</template>

<style scoped lang="scss"></style>
