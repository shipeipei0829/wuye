<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <div class="nav boxShadow">
          <div class="title_top">
            <img src="../../assets/images/appicon.png" alt class="title_pic" />
            <h2 class="title" style="margin-bottom:44px;">兰众云大数据平台端</h2>
          </div>
          <router-link to="/index/home" active-class="select">首页</router-link>
          <router-link to="/index/fenbu" active-class="select">用户分布</router-link>
        </div>
      </el-aside>
      <el-main>
        <router-view class="right" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      loginManage: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  background: #071530;
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.nav {
  width: 200px;
  min-height: 100%;
  border: 1px solid #213558;
  box-sizing: border-box;
}
.boxShadow {
  box-shadow: 0px 0px 30px #213558 inset;
}
.title,
a {
  color: #3787ff;
}
.title {
  font-size: 18px;
}
.title_pic {
  margin: 40px auto;
}
a {
  display: block;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
.select {
  color: #fff;
  background-color: #1c315c;
}
.right {
  flex: 1;
  background: url("../../assets/images/bg_right.png") 40% 40% no-repeat;
}
.el-main {
  padding: 0 20px;
}

</style>

