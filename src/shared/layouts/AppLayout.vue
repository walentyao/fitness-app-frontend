<script setup lang="ts"></script>

<template>
  <div class="layout-app">
    <div class="layout-app__header">
      <RouterView name="header" />
    </div>
    <div>
      <Transition name="slide-fade">
        <RouterView />
      </Transition>
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

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
