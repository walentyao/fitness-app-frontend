<script setup lang="ts">
import { ref } from 'vue'
import CardCreateTraining from '@/entities/Training/ui/CardCreateTraining.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'

const isOpenTraining = ref(false)
</script>

<template>
  <div
    class="create-training"
    @click="isOpenTraining = !isOpenTraining"
  >
    <PlusIcon
      v-if="!isOpenTraining"
      class="create-training__icon"
    />
    <CardCreateTraining v-else />
  </div>
</template>

<style scoped lang="scss">
.create-training {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 100px;
  border-radius: 6px;
  background: var(--color-card-training);

  &__icon {
    width: 30px;
    height: 30px;
  }
}
</style>
