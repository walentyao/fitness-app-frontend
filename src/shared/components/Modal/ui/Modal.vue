<script setup lang="ts">
interface IProps {
  openModal: boolean
}

interface IEmits {
  (e: 'toggleModal'): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        class="modal"
        v-if="openModal"
        @click="emit('toggleModal')"
      >
        <div @click.stop>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  left: 0;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background: rgba(150, 150, 150, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
