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
  height: 50vh;
  display: flex;
  div{
    flex-grow: 1;
    border-radius: 5px;
    height: 100%;
    background: url("../../../../public/images/home/banner.png") center center
    no-repeat;
    background-size: 100% 100%;
  }
  div:first-child{
    margin-right: 20px;

  }
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
  height: 66.6%;
}
.footer-echart {
  height: 34.4%;
  padding: 0 10px;
  margin: 0 !important;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #4e4c4d;
  .el-col {
    padding-top: 20px;
    height: 100%;
  }
}
.chart-container {
  height: 100%;
  border-radius: 5px;
  border: 1px solid #7892a0;
}
.mychart {
  width: 100%;
  height: calc(100% - 27px);
}
.chart-title {
  font-size: 16px;
  padding: 5px 20px 0 20px;
}
.chart-subtitle {
  width: 80%;
  margin-top: 5px;
  font-size: 14px;
}
.right-container {
  height: 32.3%;
  width: 92%;
  margin: 0 auto;
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
          <div class="bim-box">
            <div></div>
            <div></div>
          </div>
        </div>
        <el-row class="footer-echart" :gutter="20">
          <el-col :span="12">
            <div class="chart-container">
              <div class="chart-title">
                变形速度分布
              </div>
              <chart :options="options1" class="mychart"></chart>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="chart-container">
              <div class="chart-title">
                差异变形分布
              </div>
              <chart :options="options2" class="mychart"></chart>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <div class="right-container">
          <div class="border-box" style=" margin-top: 0;">
            <div class="table-title">
              变形速率
            </div>
            <chart :options="options3" class="mychart" style="height: calc(100% - 50px);"></chart>
          </div>
        </div>
        <div class="right-container">
          <div class="border-box">
            <div class="table-title">
              差异变形
            </div>
            <chart :options="options5" class="mychart" style="height: calc(100% - 50px);"></chart>
          </div>
        </div>
        <div class="right-container">
          <div class="border-box" >
            <div class="mychart" style="position: relative;height: calc(100% - 50px)">
              <div class="chart-number">4396</div>
              <chart
                      :options="options4"
                      style="width: 100%;height: 100%;"
              ></chart>
            </div>
            <el-row style="font-size: 12px;text-align: center">
              <el-col :span="6" v-for="item in chartdata">
                <div class="chart-text">
                  <span
                          class="circular"
                          :style="'border:2px solid ' + item.color"
                  ></span>
                  {{ item.title }}
                </div>
                <div
                        :style="'color:' + item.color"
                        style="margin-top: 0.5vh;font-size: 16px;"
                        class="chart-text"
                >
                  {{ item.value }}
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueEcharts from "vue-echarts";
export default {
  components: {
    chart: VueEcharts
  },
  name: "topmonitoring",
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
      ],
      options1: {
        color: ["#3984FF"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
            axisLabel: {
              color: "#c9c9c9"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            type: "value",
            axisLabel: {
              color: "#c9c9c9"
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "20%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      },
      options2: {
        color: ["#DEA518"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
            axisLabel: {
              color: "#c9c9c9"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            type: "value",
            axisLabel: {
              color: "#c9c9c9"
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "20%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      },
      options3: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "rgb(228,50,50)"
            }
          }
        },
        grid: {
          left: "3%",
          top: "10%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle:{
                color:'#4e4c4d'
              }
            },
            type: "category",
            axisLabel: {
              color: "#c9c9c9"
            },
            boundaryGap: false,
            data: ["11", "12", "13", "14", "15", "16", "17"]
          }
        ],
        yAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle:{
                color:'#4e4c4d'
              }
            },
            splitLine: {
              interval:2,
              lineStyle:{
                color:'#4e4c4d'
              }
            },
            axisLabel: {
              color: "#c9c9c9"
            },
            type: "value"
          }
        ],
        series: [
          {
            name: "差异变形",
            smooth: true,
            symbol: "none",
            type: "line",
            lineStyle: {
              color: "rgba(228,50,50,0.6)"
            },
            areaStyle: {
              color: "rgba(228,50,50,0.35)"
            },
            data:[180, 302, 101, 134, 90, 230, 210]
          },
          {
            name: "差异变形2",
            smooth: true,
            symbol: "none",
            type: "line",
            lineStyle: {
              color: "rgba(58,133,255,0.9)"
            },
            areaStyle: {
              color: "rgba(58,133,255,0.35)"
            },
            data:[140, 272, 90, 114, 70, 210, 190]
          }
        ]
      },
      options4: {
        color: ["#429CFE", "#B3A5F6", "#FECB3A", "#F8739B", "#73E6CE"],
        title: {
          text: "报警次数",
          top: "4%",
          left: "4%",
          textStyle: {
            color: "white",
            fontSize: 16
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["60%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      },
      options5: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "rgb(228,50,50)"
            }
          }
        },
        grid: {
          left: "3%",
          top: "10%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle:{
                color:'#4e4c4d'
              }
            },
            type: "category",
            axisLabel: {
              color: "#c9c9c9"
            },
            boundaryGap: false,
            data: ["11", "12", "13", "14", "15", "16", "17"]
          }
        ],
        yAxis: [
          {
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle:{
                color:'#4e4c4d'
              }
            },
            splitLine: {
              interval:2,
              lineStyle:{
                color:'#4e4c4d'
              }
            },
            axisLabel: {
              color: "#c9c9c9"
            },
            type: "value"
          }
        ],
        series: [
          {
            name: "差异变形",
            smooth: true,
            symbol: "none",
            type: "line",
            lineStyle: {
              color: "rgba(228,50,50,0.6)"
            },
            areaStyle: {
              color: "rgba(228,50,50,0.35)"
            },
            data:[180, 302, 101, 134, 90, 230, 210]
          },
          {
            name: "差异变形2",
            smooth: true,
            symbol: "none",
            type: "line",
            lineStyle: {
              color: "rgba(58,133,255,0.9)"
            },
            areaStyle: {
              color: "rgba(58,133,255,0.35)"
            },
            data:[140, 272, 90, 114, 70, 210, 190]
          }
        ]
      },
      chartdata: [
        {
          title: "1F大厅",
          color: "#429CFE",
          value: 556
        },
        {
          title: "1F角落",
          color: "#B3A5F6",
          value: 420
        },
        {
          title: "2F大厅",
          color: "#FECB3A",
          value: 320
        },
        {
          title: "2F角落",
          color: "#73E6CE",
          value: 400
        }
      ]
    };
  }
};
</script>
