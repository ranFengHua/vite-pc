<template>
  <div class="page">
    <header>
      <img src="../images/juxin.png" />
      <span>{{ title }}</span>
    </header>
    <main ref="main" id="main">
      <div ref="all">
        <div v-for="(item, index) in data" :key="index" class="list">
          <div class="list-top">
            <span class="list-top-label">{{ item.label }}</span>
            <span class="list-top-icon"></span>
            <span class="list-top-title">{{ item.title }}</span>
          </div>
          <div class="flex height">
            <el-progress
              :percentage="item.rate"
              color="linear-gradient( 90deg, #2678AE 0%, #1DB8D6 50%, #C5FCFE 100%)"
              :text-inside="false"
              class="progress"
            />
            <span class="main-number">{{ item.content }}</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { ElProgress } from 'element-plus'
import { dealNumber } from '@/assets/utils'
const defaultData = [
  {
    label: 'TOP.1',
    title: '电子健康卡',
    value: 301923284
  },
  {
    label: 'TOP.2',
    title: '影像检查资料调阅',
    value: 42551361
  },
  {
    label: 'TOP.3',
    title: '医学检验资料调阅',
    value: 27333270
  },
  {
    label: 'TOP.4',
    title: '流水号认证服务',
    value: 4038947
  },
  {
    label: 'TOP.5',
    title: '数字影像',
    value: 1352961
  },
  {
    label: 'TOP.6',
    title: '婚育一件事',
    value: 15114
  },
  {
    label: 'TOP.7',
    title: '电子证照',
    value: 4127
  },
  {
    label: 'TOP.8',
    title: 'bi大屏',
    value: 952
  },
  {
    label: 'TOP.9',
    title: '检验报告',
    value: 603
  },
  {
    label: 'TOP.10',
    title: '职业病一件事',
    value: 120
  }
]
const title = ref('热门组件Top10')
const main = ref()
const all = ref()
const data = ref([])
let total = 0
let i = 1
let height = 0
function loop() {
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (height + main.value?.offsetHeight >= all.value?.offsetHeight + 44) {
        // data.value.push(...defaultData)
        // nextTick(() => {
        //   loop()
        // })
        height = 0
      } else {
        height = height + i
      }
      main.value.scrollTop = height
      loop()
    }, 40)
  })
}
onMounted(() => {
  data.value = defaultData
  data.value.forEach(item => {
    total += item.value
  })
  data.value = data.value.map(item => {
    item.rate = Number(((item.value / total) * 100).toFixed(2))
    item.content = dealNumber(item.value)
    return item
  })
  nextTick(() => {
    if (main.value.offsetHeight <= all.value.offsetHeight) {
      loop()
    }
  })
  document.querySelector('#main').addEventListener('scroll', e => {
    e.preventDefault()
  })
})
</script>
<style scoped lang="scss">
/* 隐藏滚动条的样式 */
::-webkit-scrollbar {
  display: none; /* 对于WebKit浏览器，隐藏滚动条 */
}

:deep(.el-progress-bar__outer) {
  background: #204b8b;
  border-radius: 3px;
  height: 4px !important;
}

:deep(.el-progress__text) {
  display: none;
}

.page {
  font-family: 'PingFang SC';
  font-weight: 400;
  font-size: 17px;

  header {
    font-size: 19px;
    padding-top: 14px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    > img {
      width: 41px;
      height: 41px;
    }

    > span {
      padding-left: 8px;
      font-family: MyCustomFont;
    }
  }

  main {
    padding: 0 24px 24px 43px;
    overflow: hidden;
    height: calc(100% - 55px);
    position: relative;
    z-index: 1;

    .list {
      margin-top: 14px;

      .list-top {
        display: flex;
        align-items: center;

        &-label {
          font-family: dingding;
          font-size: 23px;
          color: #44f0ff;
        }

        &-title {
          padding-left: 46px;
        }

        &-icon {
          width: 4px;
          height: 8px;
          background: #087ba4;
          margin-left: 8px;
          position: relative;
        }

        &-icon::after {
          content: '';
          position: relative;
          top: -8px;
          display: inline-block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 8px;
          margin-left: 4px;
          border-color: transparent transparent transparent #08f6ff;
        }
      }
    }

    .main-number {
      font-family: dingding;
      font-size: 23px;
    }
  }

  .progress {
    border-radius: 3px;
    flex: 1;
    padding-right: 46px;
  }
}
</style>
