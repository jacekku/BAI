<template>
  <Chart v-if="loaded" :data="data" :options="options" :type="type" />
</template>

<script>
import Chart from 'vue-chartjs3'

export default {
  components: {
    Chart,
  },
  props: ['data', 'loaded'],
  data() {
    return {
      type: 'doughnut',
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>