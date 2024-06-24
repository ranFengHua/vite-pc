<template>
  <div ref="chart3" class="chart3" />
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, defineExpose } from 'vue'
let chart = null
const chart3 = ref()
function resize() {
  chart && chart.resize()
}
defineExpose({ resize })
onMounted(() => {
  initChart()
})
function initChart() {
  let data = [
    {
      dateStr: '5月21日',
      numberStr: 1343830
    },
    {
      dateStr: '5月22日',
      numberStr: 1272762
    },
    {
      dateStr: '5月23日',
      numberStr: 1221139
    },
    {
      dateStr: '5月24日',
      numberStr: 1146154
    },
    {
      dateStr: '5月25日',
      numberStr: 996446
    },
    {
      dateStr: '5月26日',
      numberStr: 1003761
    },
    {
      dateStr: '5月27日',
      numberStr: 1412627
    },
    {
      dateStr: '5月28日',
      numberStr: 1245165
    },
    {
      dateStr: '5月29日',
      numberStr: 721100
    }
  ]
  let lineData = {}
  lineData.label = data.map(item => item.dateStr)
  lineData.data = data.map(item => item.numberStr)
  // lineData.data1 = data.map(item => item.numberStr1)
  chart = echarts.init(chart3.value)

  chart.setOption({
    color: ['#44F0FF', '#FD377D'],
    tooltip: {
      show: true,
      axisPointer: {
        // 全局配置 十字准星指示器
        type: 'cross'
      },
      formatter: '{b}  {c}次'
    },
    legend: {
      bottom: '5px', // legend位置距离顶部10px
      icon: 'rect', // 将legend图标改为小圆点 // legend图标宽度
      itemWidth: 16, // 设置图例图标的宽度
      itemHeight: 4, // 设置图例图标的高度
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '20%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      offset: 6,
      name: '(次)',
      nameLocation: 'start', // 在头部
      axisLine: { lineStyle: { color: ' #CCCCCC' } },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        rotate: 18,
        color: 'white',
        fontStyle: 'normal',
        fontSize: 12,
        margin: 10
      },
      data: lineData.label
    },
    yAxis: {
      type: 'value',

      axisLine: {
        show: false,
        lineStyle: { color: '#CCCCCC' }
      },
      axisTick: { show: false },
      splitLine: {
        show: false,
        lineStyle: { type: 'dashed', color: '#CCCCCC' }
      },
      axisLabel: {
        interval: 5,
        color: 'white',
        fontSize: 12
      }
    },
    series: [
      {
        name: '接口调用次数',
        type: 'line',
        // symbol: "circle",
        symbolSize: 8,
        minInterval: 6,
        data: lineData.data,
        smooth: false,
        areaStyle: {
          normal: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(68,240,255,0.5)' // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: 'rgba(68,240,255,0.2)' // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(68,240,255,0.1)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            }
          }
        }
      }
      // {
      //   name: '组件超时率',
      //   type: 'line',
      //   // symbol: "circle",
      //   symbolSize: 8,
      //   minInterval: 6,
      //   data: lineData.data1,
      //   smooth: false
      //   // areaStyle: {
      //   //   normal: {
      //   //     color: {
      //   //       x: 0,
      //   //       y: 0,
      //   //       x2: 0,
      //   //       y2: 1,
      //   //       colorStops: [
      //   //         {
      //   //           offset: 0,
      //   //           color: 'rgba(253,55,125,1)' // 0% 处的颜色
      //   //         },
      //   //         {
      //   //           offset: 0.5,
      //   //           color: 'rgba(253,55,125,0.5)' // 100% 处的颜色
      //   //         },
      //   //         {
      //   //           offset: 1,
      //   //           color: 'rgba(253,55,125,0.1)' // 100% 处的颜色
      //   //         }
      //   //       ],
      //   //       globalCoord: false // 缺省为 false
      //   //     }
      //   //   }
      //   // }
      // }
    ]
  })
}
</script>
<style lang="scss" scoped>
.chart3 {
  width: 100%;
  flex: 1;
  height: 100%;
}
</style>
