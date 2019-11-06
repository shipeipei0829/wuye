<template>
  <div class="onlineAdd" id="onlineAdd">12</div>
</template>

<script>
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
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "2015", "2016"],
          source: [
            {
              product: "2018-7",
              "2015": 43.3,
              "2016": 85.8
            },
            { product: "2018-8", "2015": 83.1, "2016": 73.4 },
            {
              product: "2018-9",
              "2015": 86.4,
              "2016": 65.2
            },
            {
              product: "2018-10",
              "2015": 72.4,
              "2016": 53.9
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
          },
         
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar", barWidth: 10 }, { type: "bar", barWidth: 10 }]
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
