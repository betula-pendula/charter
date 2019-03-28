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
                    <button class="submit-btn">Проверить наличие яхт</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-8">
              <div class="booking-cta">
                <h1>Бронируй уникальный отдых на яхте</h1>
                <p>
                  Планируете отдых на море? Мы предлагаем дополнить его незабываемыми впечатлениями на яхте, которую можно взять в аренду.
                </p>
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
      charters: charters
    };
  }
};
</script>

<style>
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
