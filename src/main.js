// Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Moduły
import Index from './components/Index.vue'
import App from './App.vue'
import Packages from './components/Packages.vue'
import Package from './components/Package.vue'
import Statistics from './components/Statistics.vue'
import Cost from './components/Cost.vue'
// Style
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import './styles.css'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Index },
  { path: '/przesyłki/:name', component: Packages },
  { path: '/statystyki', component: Statistics },
  { path: '/koszt', component: Cost },
  { path: '/przesyłka/:id', component: Package, name: 'Package', props: true },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

const animate = () => {
  const main = document.querySelector('.js-main')

  main.classList.remove('loaded')
  setTimeout(() => {
    main.classList.add('loaded')
  }, 1)
}

new Vue({
  render: h => h(App),
  router,
  mounted: function() {
    animate()
  },
}).$mount('#app')

Vue.use(VueRouter)
