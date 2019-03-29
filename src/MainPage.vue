<template>
    <div id="main-page">
      <router-view></router-view>
    </div>
</template>

<script>
import charters from './data.json'
//const charter = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})

//const charters = [
//  charter('Anton','qwe','rty','ghj','345'),
//  charter('Anton','qwe','rty','ghj','345'),
//  charter('Anton','qwe','rty','ghj','345'),
//]

//const charters = require('./data.json')

export default {
  el: '#main-page'
}
</script>

<style scope>
#main-page {
  /*background: url(./img/background-main-page.jpg) no-repeat;*/
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
}

.grid-container {
  display: grid;
  grid-gap: 30px 30px;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
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
