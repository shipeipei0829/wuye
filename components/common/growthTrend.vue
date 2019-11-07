<template>
  <div class="growthTrend" id="growthTrend" style></div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
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
      console.log(myChart);
      myChart.setOption({
        // backgroundColor: "#999",
        title: {
          text: "",
          subtext: "",
          x: "center"
        },
        legend: {
          itemHeight: 12,
          itemWidth: 24,
          top: 0,
          left: "0",
          data: [{name:"商业",icon:'roundRect'}, {name:"住宅",icon:'roundRect'}],
          textStyle: {
            // fontSize: 14, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        color: ["rgba(20,91,169,0.7)", "rgba(118,43,73,0.5)"],
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
            formatter: "{value}", //给Y轴数值
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "商业",
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
            name: "住宅",
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
      // 尺寸重置
      var that = this;
      var erd = elementResizeDetectorMaker();
      erd.listenTo(document.getElementById("growthTrend").parentNode, function(
        element
      ) {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        that.$nextTick(function() {
          console.log("Size: " + width + "x" + height);
          //使echarts尺寸重置
          that.$echarts.init(document.getElementById("growthTrend")).resize();
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.growthTrend {
  /* width: 600px; */
  height: 242px;
}
</style>
