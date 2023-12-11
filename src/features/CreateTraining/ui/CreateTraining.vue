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
    // TODO: add animation
    <div
      class="create-card"
      :class="{ 'create-card__open': isOpenTraining }"
    >
      <Transition name="fade">
        <div
          v-if="!isOpenTraining"
          class="card-plus"
        >
          <PlusIcon class="create-card__icon" />
        </div>
        <CardCreateTraining v-else />
      </Transition>
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

    padding: 20px;
  }
}
.create-card {
  width: 320px;
  height: 100px;
  border-radius: 6px;
  background: var(--color-card-training);

  transition: all 0.3s ease;

  &__icon {
    width: 30px;
    height: 30px;
  }

  &__open {
    width: 100%;
    height: 100%;
  }
}

.card-plus {
  width: 320px;
  height: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
