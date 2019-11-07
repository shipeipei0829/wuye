<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="14">
        <div class="contanier_l">
          <!-- 项目分布图 -->
          <div class="contanier_l_map boxShadow bdRadius">
            <h2>项目分布图</h2>
            <Maps />
          </div>
          <!-- 增长趋势对比 -->
          <div class="contanier_l_add boxShadow bdRadius">
            <p class="fl" style="display:inline-block;font-size:18px;">增长趋势对比</p>
            <span style="font-size:12px;padding-left:10px;">截止日期</span>
            <el-dropdown>
              <el-button type="primary" size="mini">
                {{date}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in month"
                  :key="item.idx"
                  @click.native="handleClick('date',item.value)"
                >{{item.value}}</el-dropdown-item>
                <!-- <el-dropdown-item>2018-8</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <el-row>
              <el-col :span="16">
                <GrowthTrend />
              </el-col>
              <el-col :span="8">
                <GrowthTrendB />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="contanier_r">
          <!-- 用户量 -->
          <div class="contanier_r_item boxShadow bdRadius clearfix">
            <p class="fl" style="display:inline-block;">用户量</p>
            <span style="font-size:12px;">截止到昨日用户量达到：</span>
            <el-row>
              <el-col :span="6">
                <div class="userNum_item">
                  <p class="userNum_item_num">50家</p>
                  <img src="../../assets/images/register-company.png" alt style="width:50%;" />
                  <p>注册公司</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="userNum_item">
                  <p class="userNum_item_num">80个</p>
                  <img src="../../assets/images/register-project.png" alt style="width:50%;" />
                  <p>注册项目</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="userNum_item">
                  <p class="userNum_item_num">180位</p>
                  <img src="../../assets/images/register-staff.png" alt style="width:50%;" />
                  <p>注册员工</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="userNum_item">
                  <p class="userNum_item_num">300位</p>
                  <img src="../../assets/images/register-user.png" alt style="width:50%;" />
                  <p>注册用户</p>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 业务数据 -->
          <div class="contanier_r_item boxShadow bdRadius" style="padding-bottom:20px;">
            <p class="fl" style="display:inline-block;">业务数据</p>
            <el-dropdown>
              <el-button type="primary" size="mini">
                {{first}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in month"
                  :key="item.idx"
                  @click.native="handleClick('first',item.value)"
                >{{item.value}}</el-dropdown-item>
                <!-- <el-dropdown-item>2018-8</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <el-row>
              <el-col :span="6">
                <div class="manageDate_item">
                  <img src="../../assets/images/visitor-number.png" alt style="width:100%;" />
                  <span>工单数量</span>
                  <i>80个</i>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="manageDate_item">
                  <img src="../../assets/images/inspection-number.png" alt style="width:100%;" />
                  <span>巡检数量</span>
                  <i>1500个</i>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="manageDate_item">
                  <img src="../../assets/images/money-number.png" alt style="width:100%;" />
                  <span>访客数量</span>
                  <i>2000个</i>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="manageDate_item">
                  <img src="../../assets/images/order-number.png" alt style="width:100%;" />
                  <span>线上交易额</span>
                  <i>200万</i>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 用户增长量 -->
          <div class="contanier_r_item boxShadow bdRadius">
            <p class="fl" style="display:inline-block;">用户增长量</p>
            <span style="font-size:12px;padding-left:10px;">截止日期</span>
            <el-dropdown>
              <el-button type="primary" size="mini">
                {{second}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in month"
                  :key="item.idx"
                  @click.native="handleClick('second',item.value)"
                >{{item.value}}</el-dropdown-item>
                <!-- <el-dropdown-item>2018-8</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <userAdd />
          </div>
          <!-- 线上交易增长量 -->
          <div class="contanier_r_item boxShadow bdRadius">
            <p class="fl" style="display:inline-block;">线上交易增长量</p>
            <span style="font-size:12px;padding-left:10px;">截止日期</span>
            <el-dropdown>
              <el-button type="primary" size="mini">
                {{three}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in month"
                  :key="item.idx"
                  @click.native="handleClick('three',item.value)"
                >{{item.value}}</el-dropdown-item>
                <!-- <el-dropdown-item>2018-8</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <onlineAdd />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Maps from "../common/map";
import GrowthTrend from "../common/growthTrend";
import GrowthTrendB from "../common/growthTrendB";
import UserAdd from "../common/userAdd";
import OnlineAdd from "../common/onlineAdd";

export default {
  name: "home",
  data() {
    return {
      month: [
        {
          idx: "1",
          value: "2018-8"
        },
        {
          idx: "2",
          value: "2018-9"
        }
      ],
      date: "2018-8",
      first: "2018-9",
      second: "2018-8",
      three: "2018-9"
    };
  },
  methods: {
    handleClick(obj, value) {
      if (obj == "date") {
        this.date = value;
      }
      if (obj == "first") {
        this.first = value;
      }
      if (obj == "second") {
        this.second = value;
      }
      if (obj == "three") {
        this.three = value;
      }
    }
  },
  components: {
    Maps,
    GrowthTrend,
    GrowthTrendB,
    UserAdd,
    OnlineAdd
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  color: #fff;
  box-sizing: border-box;
  min-height: 100vh;
}
.boxShadow {
  box-shadow: 0px 0px 30px #213558 inset;
}
.bdRadius {
  border-radius: 5px;
  border: 1px solid #213558;
}
.contanier_l,
.contanier_r {
  text-align: left;
  padding-top: 20px;
  height: 100%;
  box-sizing: border-box;
}
.contanier_l {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.contanier_l .contanier_l_map,
.contanier_l .contanier_l_add {
  box-sizing: border-box;
  width: 100%;
  padding-left: 40px;
  padding-top: 44px;
}
.contanier_l_map {
  height: 600px;
}
h2 {
  font-size: 30px;
}
.contanier_l_add {
  margin-top: 20px;
  flex: 1;
}
/* 右边 */
.contanier_r {
  width: 100%;
  height: 100%;
  font-size: 18px;
}
.contanier_r_item {
  padding: 10px 20px 0 20px;
  margin-bottom: 20px;
}
/* 用户量 */
.userNum_item p {
  font-size: 20px;
}
.userNum_item_num {
  padding: 20px 0;
}
/* 业务管理 */
.manageDate_item {
  position: relative;
  margin: 0 10px;
}
.manageDate_item span {
  position: absolute;
  left: 10%;
  top: 10%;
  font-size: 12px;
}
.manageDate_item i {
  position: absolute;
  right: 10%;
  top: 30%;
  font-size: 12px;
}
/* 日期下拉框 */
.home >>> .el-button--primary {
  background-color: #0c164b;
  border-color: #2b396a;
}
.home .el-dropdown {
  margin-left: 10px;
  top: -2px;
}
.home .el-button--mini {
  padding: 4px 10px;
}
</style>

