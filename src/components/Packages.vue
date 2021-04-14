<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <h1>przesyłki</h1>
      <h2>Wojewodztwo: {{ $route.params.name }}</h2>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Packages',
  components: {
    Navbar: Navbar,
  },
}
</script>
