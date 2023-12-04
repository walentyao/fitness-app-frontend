import { defineStore } from 'pinia'
import type { ITraining } from '@/entities/CardTraining/interfaces/section.interface'
import { ref } from 'vue'

export const useStore = defineStore('global', () => {
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
