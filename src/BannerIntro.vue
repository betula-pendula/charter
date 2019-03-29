<template>
  <div id="banner-intro">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 banner-text">
          <h1>
            Аренда яхты в Сочи от
            <span>4000 руб.</span> в час
          </h1>
          <h4>При заказе от 3 часов действуют скидки</h4>
        </div>
        <div class="col-lg-4">sdgf</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#banner-intro",
  data() {
    return {
      charters: banner - intro
    };
  }
};
</script>

<style>
#banner-intro {
  background-image: url("/src/img/background.jpg");
  background-size: cover;
  background-position: center;
  padding-top: 3em;
  padding-bottom: 3em;
  height: 100vh;
}

.banner-text {
  margin-top: 5em;
  padding-right: 200px;
}

.banner-text h1 {
  font-weight: 700;
  color: white;
}

.banner-text span {
  color: aqua;
}

.banner-text h4 {
  margin-top: 1em;
  font-weight: 400;
  color: burlywood;
}
</style>