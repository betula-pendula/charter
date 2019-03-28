<template>
  <div id="app">
    <header-app></header-app>
    <main-page></main-page>
  </div>
</template>

<script>
import Charter from "./Charter.vue";
import HeaderApp from "./HeaderApp.vue";
import MainPage from "./MainPage.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Charter,
    HeaderApp,
    MainPage
  }
};
</script>

<style scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 0px;
}

a {
  color: #42b983;
}

.grid-container {
  display: grid;
  grid-gap: 30px 30px;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 30px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 30px;
  font-size: 30px;
  text-align: center;
}
</style>