<template>
    <div id="charter">
        <ul class="grid-container">
          <li v-for="charter in charters" :key="charter.id" class="grid-item"> {{ charter[0].name }} </li>
        </ul>
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
  el: '#charter',
  data () {
    return {
      charters: charters
    }
  }
}
</script>

<style>
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
