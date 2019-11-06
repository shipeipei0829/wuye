<template>
  <div class="home">
    <div class="contanier_l">
      <!-- 项目分布图 -->
      <div class="contanier_l_map boxShadow bdRadius">
        <h2>项目分布图</h2>
        <Map />
      </div>
      <!-- 增长趋势对比 -->
      <div class="contanier_l_add boxShadow bdRadius">
        <h3>增长趋势对比</h3>
      </div>
    </div>
    <div class="contanier_r">
      <!-- 用户量 -->
      <div class="contanier_r_item boxShadow bdRadius clearfix">
        <p class="fl" style="display:inline-block;">用户量</p>
        <span style="font-size:12px;">截止到昨日用户量达到：</span>
        <div class="userNum clearfix">
          <div class="userNum_item">
            <p class="userNum_item_num">50家</p>
            <img src="../../assets/images/register-company.png" alt />
            <p>注册公司</p>
          </div>
          <div class="userNum_item">
            <p class="userNum_item_num">80个</p>
            <img src="../../assets/images/register-project.png" alt />
            <p>注册项目</p>
          </div>
          <div class="userNum_item">
            <p class="userNum_item_num">180位</p>
            <img src="../../assets/images/register-staff.png" alt />
            <p>注册员工</p>
          </div>
          <div class="userNum_item">
            <p class="userNum_item_num">300位</p>
            <img src="../../assets/images/register-user.png" alt />
            <p>注册用户</p>
          </div>
        </div>
      </div>
      <!-- 业务数据 -->
      <div class="contanier_r_item boxShadow bdRadius">
        <p class="fl" style="display:inline-block;">业务数据</p>
        <el-dropdown>
          <el-button type="primary" size="mini">
            更多菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" @click="handleClick()">
            <el-dropdown-item>2019-9</el-dropdown-item>
            <el-dropdown-item>2018-8</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="manageDate clearfix">
          <div class="manageDate_item">
            <img src="../../assets/images/visitor-number.png" alt />
            <span>工单数量</span>
            <i>80个</i>
          </div>
          <div class="manageDate_item">
            <img src="../../assets/images/inspection-number.png" alt />
            <span>巡检数量</span>
            <i>1500个</i>
          </div>
          <div class="manageDate_item">
            <img src="../../assets/images/money-number.png" alt />
            <span>访客数量</span>
            <i>2000个</i>
          </div>
          <div class="manageDate_item">
            <img src="../../assets/images/order-number.png" alt />
            <span>线上交易额</span>
            <i>200万</i>
          </div>
        </div>
      </div>
      <!-- 用户增长量 -->
      <div class="contanier_r_item boxShadow bdRadius">
        <h3>用户增长量</h3>
      </div>
      <!-- 线上交易增长量 -->
      <div class="contanier_r_item boxShadow bdRadius">
        <h3>线上交易增长量</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "../common/map";
export default {
  name: "home",
  data() {
    return {
      loginManage: ""
    };
  },
  methods: {
    handleClick() {
      alert("button click");
    }
  },
  components: {
    Map
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  color: #fff;
  box-sizing: border-box;
  padding: 30px 10px 30px 0;
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
  margin-left: 20px;
  float: left;
  text-align: left;
}
.contanier_l {
  width: 50%;
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
  height: 400px;
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
  width: 46%;
  height: 100%;
  font-size: 18px;
}
.contanier_r_item {
  padding: 10px 20px 20px 20px;
  margin-bottom: 20px;
}
/* 用户量 */
.userNum,
.manageDate {
  display: flex;
}
.userNum_item,
.manageDate_item {
  flex: 1;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.userNum_item p {
  font-size: 20px;
}
.userNum_item_num {
  padding: 20px 0;
}
/* 业务管理 */
.manageDate_item {
  position: relative;
}
.manageDate_item span {
  position: absolute;
  left: 20%;
  top: 10px;
  font-size: 12px;
}
.manageDate_item i {
  position: absolute;
  left: 60%;
  top: 30px;
  font-size: 12px;
}
</style>

