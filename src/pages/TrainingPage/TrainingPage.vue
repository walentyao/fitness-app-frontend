<script setup lang="ts">
import { ListTraining } from '@/widgets/ListTraining'
import { TheModal, useModalStore } from '@/widgets/Modal'
import { CreateTraining } from '@/features/CreateTraining'

const storeModal = useModalStore()
const { toggleModal } = storeModal
</script>

<template>
  <main class="page-training">
    <ListTraining @add-training="toggleModal" />
    <TheModal>
      <CreateTraining />
    </TheModal>
  </main>
</template>

<style scoped lang="scss">
.page-training {
  padding: 20px;

  display: flex;
  flex-direction: column;
}
</style>
