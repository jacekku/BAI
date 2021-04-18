<template>
  <section>
    <Navbar></Navbar>
    <div class="main">
      <h1>statystyki</h1>
      <h2>Ilość paczek wysłana i otrzymana w poszczególnych miesiącach</h2>
      <SentReceivedPerMonth
        :data="dataSentReceived"
        :loaded="loadedSentReceived"
      />
      <h2>Ilość paczek przetworzona przez spedytorów</h2>
      <PackagePerShipper
        :data="dataPackagePerShipper"
        :loaded="loadedPackagePerShipper"
      />
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
    this.loadData()
  },
  data() {
    return {
      loadedSentReceived: false,
      dataSentReceived: {
        labels: [
          'Styczeń',
          'Luty',
          'Marzec',
          'Kwiecień',
          'Maj',
          'Czerwiec',
          'Lipiec',
          'Sierpień',
          'Wrzesień',
          'Październik',
          'Listopad',
          'Grudzień',
        ],
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
            label: 'ASDDD',
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
      const mappedData = data
        .map((data) => {
          return {
            dispatch: new Date(data.dispatch).getMonth(),
            arrival: new Date(data.arrival).getMonth(),
          }
        })
        .reduce(
          (acc, current) => {
            acc.dispatchCount[current.dispatch] += 1
            acc.arrivalCount[current.arrival] += 1
            return acc
          },
          {
            dispatchCount: new Array(12).fill(0),
            arrivalCount: new Array(12).fill(0),
          }
        )
      this.dataSentReceived.datasets[0].data = mappedData.dispatchCount
      this.dataSentReceived.datasets[1].data = mappedData.arrivalCount
      this.loadedSentReceived = true
    },
    handlePackagesPerShipper(data) {
      const mappedData = data.reduce(
        (acc, current) => {
          acc.shippers.add(current.shipper)
          acc.data[current.shipper] = isNaN(acc.data[current.shipper])
            ? 0
            : acc.data[current.shipper] + 1
          return acc
        },
        {
          shippers: new Set(),
          data: {},
        }
      )
      this.dataPackagePerShipper.labels = Array.from(mappedData.shippers)
      this.dataPackagePerShipper.datasets[0].data = Array.from(
        mappedData.shippers,
        (shipper) => mappedData.data[shipper]
      )
      this.loadedPackagePerShipper = true
    },
    loadData() {
      fetch('https://my.api.mockaroo.com/dispatch_data.json?key=3fdd6730')
        .then((data) => data.json())
        .then((data) => {
          this.handleSentReceivedPerMonth(data)
          this.handlePackagesPerShipper(data)
        })
    },
  },
}
</script>