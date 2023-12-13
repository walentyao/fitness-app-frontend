<script setup lang="ts">
import { ListTraining } from '@/widgets/ListTraining'
import CreateTraining from '@/features/CreateTraining/components/CreateTraining.vue'
</script>

<template>
  <main class="page-training">
    <ListTraining />
    <CreateTraining />
  </main>
</template>

<style scoped lang="scss">
.page-training {
  padding: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
