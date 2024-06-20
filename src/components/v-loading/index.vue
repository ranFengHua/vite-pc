<template>
  <div :class="`notice`">
    <p class="text" @click="props.hidden">{{ props }}</p>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { type Props } from './default'
const props = withDefaults(defineProps<Props>(), {
  duration: 1000,
  toast_type: 'success',
  message: '222'
})
</script>

<style lang="scss" scoped>
.notice {
  position: fixed;
  top: 0;
  right: 0;
  background-color: red;
}
</style>
