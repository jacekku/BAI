<template>
  <main class="page-wrap js-main">
    <section id="app">
      <router-view></router-view>
      <Map />
    </section>
  </main>
</template>

<script>
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Map,
  },
}
</script>
