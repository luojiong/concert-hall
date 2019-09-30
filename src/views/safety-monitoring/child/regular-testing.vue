<style scoped lang="scss">
.color-black {
  width: 400px;
  font-size: 13px;
  text-align: center;
  margin-bottom: 20px;
}
.color-raiuds {
  border-radius: 2px;
  height: 12px;
  display: inline-block;
  width: 12px;
  background: #f14061;
  margin-right: 5px;
  position: relative;
  top: 0.5px;
}
.bim-box {
  width: 100%;
  height: calc(100% - 37px);
  border-radius: 5px;
  background: url("../../../../public/images/home/maxbanner.png") center center
    no-repeat;
  background-size: 100% 100%;
}
.Bimcontaienr {
  height: 100%;
  & > .el-col {
    padding: 20px 0;
    height: 100%;
  }
}
.top-content {
  padding: 0 20px;
  height: 100%;
}
.right-container {
  height: 100%;
  width: 92%;
  overflow: hidden;
  padding-bottom: 1.8vh;
  margin: 0 auto;
  table {
    color: #c9c9c9;
  }
}
.border-box {
  margin-top: 1.8vh;
  height: 100%;
  border: 1px solid #7892a0;
  border-radius: 5px;
}
.chart-number {
  font-size: 28px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.circular {
  display: inline-block;
  border-radius: 50%;
  position: relative;
  top: 1px;
  width: 9px;
  height: 9px;
}
.chart-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
<template>
  <div class="safety">
    <el-row class="Bimcontaienr">
      <el-col :span="18" style="border-right:1px solid #4e4c4d ">
        <div class="top-content">
          <el-row class="color-black">
            <el-col :span="8">
              <div class="color-raiuds"></div>
              受力严重</el-col
            >
            <el-col :span="8">
              <div class="color-raiuds" style="background-color:#FC8E0B"></div>
              受力一般</el-col
            >
            <el-col :span="8">
              <div class="color-raiuds" style="background-color:#4FC285"></div>
              受力轻微</el-col
            >
          </el-row>
          <div class="bim-box"></div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="right-container">
          <div class="border-box">
            <div class="table-title">
              成果报告
            </div>
            <table class="mytable" cellspacing="0">
              <tr class="mytable-tr">
                <td>类型</td>
                <td>位置</td>
                <td>报警时间</td>
                <td>报警值</td>
                <td>结论</td>
              </tr>
              <tr v-for="item in tableData" class="mytable-tr">
                <td class="mytable-td">{{ item.type }}</td>
                <td class="mytable-td">{{ item.address }}</td>
                <td class="mytable-td">{{ item.date }}</td>
                <td class="mytable-td">{{ item.value }}</td>
                <td class="mytable-td">{{ item.des }}</td>
              </tr>
              <tr v-for="item in tableData" class="mytable-tr">
                <td class="mytable-td">{{ item.type }}</td>
                <td class="mytable-td">{{ item.address }}</td>
                <td class="mytable-td">{{ item.date }}</td>
                <td class="mytable-td">{{ item.value }}</td>
                <td class="mytable-td">{{ item.des }}</td>
              </tr>
              <tr v-for="item in tableData" class="mytable-tr">
                <td class="mytable-td">{{ item.type }}</td>
                <td class="mytable-td">{{ item.address }}</td>
                <td class="mytable-td">{{ item.date }}</td>
                <td class="mytable-td">{{ item.value }}</td>
                <td class="mytable-td">{{ item.des }}</td>
              </tr>
              <tr v-for="item in tableData" class="mytable-tr">
                <td class="mytable-td">{{ item.type }}</td>
                <td class="mytable-td">{{ item.address }}</td>
                <td class="mytable-td">{{ item.date }}</td>
                <td class="mytable-td">{{ item.value }}</td>
                <td class="mytable-td">{{ item.des }}</td>
              </tr>
            </table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "regulartesting",
  data() {
    return {
      tableData: [
        {
          date: "19/05/02",
          type: "类型1",
          address: "位置1",
          value: 20,
          des: "结论"
        },
        {
          date: "19/05/04",
          type: "类型1",
          address: "位置1",
          value: 20,
          des: "结论"
        },
        {
          date: "19/05/01",
          type: "类型1",
          address: "位置1",
          value: 20,
          des: "结论"
        },
        {
          date: "19/05/03",
          type: "类型1",
          address: "位置1",
          value: 20,
          des: "结论"
        },
        {
          date: "19/05/02",
          type: "类型1",
          address: "位置1",
          value: 20,
          des: "结论"
        },
        {
          date: "19/05/04",
          type: "类型1",
          address: "位置1",
          value: 20,
          des: "结论"
        }
      ]
    };
  }
};
</script>
