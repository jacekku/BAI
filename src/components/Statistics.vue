<template>
  <section>
    <Navbar></Navbar>
    <div class="main content-wrap">
      <div class="content">
        <div class="stats-wrap">
          <h2 class="stats-header">
            Ilość paczek wysłana i otrzymana w poszczególnych województwach
          </h2>
          <SentReceivedPerMonth
            :data="dataSentReceived"
            :loaded="loadedSentReceived"
            v-if="loadedSentReceived"
          />
          <div v-else>
            <b-spinner label="Ładowanie..."></b-spinner>
          </div>
        </div>
        <div class="stats-wrap">
          <h2 class="stats-header">
            Ilość paczek przetworzona przez spedytorów
          </h2>
          <PackagePerShipper
            :data="dataPackagePerShipper"
            :loaded="loadedPackagePerShipper"
            v-if="loadedPackagePerShipper"
          />
          <div v-else>
            <b-spinner label="Ładowanie..."></b-spinner>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SentReceivedPerMonth from './charts/SentReceivedPerMonth'
import PackagePerShipper from './charts/PackagePerShipper'
import Navbar from './Navbar'
export default {
  components: {
    Navbar,
    SentReceivedPerMonth,
    PackagePerShipper,
  },
  mounted() {
    this.loadDataVoivodeship()
    this.loadDataShipper()
  },
  data() {
    return {
      loadedSentReceived: false,
      dataSentReceived: {
        labels: [],
        datasets: [
          {
            label: 'Wysłane',
            data: new Array(12).fill(1),
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Dostarczone',
            data: new Array(12).fill(1),
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      },
      loadedPackagePerShipper: false,
      dataPackagePerShipper: {
        labels: Array.from({ length: 5 }).fill('Spedytor'),
        datasets: [
          {
            label: 'default',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(0,100,0)',
              'rgb(0,0,128)',
              'rgb(128,0,128)',
              'rgb(210,105,30)',
              'rgb(240,255,240)',
              'rgb(201, 203, 207)',
            ],
          },
        ],
      },
    }
  },
  methods: {
    handleSentReceivedPerMonth(data) {
      const states = Array.from(data.map((d) => d.state))

      this.dataSentReceived.labels = states
      this.dataSentReceived.datasets[0].data = states.map((state) => {
        const stateObj = data.find((obj) => obj.state == state)
        return stateObj.dispatch
      })
      this.dataSentReceived.datasets[1].data = states.map((state) => {
        const stateObj = data.find((obj) => obj.state == state)
        return stateObj.arrival
      })
      this.loadedSentReceived = true
    },
    handlePackagesPerShipper(data) {
      const shippers = Array.from(data.map((d) => d.shipper))
      this.dataPackagePerShipper.labels = shippers
      this.dataPackagePerShipper.datasets[0].data = shippers.map((shipper) => {
        const shipperObj = data.find((obj) => obj.shipper == shipper)
        return shipperObj.shippedAmount
      })
      this.loadedPackagePerShipper = true
    },
    loadDataVoivodeship() {
      fetch('https://my.api.mockaroo.com/voivodeship_stats.json?key=3fdd6730')
        .then((data) => data.json())
        .then((data) => {
          this.handleSentReceivedPerMonth(data)
        })
    },
    loadDataShipper() {
      fetch('https://my.api.mockaroo.com/dispatch_data.json?key=3fdd6730')
        .then((data) => data.json())
        .then((data) => {
          this.handlePackagesPerShipper(data)
        })
    },
  },
}
</script>
