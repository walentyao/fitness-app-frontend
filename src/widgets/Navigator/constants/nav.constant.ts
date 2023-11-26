import type { INavItem } from '@/widgets/Navigator/interfaces/nav.interface'
import { BoltIcon, CalendarIcon } from '@heroicons/vue/24/solid'
export const navigate: INavItem[] = [
  {
    path: '/training',
    title: 'Тренировки',
    icon: BoltIcon,
  },
  {
    path: '/schedule',
    title: 'Расписание',
    icon: CalendarIcon,
  },
]
