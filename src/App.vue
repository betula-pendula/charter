<template>
  <div id="app">
    <header-app></header-app>
    <main-page></main-page>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
import MainPage from "./MainPage.vue";
import FooterPage from "./FooterPage.vue";

export default {
  name: "#app",
  components: {
    HeaderApp,
    MainPage,
    FooterPage
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>