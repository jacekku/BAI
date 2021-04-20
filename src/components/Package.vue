<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <h1>Przesyłka</h1>

      <b-card
        border-variant="secondary"
        header="Sczegóły paczki"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>
          <ul v-for="item in items" v-bind:key="item.package_id">
            <p><b>ID:</b> {{ item.package_id }}</p>
            <p><b>Wysłano:</b> {{ item.dispatch }}</p>
            <p><b>Dostarczono:</b> {{ item.arrival }}</p>
            <p><b>Waga:</b> {{ item.weight }} kg</p>
            <p><b>Wysokość:</b> {{ item.height }} cm</p>
            <p><b>Szerokość: </b> {{ item.width }} cm</p>
            <p><b>Długość :</b> {{ item.length }} cm</p>
            <p><b>Przewoźnik:</b> {{ item.shipper }}</p>
          </ul>
          <p><b>Koszt wysyłki:</b></p>
          <b-button @click="calculateDispatchCost"> Oblicz koszt wysyłki </b-button>
        </b-card-text>
      </b-card>
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
  methods: {
    checkPackageID(el) {
      return el.package_id == this.$route.params.id
    },
  },
  data() {
    return {
      items: [],
      orders: [],
    }
  },
  mounted() {
    fetch('https://my.api.mockaroo.com/dispatch_data.json?key=de6833d0')
      .then((fetchedData) => fetchedData.json())
      .then(
        (fetchedData) => (this.items = fetchedData.filter(this.checkPackageID))
      )
      .catch((err) => console.log(err.message))
  },
}
</script>
