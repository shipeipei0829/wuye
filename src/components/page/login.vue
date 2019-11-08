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
              <el-input
                v-model="ruleForm.phone"
                placeholder="请输入您的手机号"
                auto-complete="off"
                @blur.native.capture="getMsg(ruleForm.phone)"
              ></el-input>
            </el-form-item>
            <el-form-item prop="componey">
              <span class="borderR">
                <img src="../../assets/images/company.png" alt />
              </span>
              <el-select v-model="ruleForm.componey" placeholder="请选择您要登录的公司">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
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
import Qs from "qs";
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
      loginManage: "companyLogin",
      ruleForm: {
        phone: "13133099365",
        password: "123456",
        companyId: "1034988020296560642"
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
          axios({
            url: API.login,
            method: "post",
            data: {
              companyId: ruleForm.companyId,
              passWord: ruleForm.password,
              phone: ruleForm.phone
            }
          }).then(res => {
            console.log(res);
            // this.$router.replace("/index");
          });
          // this.$router.replace("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //  输入手机号失焦请求
    getMsg(phone) {
      // 获取注册公司信息
      axios({
        url: API.queryCompany,
        method: "post",
        data: {
          phone: phone
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ] //加上这个
      })
        .then(res => {
          console.log(res);
        })
        .catch();
    }
  },
  mounted() {}
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
