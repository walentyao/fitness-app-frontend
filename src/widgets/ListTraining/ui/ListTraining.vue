<script setup lang="ts">
import CardTraining from '@/entities/CardTraining/ui/CardTraining.vue'
import { storeToRefs } from 'pinia'
import { useListTrainingsStore } from '@/widgets/ListTraining/model/list-trainings.store'

const store = useListTrainingsStore()
const { trainings } = storeToRefs(store)
</script>

<template>
  <div class="list-training">
    <TransitionGroup name="list">
      <CardTraining
        v-for="item in trainings"
        :key="item.title"
        :training="item"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.list-training {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
