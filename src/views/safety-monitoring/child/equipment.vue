<style scoped lang="scss">
.equipment {
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
    & > div {
      float: left;
    }
  }
  .header:after {
    display: block;
    content: "";
    clear: both;
  }
}
</style>
<template>
  <div class="equipment" ref="equipment">
    <div class="equipoent-content">
      <div class="title header">
        <div>监测设备台账</div>
        <div style="width: 600px;padding:0 10px;margin-left: 5vw;">
          <el-row style="font-size: 14px;">
            <el-col :span="8">
              类型
              <el-select v-model="value" placeholder="请选择" class="myoption">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              监测频率
              <el-select v-model="value" placeholder="请选择" class="myoption">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              运行状态
              <el-select v-model="value" placeholder="请选择" class="myoption">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-table
        class="tableContainner"
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column type="index" width="50" label="序号">
        </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="address" label="位置"> </el-table-column>
        <el-table-column prop="addressNumber" label="位置编号">
        </el-table-column>
        <el-table-column prop="device" label="采集设备"> </el-table-column>
        <el-table-column prop="watch" label="监测频率"> </el-table-column>
        <el-table-column prop="status" label="运行状态"> </el-table-column>
        <el-table-column prop="success" label="校准记录"> </el-table-column>
        <el-table-column prop="des" label="备注"> </el-table-column>
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
  name: "equipment",
  data() {
    return {
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
    window.addEventListener("resize",()=>{
        this.init();
    });
  },
  methods: {
    init() {
      let count = Math.floor((this.$refs.equipment.offsetHeight - 160) / 34);
      this.tableData = [...Array(count).keys()].map(val => {
        return {
          type: "大顶",
          address: "大顶左侧",
          addressNumber: "2016-05-02",
          device: "王小虎",
          watch: "200/小时",
          status: "运行中",
          success: "暂无",
          des: "备注1"
        };
      });
    },
    handleCurrentChange() {}
  }
};
</script>
