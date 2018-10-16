import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Pets from '../pages/Pets/Pets.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/pets', name: 'pets', component: Pets},
    {path: '/help', name: 'help', component: Home},
    {path: '/contacts', name: 'contacts', component: Home}
  ]
})
