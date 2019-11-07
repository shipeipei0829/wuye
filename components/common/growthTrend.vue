<template>
  <div class="growthTrend" id="growthTrend" style></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "DataCount",
  data: () => ({
    msg: ""
  }),
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("growthTrend"));
      // 绘制图表
      myChart.setOption({
        // backgroundColor: "#999",
        title: {
          text: "",
          subtext: "",
          x: "center"
        },
        grid: {
          show: false
        },
        xAxis: {
          name: "年/月",
          type: "",
          nameLocation: "end", //坐标轴名称显示位置。
          nameTextStyle: {
            color: "#fff"
          },
          splitLine: {
            show: true
          },
          // boundaryGap值为false的时候，折线第一个点在y轴上
          boundaryGap: false,
          data: [
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11"
          ],
          axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: "#526792",
              width: 2 // 设置线宽
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          name: "户",
          type: "value",
          nameLocation: "end", //坐标轴名称显示位置。
          splitLine: {
            show: true
          },
          nameTextStyle: {
            color: "#fff"
          },
          // boundaryGap值为false的时候，折线第一个点在y轴上
          boundaryGap: true,
          data: ["100", "200", "500", "800", "1000"],
          axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: "#526792",
              width: 2 // 设置线宽
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "",
            data: [200, 320, 52, 580, 100, 600],
            type: "line",
            // 设置小圆点消失
            // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
            symbol: "none",
            // 设置折线弧度，取值：0-1之间
            smooth: 0.5,
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#000000"
                  },
                  {
                    offset: 1,
                    color: "#fff"
                  }
                ])
              }
            }
          },
          {
            name: "",
            data: [620, 732, 941, 834, 100, 200],
            type: "line",
            symbol: "none",
            // 设置折线弧度，取值：0-1之间
            smooth: 0.5,
            // 设置折线上圆点大小
            // symbolSize: 8,
            itemStyle: {
              normal: {
                // 拐点上显示数值
                label: {
                  show: false
                },
                // borderColor: "red", // 拐点边框颜色
                lineStyle: {
                  width: 2, // 设置线宽
                  type: "solid" //'dotted'虚线 'solid'实线
                }
              }
            },
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#000000"
                  },
                  {
                    offset: 1,
                    color: "#fff"
                  }
                ])
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.growthTrend {
  /* width: 600px; */
  height: 300px;
}
</style>
