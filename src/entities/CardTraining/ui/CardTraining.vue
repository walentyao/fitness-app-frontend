<script setup lang="ts">
import type { ITraining } from '@/entities/CardTraining/interfaces/section.interface'

interface IProps {
  training: ITraining
}

const getStyle = (style: string | undefined) => {
  return style ? style : 'grey'
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="training-item">
    <div
      class="section"
      :style="{ background: getStyle(training.style) }"
    >
      {{ training.title }}
    </div>

    <div class="training-item__params">
      <div
        v-for="item in training.params"
        :key="item.title"
        class="section"
        :style="{ background: getStyle(item.style) }"
      >
        <span>{{ item.title }}: {{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.training-item {
  padding: 10px;
  border-radius: 6px;
  background: var(--color-card-training);
  color: white;

  font-size: 14px;

  display: flex;
  flex-direction: column;
  row-gap: 5px;

  &__params {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
  }
}

.section {
  max-width: max-content;
  border-radius: 6px;
  padding: 7px;
}
</style>
