import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Foo from './Charter.vue'

Vue.use(VueRouter)

const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
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
