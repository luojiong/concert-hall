<style scoped lang="scss">
/deep/.tableContainner {
  .cell {
    height: 26px;
  }
}
/deep/.el-checkbox {
  color: #c9c9c9;
}
.system-setup {
  padding: 20px;
  .mypage {
    bottom: 1.5vh;
  }
  .equipoent-content {
    width: 100%;
    position: relative;
    height: 100%;
    border: 1px solid #7892a0;
    border-radius: 5px;
  }
  .title {
    line-height: 60px;
    font-size: 18px;
    padding-left: 18px;
  }
  /deep/.myoption {
    margin-left: 10px;
    .el-input__inner {
      height: 28px;
      width: 100px;
      line-height: 28px;
    }
  }

  .header {
    width: 100%;
    display: flex;
    & > div {
      flex-grow: 1;
    }
  }
  .header:after {
    display: block;
    content: "";
    clear: both;
  }
  .wranbtn {
    padding: 5px 20px;
    position: absolute;
    background-color: #d4a358;
    right: 20px;
    top: 17px;
  }
  .table-btn {
    border: none;
    padding: 5px 20px;
  }
  /deep/.el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #d4a358;
    border-color: #d4a358;
  }
  /deep/.el-checkbox__input.is-checked + .el-checkbox__label {
    color: #d4a358;
  }
}
</style>
<template>
  <div class="system-setup" ref="systemsetup">
    <div class="equipoent-content">
      <div class="title header">
        <div>用户管理</div>
        <div>
          <el-button type="warning" class="wranbtn">新增</el-button>
        </div>
      </div>
      <el-table
        class="tableContainner"
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column prop="des" label="用户名"> </el-table-column>
        <el-table-column prop="type" label="登录"> </el-table-column>
        <el-table-column prop="address" label="联系方式"> </el-table-column>
        <el-table-column prop="addressNumber" label="属性">
          <template slot-scope="scope">
            <el-checkbox-group v-model="checkedCities">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
          </template>
        </el-table-column>
        <el-table-column prop="device" label="角色"> </el-table-column>
        <el-table-column prop="watch" label="修改密码">
          <template>
            <el-button
              size="mini"
              type="danger"
              style="background: rgba(103,71,255,0.2)"
              class="table-btn"
              @click="handleDelete(scope.$index, scope.row)"
              >修改密码</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="status" label="删除账号">
          <template>
            <el-button
              size="mini"
              class="table-btn"
              style="background: rgba(255,133,127,0.2)"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除账号</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="mypage"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        :pager-count="5"
        small
        layout="total,prev,pager,next,jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemsetup",
  data() {
    return {
      checkedCities: ["管理员"],
      cities: ["管理员", "普通用户"],
      currentPage: 1,
      tableData: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  created() {},
  mounted() {
    this.init();
    window.addEventListener("resize", () => {
      this.init();
    });
  },
  methods: {
    init() {
      let count = Math.floor((this.$refs.systemsetup.offsetHeight - 170) / 37);
      this.tableData = [...Array(count).keys()].map(() => {
        return {
          type: "大顶",
          address: "18012450011",
          addressNumber: "2016-05-02",
          device: "项目经理",
          watch: "200/小时",
          status: "运行中",
          success: "暂无",
          des: "备注1"
        };
      });
    },
    handleCurrentChange() {},
    handleEdit() {}
  }
};
</script>
