<script setup lang="ts">
import type { INavItem } from '@/widgets/Navigator/interfaces/nav.interface'

interface IProps {
  link: INavItem
}

const props = defineProps<IProps>()
</script>

<template>
  <RouterLink
    :to="link.path"
    class="nav-link"
  >
    <component
      v-if="link.icon"
      :is="link.icon"
      class="nav-link__icon"
    />
    <span>{{ link.title }}</span>
  </RouterLink>
</template>

<style scoped lang="scss">
.nav-link {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  justify-content: center;

  color: var(--app-color-text);

  cursor: pointer;
  text-decoration: none;
  outline: none;

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
