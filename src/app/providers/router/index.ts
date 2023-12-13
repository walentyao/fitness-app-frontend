import { createRouter, createWebHistory, RouterView } from 'vue-router'
import AppLayout from '@/shared/layouts/AppLayout.vue'
import { TheHeader } from '@/widgets/Header'
import { TheNavigator } from '@/widgets/Navigator'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      components: {
        default: RouterView,
        header: TheHeader,
        footer: TheNavigator,
      },
      redirect: '/training',
      children: [
        {
          path: '/training',
          name: 'training',
          component: () => import('@/pages/TrainingPage/TrainingPage.vue'),
        },
        {
          path: '/create-training',
          name: 'createTraining',
          component: () => import('@/pages/CreateTrainingPage/CreateTrainingPage.vue'),
        },
      ],
    },
  ],
})

export default router
