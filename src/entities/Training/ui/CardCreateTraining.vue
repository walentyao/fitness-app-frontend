<script setup lang="ts">
import type { ITraining } from '@/shared/interfaces/section.interface'
import InputText from 'primevue/inputtext'
import { reactive } from 'vue'

interface IProps {
  training: ITraining
}
const props = defineProps<IProps>()

const inputTraining = reactive<ITraining>(props.training)
</script>

<template>
  <div
    class="create-card"
    @click.stop
  >
    <InputText
      type="text"
      v-model="inputTraining.title"
    />
    <InputText />
    <InputText />
    <InputText />
  </div>
</template>

<style scoped lang="scss">
.create-card {
  padding: 10px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  background: white;
}
</style>
