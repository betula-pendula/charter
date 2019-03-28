<template>
  <div id="header-app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/logo.png" width="60" height="60" alt>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/charters">Заказать яхту</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">О нас</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  el: "#header-app",
  data() {
    return {
      charters: charters
    };
  }
};
</script>

<style scope>
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