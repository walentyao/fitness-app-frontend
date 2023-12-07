<script setup lang="ts">
import { ref } from 'vue'
import CardCreateTraining from '@/entities/Training/ui/CardCreateTraining.vue'
import CardAddTraining from '@/features/CreateTraining/ui/CardAddTraining.vue'

const isOpenTraining = ref(false)
</script>

<template>
  <div class="create-training">
    <CardAddTraining>
      <CardCreateTraining />
    </CardAddTraining>
  </div>
</template>

<style scoped lang="scss">
.create-training {
}
</style>
