<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <div class="container-fluid">
        <h1>przesyłki</h1>
        <h2>Wojewodztwo: {{ $route.params.name }}</h2>
        <b-row>
          <b-col md="3"> 
            <b-form-input v-model="filter" type="search" placeholder="Wyszukaj"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
          <b-table striped hover :items="packages" :filter="filter" :per-page="perPage" :current-page="currentPage"></b-table>
          <b-pagination v-model="currentPage" :total-rows="rows" :perPage="perPage"></b-pagination>
          </b-col>
        </b-row>
       
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Packages',
  props: ["posts"],
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      packages: [],
      filter: "",
      perPage: 10,
      currentPage: 1,
    }
  },
  comptued: {
    rows() {
      return this.packages.length;
    }
  },
  mounted() {
    fetch('https://my.api.mockaroo.com/dispatch_data/.json?key=646a4130')
      .then((fetchedData) => fetchedData.json())
      .then((fetchedData) => (this.packages = fetchedData.filter(item => item.state == this.$route.params.name)))
      .catch((err) => console.log(err.message))
  },
  methods: {

  }
}
</script>
