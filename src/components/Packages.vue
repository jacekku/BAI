<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <div class="container-fluid content-wrap">
        <div class="content">
          <h1 v-if="$route.params.name === 'all'">Dane przesyłek</h1>
          <h1 v-else>Dane przesyłek - województwo {{ $route.params.name }}</h1>
          <b-row>
            <b-col md="3">
              <b-form-input
                v-model="filter"
                type="search"
                placeholder="Szukaj w przesyłkach"
                class="datatable-search"
              ></b-form-input>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-table
                striped
                hover
                :items="packages"
                :filter="filter"
                :per-page="perPage"
                :current-page="currentPage"
              ></b-table>
              <b-pagination
                v-if="packages.length > 0"
                v-model="currentPage"
                :total-rows="packages.length"
                :perPage="perPage"
              ></b-pagination>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Packages',
  props: ['posts'],
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      packages: [],
      filter: '',
      perPage: 10,
      currentPage: 1,
    }
  },
  watch: {
    '$route.params.name': function() {
      this.showTable()
    },
  },
  mounted() {
    this.showTable()
  },
  methods: {
    showTable() {
      fetch('https://my.api.mockaroo.com/dispatch_data/.json?key=646a4130')
        .then(fetchedData => fetchedData.json())
        .then(
          fetchedData => (this.packages = fetchedData.filter(this.checkState))
        )
        .catch(err => console.log(err.message))
    },
    checkState(item) {
      return this.$route.params.name == 'all'
        ? true
        : item.state == this.$route.params.name
    },
  },
}
</script>
