<template>
  <div class="growthTrendB" id="growthTrendB"></div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
export default {
  name: "growthTrendB",
  created() {},
  mounted() {
    this.drawLine();
  },
  data() {
    return {};
  },
  props: {},
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("growthTrendB"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["商业", "住宅"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 2345, name: "商业" },
              { value: 1234, name: "住宅" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
      // 尺寸重置
      var that = this;
      var erd = elementResizeDetectorMaker();
      erd.listenTo(document.getElementById("growthTrendB").parentNode, function(
        element
      ) {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        that.$nextTick(function() {
          console.log("Size: " + width + "x" + height);
          //使echarts尺寸重置
          that.$echarts.init(document.getElementById("growthTrendB")).resize();
        });
      });
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.growthTrendB {
  /* width: 300px; */
  height: 200px;
}
</style>
