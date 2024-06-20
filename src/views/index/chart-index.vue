<template>
  <div class="chart">
    <main>
      <header>
        <img src="./images/top2.png" alt="" />
        <span>组件中枢驾驶舱</span>
      </header>
      <div class="main">
        <div class="left">
          <div class="common">
            <div class="common-title">组件调用总次数</div>
            <total-number class="common-bg common-bg-reverse number"></total-number>
          </div>
          <div class="common">
            <div class="common-title">重要接口调用占比</div>
            <critical-components
              class="common-bg common-bg-reverse height-3"
              ref="criticalComponentsRef"
            ></critical-components>
          </div>
          <div class="common">
            <div class="common-title">组件调用趋势</div>
            <health class="common-bg common-bg-reverse health" ref="healthRef"></health>
          </div>
        </div>
        <div class="center">
          <div class="common">
            <number class="number-bg"></number>
          </div>
          <div class="common mt-38 flex1 pl-12">
            <top class="common-bg-top"></top>
          </div>
        </div>
        <div class="right">
          <div class="common">
            <div class="common-title">机构接入统计</div>
            <organization-access
              class="organization-access background-reverse common-bg"
            ></organization-access>
          </div>
          <div class="common flex-dir">
            <div class="common-title">组件应用授权</div>
            <authorization
              class="common-bg background-reverse authorization"
              ref="authorizationRef"
            ></authorization>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import totalNumber from './components/total-number.vue'
import criticalComponents from './components/critical-components.vue'
import health from './components/health.vue'
import organizationAccess from './components/organization-access.vue'
import authorization from './components/authorization.vue'
import number from './components/number.vue'
import top from './components/top.vue'
const authorizationRef = ref()
const criticalComponentsRef = ref()
const healthRef = ref()
let currentWidth = window.innerWidth
let timer = null
window.addEventListener('resize', e => {
  if (Math.abs(currentWidth - e.currentTarget.innerWidth) > 20) {
    clearTimeout(timer)
    window.location.reload()
    currentWidth = window.innerWidth
    return
  } else {
    currentWidth = window.innerWidth
    timer = setTimeout(() => {
      authorizationRef.value.resize()
      healthRef.value.resize()
      criticalComponentsRef.value.resize()
    })
  }
})
</script>
<style lang="scss" scoped>
.mt-24 {
  margin-top: 24px;
}

.number-bg {
  background: url('./images/kejizhuangshi.png');
  background-size: 100% 100%;
  width: 723px;
  height: 382px;
}

.background-transparent {
  background: rgb(68 149 255 / 8%) !important;
}

.organization-access {
  overflow: scroll;
  position: relative;
  z-index: 1;
  margin-top: -22px;
  padding-top: 22px;
  background: linear-gradient(270deg, rgb(68 149 255 / 26%) 0%, rgb(34 74 143 / 0%) 100%);
  border-radius: 0;
  height: 370px;
}

.background-reverse {
  background: linear-gradient(
    270deg,
    rgb(68 149 255 / 26%) 0%,
    rgb(34 74 143 / 0%) 100%
  ) !important;
}

.flex1 {
  flex: 1;
}

.height100 {
  height: 100%;
}

.chart {
  position: relative;
  width: 100%;
  max-height: 100%;
  height: 100%;
  background: url('./images/bg.png');
  padding: 0 32px;
  font-family: MyCustomFont;
  font-weight: 400;
  color: #fff;

  .common {
    margin-top: 24px;
    overflow: hidden;

    .common-title {
      position: relative;
      z-index: 2;
      padding: 0 0 0 58px;
      width: 100%;
      height: 44px;
      background: url('./images/top.png') no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      font-size: 24px;
      font-family: MyCustomFont;
      font-weight: 500;
      color: #fff;
      line-height: 0px;
      text-shadow:
        0 1px 1px #60ae8f,
        0 3px 6px rgb(0 170 255 / 50%);
    }

    .height-3 {
      height: calc(100vh - 141px - 237px - 210px - 24px - 60px);
    }

    .number {
      height: 237px;
    }

    .health {
      height: 210px;
    }

    .authorization {
      height: calc(100vh - 141px - 380px - 24px);
    }

    .common-bg {
      overflow: scroll;
      position: relative;
      z-index: 1;
      margin-top: -22px;
      padding-top: 22px;
      background: linear-gradient(270deg, rgb(68 149 255 / 26%) 0%, rgb(34 74 143 / 0%) 100%);
      border-radius: 0;
    }

    .common-bg-reverse {
      background: linear-gradient(90deg, rgb(68 149 255 / 26%) 0%, rgb(34 74 143 / 0%) 100%);
    }

    .common-bg-top {
      background: url('./images/bg1.png');
      height: 100%;
      flex: 1;
      background-size: 100% 100%;
    }

    .common-bg::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      background: url('./images/b.png') no-repeat;
      background-size: cover;
      height: 8px;
      width: 100%;
    }

    .common-bg::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  main {
    position: relative;
    z-index: 2;
    width: 100%;
    min-height: 100%;

    header {
      width: 100%;
      height: 141px;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      position: relative;

      > img {
        display: inline-block;
        width: 100%;
        height: 141px;
        position: absolute;
      }

      > span {
        display: inline-block;
        position: absolute;
        z-index: 2;
        top: 40px;
        font-family: MyCustomFont;
        font-weight: 400;
        font-size: 40px;
        color: #fff;
        line-height: 0px;
        text-shadow:
          0 1px 1px #c3e7fc,
          0 3px 6px rgb(0 170 255 / 50%);
      }
    }

    .main {
      display: flex;

      .left {
        margin-top: -70px;
        padding-bottom: 12px;
        display: flex;
        flex-direction: column;
        width: 30%;
      }

      .center {
        margin-top: -56px;
        width: 40%;
        padding: 0 24px;
        height: calc(100vh - 110px);
        display: flex;
        flex-direction: column;
      }

      .right {
        width: 30%;
        margin-top: -70px;
        display: flex;
        flex-direction: column;
        padding-bottom: 12px;
      }
    }
  }
}
</style>
