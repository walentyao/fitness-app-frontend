<template>
  <div
    class="card-plus"
    @click="handlerClickCardPlus"
    :class="{ 'animate-click': isAnimateClick }"
  >
    <PlusIcon class="card-plus__icon" />
  </div>
</template>

<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const isAnimateClick = ref(false)
const handlerClickCardPlus = () => {
  isAnimateClick.value = !isAnimateClick.value
}
</script>

<style lang="scss" scoped>
.card-plus {
  width: 100%;
  height: 100px;

  background: var(--color-card-training);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 30px;
    height: 30px;
  }
}

.animate-click {
  animation: click-card 0.1s ease;
}

@keyframes click-card {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}
</style>
