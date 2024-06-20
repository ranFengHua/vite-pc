<template>
  <div class="page">
    <div ref="chart2" class="chart2" />
  </div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, defineExpose } from 'vue'
let chart = null
const chart2 = ref()
function resize() {
  chart && chart.resize()
}
defineExpose({ resize })
onMounted(() => {
  initChart()
})
function initChart() {
  chart = echarts.init(chart2.value)
  const data = [
    // 图例数据，与右图对应
    {
      name: '患者近期相似检查项目查询接口',
      num: 6910505
    },
    {
      name: '电子健康卡接口',
      num: 303090054
    },
    {
      name: '获取C端授权页面',
      num: 5252
    },

    {
      name: '获取授权portal页面',
      num: 4718745
    },
    {
      name: '其他',
      num: 126830511
    },
    {
      name: '开单回执接口',
      num: 7077552
    }
  ]
  const allNumber = data.reduce((pre, next) => pre + next.num, 0)
  data.forEach(i => {
    i.value = ((i.num / allNumber) * 100).toFixed(3)
  })
  chart.setOption({
    color: ['#0860ED', '#00BFBF', '#E48149', '#CA7AF2', '#725EF2', '#FFE017'], // 配置各版块颜色
    // legend: {
    //   bottom: '10', // legend位置距离顶部10px
    //   icon: 'circle', // 将legend图标改为小圆点 // legend图标宽度
    //   itemWidth: 5, // 设置图例图标的宽度
    //   itemHeight: 5, // 设置图例图标的高度
    //   textStyle: { color: '#fff', fontSize: 12 }
    // },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}%' // 鼠标hover时展示啥数据
    },
    series: [
      {
        minAngle: 5,
        type: 'pie', // 图例类型：饼图
        center: ['50%', '55%'], // 图例在容器中的位置，第一个控制左右，第二个控制上下
        radius: ['30%', '50%'], // 20%：内部空白圆的直径，60%：外部圆环的直径
        label: {
          show: true, // 设置 指示线 全部显示
          formatter: '{b|{b}}  \n {c|{c}%} ',
          padding: [0, -88], //文字和图的边距
          fontSize: 12, // 字体大小
          fontFamliy: '宋体',
          fontWeight: 400,
          color: 'white',
          rich: {
            a: {
              color: '#333',
              fontSize: 12,
              lineHeight: 30
            },
            b: {
              //下 文字样式
              fontSize: 12,
              lineHeight: 30,
              color: 'white'
            },
            c: {
              //上 文字样式
              fontSize: 12,
              lineHeight: 30,
              color: 'white',
              align: 'center'
            }
          }
        },
        labelLine: {
          length: 20,
          length2: 108
        },
        data
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}

.chart2 {
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
