<template>
  <div class="card-plus">
    <PlusIcon class="card-plus__icon" />
  </div>
</template>

<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'
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
</style>
