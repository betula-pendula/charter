<template>
  <div id="charter">
    <!--
    <ul class="grid-container">
      <li v-for="charter in charters" :key="charter.id" class="grid-item">{{ charter[0].name }}</li>
    </ul>
    -->
    <div id="booking">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="booking-form">
              <form>
                <div class="form-group">
                  <span class="form-label">Ваше назначение</span>
                  <input
                    class="form-control"
                    type="text"
                    v-model="test"
                    placeholder="Где вы планируете отдых на яхте"
                  >
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <span class="form-label">Дата</span>
                      <input class="form-control" type="date" required>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <span class="form-label">Время</span>
                      <select class="form-control">
                        <option>1 час</option>
                        <option>2 часа</option>
                        <option>3 часа</option>
                        <option>4 часа</option>
                        <option>5 часов</option>
                        <option>1 день</option>
                        <option>сутки</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <span class="form-label">Палубы</span>
                      <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <span class="form-label">Взрослые</span>
                      <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <span class="form-label">Дети</span>
                      <select class="form-control">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                </div>
                <div class="form-btn">
                  <button class="submit-btn" v-on:click="greet">Проверить наличие яхт</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-8">
            <div class="booking-cta">
              <h1>Бронируй уникальный отдых на яхте</h1>
              <p>Планируете отдых на море? Мы предлагаем дополнить его незабываемыми впечатлениями на яхте, которую можно взять в аренду.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import charters from "./data.json";

export default {
  el: "#charter",
  data() {
    return {
      charters: charters,
      name: "Anton",
      test: "Где вы планируете отдых на яхте"
    };
  },
  methods: {
    greet: function(event) {
      location.href =
        "https://script.google.com/macros/s/AKfycbzF5x2o6ouAAH21vUfBu017lyssl0FYHfGj0MoltM5vcjrvzbVE/exec?sdata=" +
        this.test;
    }
  }
};
</script>

<style>
#booking {
  font-family: "Montserrat", sans-serif;
  background-image: url("/src/img/background.jpg");
  background-size: cover;
  background-position: center;
  padding-top: 3em;
  padding-bottom: 3em;
}

.booking-form {
  background-color: #fff;
  padding: 50px 20px;
  -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.booking-form .form-group {
  position: relative;
  margin-bottom: 30px;
}

.booking-form .form-control {
  background-color: #ebecee;
  border-radius: 4px;
  border: none;
  height: 40px;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #3e485c;
  font-size: 14px;
}

.booking-form .form-control::-webkit-input-placeholder {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form .form-control:-ms-input-placeholder {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form .form-control::placeholder {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form input[type="date"].form-control:invalid {
  color: rgba(62, 72, 92, 0.3);
}

.booking-form select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.booking-form select.form-control + .select-arrow {
  position: absolute;
  right: 0px;
  bottom: 4px;
  width: 32px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  pointer-events: none;
  color: rgba(62, 72, 92, 0.3);
  font-size: 14px;
}

.booking-form select.form-control + .select-arrow:after {
  content: "\279C";
  display: block;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.booking-form .form-label {
  display: inline-block;
  color: #3e485c;
  font-weight: 700;
  margin-bottom: 6px;
  margin-left: 7px;
}

.booking-form .submit-btn {
  display: inline-block;
  color: #fff;
  background-color: #1e62d8;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 4px;
  border: none;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.booking-form .submit-btn:hover,
.booking-form .submit-btn:focus {
  opacity: 0.9;
}

.booking-cta {
  margin-top: 80px;
  margin-bottom: 30px;
  padding-left: 50px;
}

.booking-cta h1 {
  font-size: 52px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
}

.booking-cta p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Lato", sans-serif;
}
</style>
