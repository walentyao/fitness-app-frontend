<script setup lang="ts">
import type { ISection } from '@/widgets/ListTraining/interfaces/section.interface'

interface IProps {
  training: ISection[]
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="training-item">
    <div class="section training-item__type">Тренировка на бицепс</div>
    <div class="section training-item__counter">Повторений</div>
    <div class="section training-item__day">День</div>

    <div
      v-for="item in training"
      :key="item.title"
      :class="{}"
    >
      <span>{{ item.title }}: {{ item.value }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.training-item {
  padding: 10px;
  border-radius: 6px;
  background: rgba(150, 150, 150, 0.2);
  color: var(--app-color-text);

  font-size: 14px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.section {
  max-width: max-content;
  border-radius: 6px;
  padding: 5px;

  &__type {
    background: white;
  }

  &__counter {
    background: yellow;
  }

  &__day {
    background: orange;
    color: white;
  }
}
</style>
