<style>
  .pnlm-load-box{
    display: none!important;
  }
</style>
<template>
  <div style="width: 100%;height: 100%;" id="panorama"></div>
</template>
<script>
export default {
  name: "wevVr",
  mounted() {
    let viewer = window.pannellum.viewer("panorama", {
      autoLoad: true,
      compass: true,
      default: {
        firstScene: "circle",
        sceneFadeDuration: 2000
      },
      scenes: {
        circle: {
          hfov: 190,
          pitch: -3,
          yaw: 117,
          type: "equirectangular",
          panorama: "https://pannellum.org/images/from-tree.jpg",
          hotSpots: [
            {
              pitch: -3.9, //y
              yaw: 132.9, //x
              type: "scene",
              text: "花园",
              sceneId: "house"
            }
          ]
        },
        house: {
          title: "公园",
          hfov: 110,
          yaw: 5,
          type: "equirectangular",
          panorama: "https://pannellum.org/images/bma-0.jpg",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "公路",
              sceneId: "circle",
              targetYaw: -23,
              targetPitch: 2
            }
          ]
        }
      }
    });
    viewer.on("scenechange", function(event) {
      console.log(event)
      viewer.setHfov(viewer.getHfov() + 10);
    });
  }
};
</script>
