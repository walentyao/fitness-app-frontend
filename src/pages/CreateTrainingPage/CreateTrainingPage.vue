<template>
  <div class="create-training-page">
    <CardCreateTraining :training="{ title: 'New training', params: [] }" />
  </div>
</template>

<script setup lang="ts">
import { CardCreateTraining } from '@/entities/Training'
</script>

<style lang="scss" scoped>
.create-training-page {
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
}
</style>
