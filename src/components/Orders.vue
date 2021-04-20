<template>
  <section>
    <div class="main">
      <h1>Zamówienia</h1>
      <div class="container w-50">
        <b-row>
            <b-col md="3">
              <b-form-input
                v-model="filterOrders"
                type="search"
                placeholder="Szukaj"
                class="datatable-search"
              ></b-form-input>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-table
                striped
                hover
                :items="orders"
                :fields="fields"
                :filter="filterOrders"
                :per-page="perPage"
                :current-page="currentPage"
              >
              </b-table>
              <b-pagination
                v-if="orders.length > 0"
                v-model="currentPage"
                :total-rows="orders.length"
                :perPage="perPage"
              ></b-pagination>
            </b-col>
          </b-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Orders',
  data() {
    return {
      fields: [
        { key: 'order_id', label: 'Identyfikator zamówienia', sortable: true },
        { key: 'first_name', label: 'Imię odbiorcy', sortable: true },
        { key: 'last_name', label: 'Nazwisko odbiorcy', sortable: true },
        { key: 'email', label: 'E-mail odbiorcy', sortable: true },
        { key: 'order_received', label: 'Zamówienie odebrane', sortable: true },
        { key: 'order_amount', label: 'Kwota zamówienia', sortable: true }
        
      ],
      orders: [],
      perPage: 10,
      currentPage: 1,
      filterOrders: ''
    }
  },
  mounted() {
    fetch('https://my.api.mockaroo.com/orders.json?key=646a4130')
      .then(fetchedData => fetchedData.json())
      .then(fetchedData => (this.orders = fetchedData))
      .catch(err => console.log(err.message))
  },
}
</script>
