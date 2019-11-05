<template>
  <div class="login">
    <!-- logo -->
    <img src="../../assets/images/loginLg.png" alt class="logo" />
    <!-- 登录管理 -->
    <div class="content">
      <el-tabs v-model="loginManage" @tab-click="handleClick" style="width:400px;margin:0 auto;">
        <el-tab-pane label="平台用户登录" name="userLogin">
          <!-- 登录框 -->
          <el-form ref="form" :model="form">
            <el-form-item>
              <span class="borderR">
                <i class="el-icon-edit"></i>
              </span>
              <el-input v-model="form.phone" placeholder="请输入您的手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <span class="borderR">
                <i class="el-icon-edit"></i>
              </span>
              <el-input v-model="form.password" placeholder="请输入您的密码"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公司项目用户登录" name="companyLogin"></el-tab-pane>
      </el-tabs>
      <!-- 按钮 -->
      <el-button type="primary" round @click="toLogin()">登录</el-button>
    </div>

    <!-- 底部 -->
    <p class="footer">山西蓝众网络科技有限公司提供技术支持</p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginManage: "userLogin",
      form: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //登录
    toLogin() {
      this.$router.replace("/index");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  min-height: 100vh;
  overflow: hidden;
  background-image: url("../../assets/images/loginBg.jpg");
  background-size: 100% 100%;
}
.logo {
  padding-top: 50px;
  vertical-align: bottom;
}
.login >>> .el-tabs .el-tabs--top {
  width: 400px !important;
  margin: 0 auto;
}
.login >>> .el-form-item {
  height: 40px;
  margin-top: 30px;
}
.login >>> .el-form-item__content {
  height: 100%;
  display: flex;
  background-color: transparent;
  border: 2px solid #245ab0;
  border-radius: 30px;
}
.login >>> .el-input__inner {
  height: 100%;
  font-size: 18px;
  background-color: transparent;
  color: #fff;
  border: none;
}
.login >>> .el-icon-mobile-phone:before {
  vertical-align: middle;
}
.el-button {
  width: 250px;
  font-size: 20px;
}
.footer {
  font-size: 12px;
  color: #fff;
  padding-top: 200px;
}
.borderR {
  border-right: 1px solid #fff;
  height: 50%;
  margin-top: 10px;
  padding: 0 20px;
}
.login >>> .el-tabs__item.is-active {
  color: #fff;
}
</style>
