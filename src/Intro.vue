<template>
  <div id="intro">
    <banner-intro></banner-intro>
    <yaht-view></yaht-view>
  </div>
</template>

<script>
import BannerIntro from "./BannerIntro.vue";
import YahtView from "./YahtView.vue";

export default {
  el: "#intro",
  components: {
    BannerIntro,
    YahtView
  }
};
</script>

<style>

</style>
