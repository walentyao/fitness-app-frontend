<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const openCard = ref<boolean>(false)
const positionCard = ref<number>(0)
const cardAdd = ref<HTMLDivElement>()
const handlerClickCard = () => {
  const distance = cardAdd.value?.getBoundingClientRect()
  if (distance) positionCard.value = distance.top

  console.log(distance.top)
  openCard.value = !openCard.value

  console.log(positionCard.value)
}
</script>

<template>
  <div
    class="add-training"
    @click="handlerClickCard"
    :class="{ 'animation-open-card': openCard }"
    :style="{ '--distance-top': positionCard }"
    ref="cardAdd"
  >
    <PlusIcon class="add-training__icon" />

    <!--    <Transition name="slide-fade">-->
    <!--      <PlusIcon-->
    <!--        class="add-training__icon"-->
    <!--        v-if="!openCard"-->
    <!--      />-->
    <!--      <slot v-else></slot>-->
    <!--    </Transition>-->
  </div>
</template>

<style scoped lang="scss">
.add-training {
  padding: 20px;
  background: var(--color-card-training);
  border-radius: 6px;

  --distance-top: 0px;

  width: 320px;

  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__icon {
    width: 40px;
    height: 40px;
    color: white;
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
  transition-delay: 0.2s;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.animation-open-card {
  // чтоб работала анимация, нужно прописать изначальные размеры в пикселях
  position: absolute;
  top: 0;
  left: 0;
  animation-name: scale-fullscreen;
  animation-duration: 8s;
  animation-timing-function: ease;

  transition: all 8s ease;
}

@keyframes scale-fullscreen {
  to {
    margin-top: 0;
  }
  from {
    margin-top: var(--distance-top);
  }
}
</style>
