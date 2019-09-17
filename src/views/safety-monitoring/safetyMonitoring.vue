<style scoped lang="scss">
.safety {
  border: 1px solid red;
  padding: 10px;
}
    .color-black{

    }
</style>
<template>
  <div class="safety">
    <el-row>
      <el-col :span="20">
        <el-row class="color-black">
          <el-col :span="8">受力严重</el-col>
          <el-col :span="8">受力一般</el-col>
          <el-col :span="8">受力轻微</el-col>
        </el-row>
      </el-col>
      <el-col :span="4"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "afetyMonitoring"
};
</script>
