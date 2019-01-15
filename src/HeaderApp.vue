<template>
  <div id="header-app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="http://placehold.it/30x30" width="30" height="30" alt>
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
                <h1>hello</h1>
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                    Home
                    <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/foo">Go to Foo</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/bar">Go to Bar</router-link>
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
h1 {
    color: blue;
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