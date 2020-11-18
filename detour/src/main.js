import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Restaurants from "@/components/pages/Restaurants.vue";
import Home from "@/components/pages/Home.vue";
import Places from "@/components/pages/Places.vue";
import NewRestaurant from "@/components/pages/NewRestaurant.vue";

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/restaurant/new', component: NewRestaurant },
    { path: '/restaurants', component: Restaurants },
    { path: '/places', component: Places },
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
