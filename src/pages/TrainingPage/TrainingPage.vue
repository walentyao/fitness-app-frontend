<script setup lang="ts">
import ListTraining from '@/widgets/ListTraining/ui/ListTraining.vue'
import AddTraining from '@/features/AddTraining/ui/AddTraining.vue'
</script>

<template>
  <main class="page-training">
    <ListTraining />
    <AddTraining />
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
