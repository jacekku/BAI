<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <h1>statystyki</h1>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Statistics',
  components: {
    Navbar: Navbar,
  },
}
</script>
