<script setup lang="ts"></script>

<template>
  <div class="layout-app">
    <div class="layout-app__header">
      <RouterView name="header" />
    </div>
    <div>
      <RouterView />
    </div>
    <div class="layout-app__footer">
      <RouterView name="footer" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-app {
  min-height: 100%;
  background: radial-gradient(circle, rgb(81, 77, 89), #262626) no-repeat;
  position: relative;

  &__header {
    position: sticky;
    top: 0;
  }

  &__footer {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
