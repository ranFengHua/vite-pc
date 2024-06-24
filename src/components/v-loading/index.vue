<template>
  <ul class="list">
    <li v-for="item in 8" :key="item"></li>
    <p class="message">{{ props.message }}</p>
  </ul>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { type Props } from './default'
const props = withDefaults(defineProps<Props>(), {
  message: '222'
})
// console.log(props)
</script>

<style lang="scss" scoped>
.message {
  position: absolute;
  bottom: 36px;
  text-align: center;
  text-wrap: nowrap;
  width: 100%;
}

.list {
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50px, -50px);
  list-style: none;
  position: relative;

  > li {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: grey;
    animation: load 1.04s ease infinite;
  }

  @keyframes load {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0.2;
    }
  }

  li:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -8px;
    animation-delay: 0.13s;
  }

  li:nth-child(2) {
    left: 14px;
    top: 14px;
    animation-delay: 0.26s;
  }

  li:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -8px;
    animation-delay: 0.39s;
  }

  li:nth-child(4) {
    top: 14px;
    right: 14px;
    animation-delay: 0.52s;
  }

  li:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -8px;
    animation-delay: 0.65s;
  }

  li:nth-child(6) {
    right: 14px;
    bottom: 14px;
    animation-delay: 0.78s;
  }

  li:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -8px;
    animation-delay: 0.91s;
  }

  li:nth-child(8) {
    bottom: 14px;
    left: 14px;
    animation-delay: 1.04s;
  }
}
</style>
