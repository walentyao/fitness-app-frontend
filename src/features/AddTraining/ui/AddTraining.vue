<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="add-training">
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

  &__icon {
    width: 40px;
    height: 40px;
    color: white;
  }
}
</style>
