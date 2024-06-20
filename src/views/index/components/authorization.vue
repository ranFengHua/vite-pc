<template>
  <div class="page">
    <header>
      <span class="cs">总次数：{{ dealNumber(num[0] + num[1] + num[2]) }}次</span>
      <div class="sq">
        <span class="sq-ym flex-center">页面授权：{{ dealNumber(num[0]) }}次</span>
        <span class="sq-sm flex-center">扫码授权：{{ dealNumber(num[1]) }}次</span>
        <span class="sq-fz flex-center">辅助授权：{{ dealNumber(num[2]) }}次</span>
      </div>
    </header>
    <div ref="chart1" class="chart1" />
  </div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, defineExpose } from 'vue'
import { dealNumber } from '@/assets/utils'
let chart = null
const num = [835930, 4847, 2022734]
const chart1 = ref()
function resize() {
  chart && chart.resize()
}
defineExpose({ resize })
onMounted(() => {
  initChart()
})
function initChart() {
  chart = echarts.init(chart1.value)

  chart.setOption({
    tooltip: {
      trigger: 'axis',
      formatter: '{b}  {c}次'
    },

    xAxis: {
      type: 'category',
      name: '(次)',
      nameLocation: 'start', // 在头部
      axisLabel: {
        // 坐标轴标签
        color: 'white' // 设置文字颜色
      },
      data: ['页面授权', '扫码授权', '辅助授权']
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '7%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      splitLine: {
        //修改背景线条样式
        show: true, //是否展示
        lineStyle: {
          color: '#353b5a' //线条颜色
        }
      },
      axisLabel: {
        // 坐标轴标签
        color: 'white' // 设置文字颜色
      }
    },
    series: [
      {
        type: 'bar',
        barWidth: '20%',
        data: [
          {
            value: num[0],

            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1, // 这四个参数分别表示渐变的起点 (x1, y1) 与终点 (x2, y2)
                [
                  { offset: 1, color: 'rgba(11,34,64,0.4)' }, // 0% 处的颜色
                  { offset: 0, color: 'rgba(26,165,253,0.4)' } // 100% 处的颜色
                ]
              )
            }
          },
          {
            value: num[1],

            itemStyle: {
              normal: {
                borderWidth: 1, //设置边框粗细
                borderColor: '#fd9b1a' //边框颜色
              },
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1, // 这四个参数分别表示渐变的起点 (x1, y1) 与终点 (x2, y2)
                [
                  { offset: 1, color: 'rgba(64, 52, 11, 0.4)' }, // 0% 处的颜色
                  { offset: 0, color: 'rgba(255, 128, 0, 0.4)' } // 100% 处的颜色
                ]
              )
            }
          },
          {
            value: num[2],

            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1, // 这四个参数分别表示渐变的起点 (x1, y1) 与终点 (x2, y2)
                [
                  { offset: 1, color: 'rgba(24,88,51,0.4)' }, // 0% 处的颜色
                  { offset: 0, color: 'rgba(48,226,164,0.4)' } // 100% 处的颜色
                ]
              )
            }
          }
        ]
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.flex-center {
  display: flex;
  align-items: center;
}

.chart1 {
  flex: 1;
  width: 100%;
  height: calc(100% - 60px);
}

.page {
  width: 100%;
  height: 100%;
  font-family: 'PingFang SC';
  font-weight: 400;
  font-size: 16px;
  color: #fff;

  header {
    padding-top: 4px;

    .sq {
      padding-right: 24px;
      padding-top: 4px;
      display: flex;
      justify-content: space-between;

      &-ym::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 23px;
        margin-right: 8px;
        background: linear-gradient(to bottom, rgb(11 34 64 / 40%) 0%, rgb(26 165 253 / 40%) 100%);
        border: 1px solid #1aa1fd;
      }

      &-sm::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 23px;
        margin-right: 8px;
        background: linear-gradient(to bottom, rgb(64 52 11 / 40%) 0%, rgb(255 128 0 / 40%) 100%);
        border: 1px solid #fd9b1a;
      }

      &-fz::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 23px;
        margin-right: 8px;
        background: linear-gradient(to bottom, rgb(24 88 51 / 40%) 0%, rgb(48 226 164 / 40%) 100%);
        border: 1px solid #66d8b0;
      }
    }
  }
}
</style>
