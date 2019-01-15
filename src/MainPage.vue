<template>
    <div id="main-page">
      <h1>Заказать Яхту</h1>
      <hr>
      <div class="container">
        <div class="row">
          <router-view></router-view>
          <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip">
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck">
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
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
  el: '#main-page',
  data () {
    return {
      charters: charters
    }
  }
}
</script>

<style scope>
#main-page {
  height: 100vh;
  background: url(./img/background-main-page.jpg) no-repeat;
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
}

#main-page h1 {
  padding-top: 3em;
  color: #ffffff;
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
