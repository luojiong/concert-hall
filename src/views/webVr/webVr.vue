<style scoped lang="scss">
.webVrContainer {
  height: 100%;
}
.myvrcmp {
  border-radius: 5px;
}
</style>
<template>
  <div>
    <div class="webVrContainer">
      <web-vrcmp class="myvrcmp"></web-vrcmp>
    </div>
  </div>
</template>

<script>
import webVrcmp from "../../components/webVrComponent";
export default {
  name: "webVr",
  components: {
    webVrcmp
  }
};
</script>
