<template>
  <section>
    <div class="main content-wrap">
      <div class="content">
        <h1>Przesyłka</h1>

        <b-card
          border-variant="secondary"
          header="Szczegóły paczki"
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
            <div class="cost">
              <p v-if="cost !== 0">
                <b>Koszt wysyłki: {{ cost }} zł</b>
              </p>
              <b-button @click="calculateCost">
                Oblicz koszt wysyłki
              </b-button>
            </div>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Package',

  methods: {
    checkPackageID(el) {
      return el.package_id == this.$route.params.id
    },
    calculateCost: function() {
      const num1 = 13
      const num2 = 17
      const num3 = 24
      const height = this.items[0].height
      const width = this.items[0].width
      const depth = this.items[0].length
      const weight = this.items[0].weight

      if (height <= 50 && width <= 30 && depth <= 30) {
        this.cost =
          parseInt(num1) +
          2 * parseInt(weight) +
          (parseInt(num1) + 2 * parseInt(weight)) * 0.2
      } else if (height <= 80 && width <= 50 && depth <= 50) {
        this.cost =
          parseInt(num2) +
          2 * parseInt(weight) +
          (parseInt(num2) + 2 * parseInt(weight)) * 0.2
      } else {
        this.cost =
          parseInt(num3) +
          2 * parseInt(weight) +
          (parseInt(num3) + 2 * parseInt(weight)) * 0.2
      }
      var sum = this.cost
      if (isNaN(sum)) sum = 0
      return sum
    },
  },
  data() {
    return {
      items: [],
      orders: [],
      cost: 0,
    }
  },
  mounted() {
    fetch('https://my.api.mockaroo.com/dispatch_data.json?key=de6833d0')
      .then(fetchedData => fetchedData.json())
      .then(
        fetchedData => (this.items = fetchedData.filter(this.checkPackageID))
      )
      .catch(err => console.log(err.message))
  },
}
</script>
