<template>
  <div class="login">
    <!-- logo -->
    <img src="../../assets/images/loginLg.png" alt class="logo" />
    <!-- 登录管理 -->
    <div class="content">
      <el-tabs v-model="loginManage" @tab-click="handleClick" style="width:400px;margin:0 auto;">
        <el-tab-pane label="平台用户登录" name="userLogin">
          <!-- 登录框 -->
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="phone">
              <span class="borderR">
                <i class="el-icon-edit"></i>
              </span>
              <el-input v-model="ruleForm.phone" placeholder="请输入您的手机号" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span class="borderR">
                <i class="el-icon-edit"></i>
              </span>
              <el-input v-model="ruleForm.password" placeholder="请输入您的密码" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公司项目用户登录" name="companyLogin"></el-tab-pane>
      </el-tabs>
      <!-- 按钮 -->
      <el-button type="primary" round @click="submitForm('ruleForm')">登录</el-button>
    </div>

    <!-- 底部 -->
    <p class="footer">山西蓝众网络科技有限公司提供技术支持</p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    // 手机号
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
      // 密码
    };
    return {
      loginManage: "userLogin",
      ruleForm: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录tab切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //登录
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.$router.replace("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
