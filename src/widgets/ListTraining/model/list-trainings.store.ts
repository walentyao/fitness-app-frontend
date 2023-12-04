import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ITraining } from '@/shared/interfaces/section.interface'

export const useListTrainingsStore = defineStore('listTrainingsStore', () => {
  const trainings = ref<ITraining[]>([
    {
      title: 'Тренировка ног',
      style: 'red',
      params: [
        {
          title: 'Повторений',
          value: '30',
          style: 'black',
        },
        {
          title: 'Дата',
          value: '24 Ноября',
        },
      ],
    },
    {
      title: 'Тренировка бицепса',
      style: '#942db0',
      params: [
        {
          title: 'Повторений',
          value: '30',
        },
      ],
    },
    {
      title: 'Тренировка трицепса',
      style: '#63d5b3',
      params: [
        {
          title: 'Повторений',
          value: '30',
        },
      ],
    },
  ])

  return { trainings }
})
