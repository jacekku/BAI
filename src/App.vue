<template>
  <main class="page-wrap js-main">
    <section id="app">
      <Navbar></Navbar>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </main>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar: Navbar,
  },
}
</script>
