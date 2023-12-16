<script setup lang="ts"></script>

<template>
  <div class="layout-app">
    <div class="layout-app__header">
      <RouterView name="header" />
    </div>
    <div class="layout-app__content">
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
  background: radial-gradient(circle, #111827, #131c2e) no-repeat;
  position: relative;

  &__header {
    position: sticky;
    top: 0;
  }

  &__content {
    position: relative;
    padding: 20px;
  }

  &__footer {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
