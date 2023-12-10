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
    :class="{ 'create-training__open': isOpenTraining }"
  >
    <div class="create-card">
      <PlusIcon
        v-if="!isOpenTraining"
        class="create-card__icon"
      />
      <CardCreateTraining v-else />
    </div>
  </div>
</template>

<style scoped lang="scss">
.create-training {
  display: flex;
  justify-content: center;
  align-items: center;

  &__open {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.create-card {
  width: 320px;
  height: 100px;
  border-radius: 6px;
  background: var(--color-card-training);

  &__icon {
    width: 30px;
    height: 30px;
  }
}
</style>
