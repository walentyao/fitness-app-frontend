<script setup lang="ts">
import CardAddTraining from '@/features/CreateTraining/ui/CardAddTraining.vue'
import { TheModal } from '@/shared/components/Modal'
import { ref } from 'vue'

const openModal = ref<boolean>(false)
const handlerClickAddCard = () => {
  openModal.value = !openModal.value
}
</script>

<template>
  <div class="card">
    <Transition name="slide-fade">
      <CardAddTraining
        v-if="!openModal"
        @click-add-card="handlerClickAddCard"
      />
      <TheModal
        v-else
        :open-modal="openModal"
      >
        <slot></slot>
      </TheModal>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px) scale(120%);
  opacity: 0;
}
</style>
