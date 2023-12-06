<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'

const emit = defineEmits<{
  (e: 'clickAddCard'): void
}>()
</script>

<template>
  <div
    class="add-training"
    @click="emit('clickAddCard')"
  >
    <PlusIcon class="add-training__icon" />
  </div>
</template>

<style scoped lang="scss">
.add-training {
  padding: 20px;
  background: var(--color-card-training);
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &__icon {
    width: 40px;
    height: 40px;
    color: white;
  }
}
</style>
