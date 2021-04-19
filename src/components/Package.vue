<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <h1>Przesyłka</h1>
      <header>ID: {{ $route.params.id }}</header>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Package',
  components: {
    Navbar: Navbar,
  },
}
</script>
