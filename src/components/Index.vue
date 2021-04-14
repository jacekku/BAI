<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <Map />
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'
import Map from './Map'

export default {
  name: 'Index',
  components: {
    Navbar,
    Map,
  },
}
</script>
