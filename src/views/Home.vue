<style lang="scss" scoped>
$body-color: rgba(22, 18, 16, 0.6);
.home {
  background: url("../../public/images/home/bg.png") 100% 100% no-repeat;
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: $body-color;
  line-height: 60px;
  margin-bottom: 5px;
}

.el-aside {
  background-color: $body-color;
  text-align: center;
}

.zzkj-window {
  background-color: $body-color;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.max-container {
  height: calc(100vh - 65px);
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<style lang="scss">
.mytree {
  user-select: none;
  background: transparent !important;
  .el-tree-node__expand-icon {
    display: none;
  }
  .el-tree-node:focus > .el-tree-node__content {
    background: transparent;
  }
  .el-tree-node__content {
    color: white;
    height: 60px;
    font-size: 24px;
    border-top: 1px solid #564e49;
    border-bottom: 1px solid #101010;
    padding-left: 20px !important;
  }
  .el-tree-node__content:hover {
    background: none;
  }
  .el-tree-node__children {
    padding-left: 45px;
    .el-tree-node__label {
      color: #c9c9c9;
    }
    .el-tree-node__content {
      border: none;
    }
  }
  .el-tree-node__label {
    font-size: 16px;
  }
  .is-current > .el-tree-node__content {
    color: white !important;
    border-left: 5px solid rgba(214, 174, 101, 1);
    background: rgba(214, 174, 101, 0.6) !important;
    font-weight: bold;
    .el-tree-node__label {
      color: white !important;
    }
  }
}
.tree-icon {
  position: relative;
  margin-right: 10px;
  top: 5px;
}
.header-icon {
  position: relative;
  top: 7px;
  margin-right: 3px;
}
</style>
<template>
  <el-container class="home">
    <el-header>
      <img src="../../public/images/home/title.png" style="margin-top: 20px;" />
    </el-header>
    <el-container class="max-container">
      <el-aside width="300px">
        <el-row style="line-height: 60px">
          <el-col :span="12">
            <img
              src="../../public/images/home/self.png"
              class="header-icon"
            />用户名
          </el-col>
          <el-col :span="12">
            <img
              src="../../public/images/home/tuichu.png"
              class="header-icon"
            />退出
          </el-col>
        </el-row>
        <el-tree
          :data="data"
          class="mytree"
          :props="defaultProps"
          node-key="id"
          :default-expanded-keys="active.array"
          :current-node-key="active.value"
          @node-click="handleNodeClick"
          :render-content="renderContent"
        ></el-tree>
      </el-aside>
      <el-main>
        <router-view class="zzkj-window" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      data: [
        {
          id: 1,
          label: "安全监测",
          path: "safetyMonitoring",
          img: require("../../public/images/home/anquan.png"),
          children: [
            {
              id: 6,
              label: "木屋架变形监测",
              path: "/frame"
            },
            {
              id:7,
              label: "格栅、吊杆变形监测",
              path:"/frame"
            },
            {
              id:8,
              label: "观众厅大顶姿态监测",
              path:"/topmonitoring"
            },
            {
              id:9,
              label: "定期检测成果",
              path:"/regulartesting"
            },
            {
              id:10,
              label: "监测设备台账",
              path:"/equipment"
            }
          ]
        },
        {
          id: 2,
          label: "三维实景展示",
          path: "/webVr",
          img: require("../../public/images/home/sanwei.png")
        },
        {
          id: 3,
          label: "工程资料",
          path: "/projectdata",
          img: require("../../public/images/home/gongcheng.png")
        },
        {
          id: 4,
          label: "特色保护部位",
          path: "/protectionlocation",
          img: require("../../public/images/home/tese.png")
        },
        {
          id: 5,
          label: "系统设置",
          path: "/systemsetup",
          img: require("../../public/images/home/xitong.png")
        }
      ],
      defaultProps: {
        id: "id",
        children: "children",
        label: "label",
        img: "img",
        path: "path"
      },
      active: {
        array: [],
        value: 0
      }
    };
  },
  created() {
    this.initTree();
  },
  methods: {
    handleNodeClick(data) {
      if (data.path != this.$route.path) {
        this.$router.push({ path: data.path });
      }
    },
    initTree() {
      for (let i = 0; i < this.data.length; i++) {
        if (this.$route.path == this.data[i].path) {
          this.active.value = this.data[i].id;
          this.active.array = [this.data[i].id];
        }
        if (this.data[i].children && this.data[i].children.length !== 0) {
          for (let j = 0; j < this.data[i].children.length; j++) {
            if (this.data[i].children[j].path == this.$route.path) {
              this.active.value = this.data[i].children[j].id;
              this.active.array = [
                this.data[i].id,
                this.data[i].children[j].id
              ];
            }
          }
        }
      }
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <img class="tree-icon" src={node.data.img} />
          <span class="el-tree-node__label">{node.label}</span>
        </span>
      );
    }
  }
};
</script>
