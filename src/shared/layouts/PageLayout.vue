<template>
  <div>
    <RouterView v-slot="{ Component }">
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
// TODO поправить анимацию(сейчас один из компонентов не успевает уйти, и появляется второй)
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  position: absolute;
  width: 100%;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(15px);
  opacity: 0;
}
</style>
