<template>
  <div class="page">
    <div class="item">
      <img src="../images/diaoyongzongshu.png" class="item-img" />
      <div class="content">
        <span class="content-title"> 接口调用总次数 </span>
        <span class="content-number">
          {{ data.num1 }}
        </span>
      </div>
    </div>
    <div class="item">
      <img src="../images/sdkxiazai.png" class="item-img" />
      <div class="content">
        <span class="content-title"> Web调用总次数 </span>
        <span class="content-number">
          {{ data.num2 }}
        </span>
      </div>
    </div>
    <div class="item">
      <img src="../images/diaoyongcishu.png" class="item-img" />
      <div class="content">
        <span class="content-title"> SDK下载总次数 </span>
        <span class="content-number">
          {{ data.num3 }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const data = ref({
  num1: '448,436,169',
  num2: '752,296',
  num3: '1,311'
})
</script>
<style scoped lang="scss">
.page {
  display: flex;
  flex-wrap: wrap;
  padding: 38px 20px 20px;

  .item {
    margin-top: 23px;
    flex-basis: 50%;
    display: flex;
    height: 66px;

    .item-img {
      width: 84px;
      height: 66px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 12px;

      .content-title {
        font-size: 16px;
        font-family: 'PingFang SC';
      }

      .content-number {
        font-family: dingding;
        font-weight: 400;
        font-size: 24px;
        color: #44f0ff;
      }
    }
  }
}
</style>
