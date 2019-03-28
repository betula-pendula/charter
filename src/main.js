import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Intro from './Intro.vue'
import Charters from './Charter.vue'
import About from './About.vue'

Vue.use(VueRouter)

//const Bar = { template: '<div>bar</div>' }

const routes = [
  {
    path: '/',
    component: Intro
  },
  {
    path: '/charters',
    component: Charters
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
