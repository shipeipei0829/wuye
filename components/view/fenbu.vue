<template>
  <div class="fenbu clearfix">
    <el-row :gutter="20">
      <el-col :span="14">
        <!-- 用戶分布 -->
        <Maps class="maps boxShadow bdRadius">
          <h2 slot="title" style="font-size:20px;text-align:left;padding:20px 0 0 20px;">用戶分布</h2>
        </Maps>
      </el-col>
      <el-col :span="10">
        <!-- 省份統計表格 -->
        <div class="tongji boxShadow bdRadius" style="">
          <el-table :data="tableData" stripe style align="center">
            <el-table-column prop="prov" label="省份" width="100" align="center"></el-table-column>
            <el-table-column prop="comp" label="注册公司" width align="center"></el-table-column>
            <el-table-column prop="proj" label="注册项目" width align="center"></el-table-column>
            <el-table-column prop="job" label="注册员工" width align="center"></el-table-column>
            <el-table-column prop="user" label="注册用户" align="center"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Maps from "../common/map";
export default {
  name: "fenbu",
  data() {
    return {
      tableData: [
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "河南省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山东省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        },
        {
          prov: "山西省",
          comp: "100",
          proj: "80",
          job: "1000",
          user: "1500"
        }
      ]
    };
  },
  methods: {},
  components: {
    Maps
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fenbu {
  color: #fff;
  min-height: 100vh;
}
.fenbu >>>.left_map {
  height: 600px;
} 
.fenbu >>> .el-table {
  background-color: transparent;
}
.fenbu >>> .el-table_1_column_1 {
  color: #fff !important;
}
.fenbu >>> .el-table_1_column_2 {
  color: #336633 !important;
}
.fenbu >>> .el-table_1_column_3 {
  color: #336699 !important;
}
.fenbu >>> .el-table_1_column_4 {
  color: #663333 !important;
}
.fenbu >>> .el-table_1_column_5 {
  color: #663366 !important;
}
.fenbu >>> .el-table__row {
  background-color: rgba(0, 0, 0, 0.1);
}
.fenbu >>> .el-table__row--striped {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.fenbu >>> .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: transparent !important;
}
.fenbu >>> .el-table th {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.fenbu >>> .has-gutter tr {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.fenbu >>> .el-table td,
.el-table th.is-leaf {
  border-bottom: none;
}
.fenbu >>> .el-table th.is-leaf {
  border-bottom: none;
}
</style>

