import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modalStore', () => {
  const activeModal = ref<boolean>(false)

  const toggleModal = () => {
    activeModal.value = !activeModal.value
  }

  return { activeModal, toggleModal }
})
