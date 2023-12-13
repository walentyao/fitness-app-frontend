<script setup lang="ts">
import { ref } from 'vue'
import CardPlus from './CardPlus.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handlerClickAddTraining = () => {
  router.push({ name: 'createTraining' })
}
</script>

<template>
  <div
    class="create-training"
    @click="handlerClickAddTraining"
  >
    <CardPlus />
  </div>
</template>

<style scoped lang="scss">
.create-training {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
