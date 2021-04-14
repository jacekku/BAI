<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <h1>przesyłki</h1>
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
