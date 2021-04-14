// Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Moduły
import Index from './components/Index.vue'
import App from './App.vue'
import Packages from './components/Packages.vue'
import Statistics from './components/Statistics.vue'
import Cost from './components/Cost.vue'
// Style
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import './styles.css'

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);


Vue.config.productionTip = false

const routes = [
  { path: '/', component: Index },
  { path: '/przesyłki', component: Packages },
  { path: '/statystyki', component: Statistics },
  { path: '/koszt', component: Cost },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router,
  mounted: function() {
    const main = document.querySelector('.js-main')
    setTimeout(() => {
      main.classList.add('loaded')
    }, 1)
  },
}).$mount('#app')

Vue.use(VueRouter)
