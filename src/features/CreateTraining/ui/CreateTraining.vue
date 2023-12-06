<script setup lang="ts">
import CardAddTraining from '@/features/CreateTraining/ui/CardAddTraining.vue'
import { ref } from 'vue'

const isOpenTraining = ref(false)
</script>

<template>
  <CardAddTraining v-if="!isOpenTraining" />
</template>

<style scoped lang="scss"></style>
