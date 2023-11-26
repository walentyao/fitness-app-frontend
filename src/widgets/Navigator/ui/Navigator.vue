<script setup lang="ts">
import { navigate } from '@/widgets/Navigator/constants/nav.constant'
import NavigatorLink from '@/widgets/Navigator/ui/NavigatorLink.vue'
</script>

<template>
  <nav class="nav">
    <NavigatorLink
      v-for="link in navigate"
      :link="link"
    />
  </nav>
</template>

<style scoped lang="scss">
.nav {
  padding: 10px;
  width: 100%;

  display: flex;
  flex-direction: row;
  column-gap: 30px;
  justify-content: center;
}
</style>
