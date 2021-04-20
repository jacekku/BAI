<template>
  <section>
    <div class="main">
      <h1>Wybierz województwo, aby wyświetlić dane o przesyłkach</h1>
      <Map />
    </div>
  </section>
</template>

<script>
import Map from './Map'

export default {
  name: 'Index',
  components: {
    Map,
  },
}
</script>
