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
                <img src="../../assets/images/phone.png" alt />
              </span>
              <el-input v-model="ruleForm.phone" placeholder="请输入您的手机号" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span class="borderR">
                <img src="../../assets/images/pwd.png" alt />
              </span>
              <el-input v-model="ruleForm.password" placeholder="请输入您的密码" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="公司项目用户登录" name="companyLogin">
          <!-- 登录框 -->
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="phone">
              <span class="borderR">
                <img src="../../assets/images/phone.png" alt />
              </span>
              <el-input v-model="ruleForm.phone" placeholder="请输入您的手机号" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span class="borderR">
                <img src="../../assets/images/pwd.png" alt />
              </span>
              <el-input v-model="ruleForm.password" placeholder="请输入您的密码" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <!-- 按钮 -->
      <el-button type="primary" round @click="submitForm('ruleForm')">登录</el-button>
    </div>

    <!-- 底部 -->
    <p class="footer">山西蓝众网络科技有限公司提供技术支持</p>
  </div>
</template>

<script>
import axios from "axios";
import API from "../../common/js/api";
export default {
  name: "login",
  data() {
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
    };
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        const reg = /^(\w){6,20}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("只能输入6-20个字母、数字、下划线"));
        }
      }
    };
    return {
      loginManage: "userLogin",
      ruleForm: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    //登录tab切换
    handleClick(tab, event) {
      // console.log(tab, event);
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
  },
  mounted() {
    // 获取注册公司信息
    axios({
      url: API.queryCompany,
      method: "post",
      data: {
        phone: "18235143167"
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  height: 100%;
  padding: 50px 0;
  box-sizing: border-box;
  overflow-y: hidden;
  background: url("../../assets/images/loginBg.jpg") no-repeat;
}
.logo {
  vertical-align: bottom;
}
.login >>> .el-tabs .el-tabs--top {
  width: 400px !important;
  height: 400px !important;
  margin: 0 auto;
}
.login >>> .el-form-item {
  height: 40px;
  margin-top: 40px;
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
  margin-top: 80px;
  font-size: 20px;
}
.footer {
  font-size: 12px;
  color: #fff;
  padding-top: 200px;
  /* position: fixed;
  bottom: 26px; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
}
.borderR {
  border-right: 1px solid #fff;
  height: 50%;
  margin-top: 10px;
  padding: 0 20px;
}
span {
  width: 20px;
  height: 20px;
  display: block;
  position: relative;
}
span img {
  position: absolute;
  width: 20px;
  height: 20px;
}
.login >>> .el-tabs__item.is-active {
  color: #fff;
}
.login >>> .el-tabs__item.is-active {
  font-size: 22px !important;
  margin-top: 20px !important;
}
.login >>> .el-tabs__item {
  font-size: 22px !important;
  margin-top: 20px !important;
}
</style>
