<template>
  <div class="content row-flex-start">
    <slot name="title" class="title"></slot>
    <div class="left_map" id="left_map" @click="showChinaMap()"></div>
    <!-- <div class="right_opetate row-center" id="right_opetate"></div> -->
  </div>
</template>

<script>
import echarts from "echarts";
import china from "../../../node_modules/echarts/map/json/china.json";
// import axios from "axios";
echarts.registerMap("china", china);
var provinces = [
  "shanghai",
  "hebei",
  "shanxi",
  "neimenggu",
  "liaoning",
  "jilin",
  "heilongjiang",
  "jiangsu",
  "zhejiang",
  "anhui",
  "fujian",
  "jiangxi",
  "shandong",
  "henan",
  "hubei",
  "hunan",
  "guangdong",
  "guangxi",
  "hainan",
  "sichuan",
  "guizhou",
  "yunnan",
  "xizang",
  "shanxi1",
  "gansu",
  "qinghai",
  "ningxia",
  "xinjiang",
  "beijing",
  "tianjin",
  "chongqing",
  "xianggang",
  "aomen",
  "taiwan"
];
var provincesText = [
  "上海",
  "河北",
  "山西",
  "内蒙古",
  "辽宁",
  "吉林",
  "黑龙江",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "河南",
  "湖北",
  "湖南",
  "广东",
  "广西",
  "海南",
  "四川",
  "贵州",
  "云南",
  "西藏",
  "陕西",
  "甘肃",
  "青海",
  "宁夏",
  "新疆",
  "北京",
  "天津",
  "重庆",
  "香港",
  "澳门",
  "台湾"
];
export default {
  name: "maps",
  created() {
    // this.cityOpt = cityName;
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  data() {
    return {
      map: {},
      // cityOpt: [],
      mapForm: {},
      mapData: [{ name: "海门", value: 100 }],
      mapOpt: []
    };
  },
  props: {},
  methods: {
    //地图相关
    getMapOpt(place) {
      let option = (option = {
        backgroundColor: "",
        title: {
          text: "",
          subtext: "",
          left: "center"
        },
        geo: {
          map: place ? place : "china", //中国地图
          label: {
            emphasis: {
              show: false
            },
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "#fff",
                fontSize: "8"
              }
            }
          },
          roam: false, //缩放滚动
          itemStyle: {
            normal: {
              areaColor: "rgba(255,255,255,0)",
              borderColor: "#4d7dbb", //地图边框
              borderWidth: "2"
            },
            emphasis: {
              areaColor: "#4d7dbb" //鼠标滑过省份颜色
            }
          }
        }
      });
      return option;
    },
    //显示中国地图
    showChinaMap() {
      let option = this.getMapOpt();
      this.map.setOption(option, true);
    },
    //显示各省地图
    // getProvinceMapOpt(provinceAlphabet) {
    //   axios.get("static/province/" + provinceAlphabet + ".json").then(s => {
    //     echarts.registerMap(provinceAlphabet, s.data);
    //     let option = this.getMapOpt(provinceAlphabet);
    //     this.map.setOption(option, true);
    //   });
    // },
    //初始化方法，生成中国地图及定义点击事件
    initMap() {
      var dom = document.getElementById("left_map");
      this.map = echarts.init(dom);

      let option = this.getMapOpt();
      if (option && typeof option === "object") {
        this.map.setOption(option, true);
      }
      this.map.on("click", param => {
        event.stopPropagation(); // 阻止冒泡
        // 找到省份名
        let provinceIndex = provincesText.findIndex(x => {
          return param.name === x;
        });
        if (provinceIndex === -1) return;
        let provinceAlphabet = provinces[provinceIndex];
        // 重新渲染各省份地图
        this.getProvinceMapOpt(provinceAlphabet);
      });
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100%;
}
.left_map {
  width: 100%;
  height: 100%;
}
.left_map div {
  width: 100%;
}
.right_opetate {
  flex: 1;
  height: 100%;
  background: #404a59;
}
.map_form {
}

</style>
