<template>
  <div class="onlineAdd" id="onlineAdd">12</div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
export default {
  name: "onlineAdd",
  data: () => ({
    msg: ""
  }),
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      //基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("onlineAdd"));

      // 绘制图表
      myChart.setOption({
        legend: {
          top: 0,
          right: "40",
          data: ["商业", "住宅"],
          textStyle: {
            // fontSize: 14, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        tooltip: {},
        color: ["rgba(54,255,125,0.7)", "rgba(255,65,65,0.5)"],
        dataset: {
          dimensions: ["product", "商业", "住宅"],
          source: [
            {
              product: "2018-7",
              商业: 43.3,
              住宅: 85.8
            },
            {
              product: "2018-8",
              商业: 43.3,
              住宅: 85.8
            },

            {
              product: "2018-9",
              商业: 86.4,
              住宅: 65.2
            },
            {
              product: "2018-10",
              商业: 72.4,
              住宅: 53.9
            }
          ]
        },
        xAxis: {
          type: "category",
          name: "月",
          nameTextStyle: {
            color: "#fff"
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
          nameTextStyle: {
            color: "#fff"
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar", barWidth: 10 }, { type: "bar", barWidth: 10 }]
      });
      // 尺寸重置
      var that = this;
      var erd = elementResizeDetectorMaker();
      erd.listenTo(document.getElementById("onlineAdd").parentNode, function(
        element
      ) {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        that.$nextTick(function() {
          console.log("Size: " + width + "x" + height);
          //使echarts尺寸重置
          that.$echarts.init(document.getElementById("onlineAdd")).resize();
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.onlineAdd {
  width: 100%;
  height: 220px;
}
</style>
