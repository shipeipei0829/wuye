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
        color: ["#762c47", "#135ba7"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          bottom: 0,
          left: "center",
          data: ["商业", "住宅"],
          textStyle: {
            // fontSize: 14, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "40%"],
            label: {
              normal: {
                show: true,
                position: "inner", //标签的位置
                textStyle: {
                  fontWeight: 300,
                  fontSize: 16 //文字的字体大小
                },
                formatter: function(d) {
                  return d.percent.toFixed(0) + "%";
                }
              }
            },
            data: [
              { value: 1234, name: "商业" },
              { value: 2345, name: "住宅" }
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
