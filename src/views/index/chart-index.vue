<template>
  <div class="chart">1</div>
</template>
<script setup>
import { globalProperties } from '@/assets/utils'
const global = globalProperties()
global.$myMethod.show({ duration: 5000, message: '1title' })
</script>
<style lang="scss" scoped></style>
