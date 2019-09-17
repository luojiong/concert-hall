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
          label: "安全监测",
          img: require("../../public/images/home/anquan.png"),
          children: [
            {
              label: "二级 x1-1"
            }
          ]
        },
        {
          label: "三维实景展示",
          img: require("../../public/images/home/sanwei.png"),
          children: [
            {
              label: "二级 2-1"
            },
            {
              label: "二级 2-2"
            }
          ]
        },
        {
          label: "工程资料",
          img: require("../../public/images/home/gongcheng.png"),
          children: [
            {
              label: "二级 3-1"
            },
            {
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
        img: "img"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
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
