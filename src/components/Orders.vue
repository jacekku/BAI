<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <div class="container w-50">
     <b-row>
            <b-col>
              <b-table
                striped
                hover
                :items="orders" 
              >
                
              </b-table>
            </b-col>
          </b-row>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Orders',
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
        orders: [],
    }
  },
  mounted () {
    fetch('https://my.api.mockaroo.com/orders.json?key=de6833d0')
            .then((fetchedData) => fetchedData.json())
            .then(
            (fetchedData) => (this.orders = fetchedData)
            )
            .catch((err) => console.log(err.message))
  },
}
</script>
