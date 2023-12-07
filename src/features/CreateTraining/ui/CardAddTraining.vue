<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const openCard = ref<boolean>(false)
const handlerClickCard = () => {
  openCard.value = !openCard.value
}
</script>

<template>
  <div
    class="add-training"
    @click="handlerClickCard"
    :class="{ 'animation-open-card': openCard }"
  >
    <PlusIcon class="add-training__icon" />

    <!--    <Transition name="slide-fade">-->
    <!--      <PlusIcon-->
    <!--        class="add-training__icon"-->
    <!--        v-if="!openCard"-->
    <!--      />-->
    <!--      <slot v-else></slot>-->
    <!--    </Transition>-->
  </div>
</template>

<style scoped lang="scss">
.add-training {
  padding: 20px;
  background: var(--color-card-training);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  width: 100%;
  cursor: pointer;

  &__icon {
    width: 40px;
    height: 40px;
    color: white;
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
  transition-delay: 0.2s;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.animation-open-card {
  // чтоб работала анимация, нужно прописать изначальные размеры в пикселях
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
}
</style>
