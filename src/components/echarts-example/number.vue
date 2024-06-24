<template>
  <div class="page flex">
    <div class="left">
      <div>
        <span>组件总数</span>
        <span class="title fz-32" v-number="{ value: data.num1, num: 5 }"> {{ data.num1 }} </span>个
      </div>
      <div class="mt-38">
        <span class="point fz-14">已发布：</span>
        <span class="title fz-23">{{ data.num3 }}</span>
      </div>
      <div class="mt-14">
        <span class="point fz-14">待发布：</span>
        <span class="title fz-23">{{ data.num4 }}</span>
      </div>
    </div>
    <div class="right">
      <div>
        <span>组件应用总数</span>
        <span class="title fz-32" v-number="{ value: data.num2, num: 10 }">{{ data.num2 }}</span
        >个
      </div>
      <div class="mt-8">
        <span class="point width140 in-k fz-14">APP接口服务：</span>
        <span class="title fz-23">{{ data.num5 }}</span>
      </div>
      <div class="mt-4">
        <span class="point width140 in-k fz-14">院端系统：</span>
        <span class="title fz-23">{{ data.num6 }}</span>
      </div>
      <div class="mt-4">
        <span class="point width140 in-k fz-14">web服务：</span>
        <span class="title fz-23">{{ data.num7 }}</span>
      </div>
      <div class="mt-4">
        <span class="point width140 in-k fz-14">公众号/小程序：</span>
        <span class="title fz-23">{{ data.num8 }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const data = ref({
  num1: 331,
  num2: 4255,
  num3: 312,
  num4: 19,
  num5: 26,
  num6: '3,439',
  num7: 110,
  num8: 680
})
</script>
<style scoped lang="scss">
.page {
  display: flex;
  padding: 60px 100px 0;
  font-family: 'PingFang SC';
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  font-style: normal;
  text-transform: none;

  .left,
  .right {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    position: relative;

    .title {
      font-family: dingding;
      font-weight: 400;
      color: #44f0ff;
      padding: 0 10px;
    }
  }

  .left {
    padding-left: 50px;
  }

  .right {
    padding-left: 40px;
  }

  .point::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #04c9d7;
    border-radius: 50%;
    margin-right: 8px;
  }

  .left::after {
    content: '';
    position: absolute;
    right: 0;
    top: 32px;
    width: 1px;
    height: 141px;
    background: linear-gradient(
      190deg,
      rgb(125 237 255 / 0%) 0%,
      rgb(125 237 255 / 50%) 49%,
      rgb(125 237 255 / 0%) 100%
    );
  }
}
</style>
