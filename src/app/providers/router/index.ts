import { RouterView, createRouter, createWebHistory } from 'vue-router'
import { TheHeader } from '@/widgets/Header'
import { TheNavigator } from '@/widgets/Navigator'
import PageLayout from '@/shared/layouts/PageLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      components: {
        default: PageLayout,
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
