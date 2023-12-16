<script setup lang="ts">
import type { ISection, ITraining } from '@/shared/interfaces/section.interface'
import InputText from 'primevue/inputtext'
import { reactive, ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import TrainingParam from './TrainingParam.vue'

interface IProps {
  training: ITraining
}
const props = defineProps<IProps>()

const inputTraining = reactive<ITraining>(props.training)

// TODO создать под каждый параметр отдельный компонет

const handlerClickAddParam = () => {
  console.log('handlerClickAddParam')
  params.value.push({
    title: '',
    value: '',
    style: '',
  })
}

const params = ref<ISection[]>([
  {
    title: 'Подготовка',
    value: '0',
    style: 'grey',
  },
])
</script>

<template>
  <form
    class="create-card"
    @submit.prevent.stop
    @click.stop
  >
    <div class="create-card__title">
      <label for="title">Тренировка</label>
      <InputText
        v-model="inputTraining.title"
        id="title"
      />
    </div>
    <div class="create-card__params">
      <label for="params">Параметры</label>
      <div
        class="list-params"
        v-show="params.length > 0"
        id="params"
      >
        <TransitionGroup name="list">
          <TrainingParam
            v-for="param in params"
            :key="param.title"
            :param="param"
          />
        </TransitionGroup>
      </div>
      <div
        class="add-params"
        @click="handlerClickAddParam"
      >
        <PlusIcon class="add-params__icon" /> <span>Добавить параметр</span>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.create-card {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  font-size: 14px;

  width: 100%;

  padding: 10px;
  border-radius: 6px;
  background: var(--color-card-training);

  &__title {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  &__params {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}

.add-params {
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  align-items: center;

  max-width: max-content;

  &:hover {
    cursor: pointer;
    text-shadow:
      0 0 7px #bf87ff,
      0 0 10px #bf87ff;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}
.list-params {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
