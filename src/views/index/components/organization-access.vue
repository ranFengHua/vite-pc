<template>
  <div class="page">
    <header>
      <div class="header-top header">
        <img src="../images/jierufanshi.png" />
        <div class="header-content">
          <span>用户接入数量</span>
          <span class="header-content-num">{{ data.num1 }}</span>
        </div>
      </div>
      <div class="header-bottom header">
        <img src="../images/zongcishu.png" />
        <div class="header-content">
          <span>机构接入总数</span>
          <span class="header-content-num">{{ data.num2 }}</span>
        </div>
      </div>
    </header>
    <main>
      <div class="main-left">
        <div class="main-content">
          <span class="main-content-label">服务提供方：</span>
          <span class="main-content-num">{{ data.num3 }}</span>
        </div>
        <div class="main-content">
          <span class="main-content-label">服务使用方：</span>
          <span class="main-content-num">{{ data.num4 }}</span>
        </div>
      </div>
      <div class="main-right">
        <div class="main-content">
          <span class="main-content-label">自主注册：</span>
          <span class="main-content-num">{{ data.num5 }}</span>
        </div>
        <div class="main-content">
          <span class="main-content-label">认证登录：</span>
          <span class="main-content-num">{{ data.num6 }}</span>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const data = ref({
  num1: '2,440',
  num2: '1,346',
  num3: 374,
  num4: '1,340',
  num5: 213,
  num6: '1,127'
})
</script>
<style scoped lang="scss">
.page {
  font-size: 16px;
  color: #fff;
  font-family: 'PingFang SC';

  header {
    padding: 16px 44px 0 32px;
    position: relative;
  }

  .header-top {
    padding-bottom: 20px;
  }

  .header-top::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 4px;
    width: 475px;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgb(125 237 255 / 0%) 0%,
      #7dedff 49%,
      rgb(125 237 255 / 0%) 100%
    );
  }

  .header {
    display: flex;
    align-items: center;
    padding-top: 16px;

    > img {
      width: 94px;
      height: 82px;
    }

    .header-content {
      padding-left: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-num {
        font-family: dingding;
        font-weight: 400;
        font-size: 24px;
        color: #44f0ff;
      }
    }
  }

  main {
    padding: 0 40px 15px;
    display: flex;

    .main-left,
    .main-right {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .main-right {
      padding-left: 40px;
    }

    .main-content-label {
      display: inline-block;
      width: 120px;
    }

    .main-left::after {
      content: '';
      position: absolute;
      right: 0;
      top: 22px;
      width: 1px;
      height: 76px;
      background: linear-gradient(
        0deg,
        rgb(125 237 255 / 0%) 0%,
        #7dedff 49%,
        rgb(125 237 255 / 0%) 100%
      );
    }

    .main-content {
      margin-top: 10px;

      .main-content-num {
        font-family: dingding;
        font-weight: 400;
        font-size: 24px;
      }
    }

    .main-content-label::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #0063ff;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}
</style>
