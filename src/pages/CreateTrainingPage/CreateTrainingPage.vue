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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
