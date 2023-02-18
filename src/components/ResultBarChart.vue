<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />

  {{gaps_position}}
</template>

<script>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: "ResultBarChart",
  components: {Bar},
  props: [
    'chartlabel',
    'data_AI',
    'gaps_position',
  ],
  data() {
    return {
      chartData: {
        labels: [this.chartlabel],
        datasets: [
          {
            label: 'AI',
            backgroundColor: '#ced4da',
            data: [this.data_AI]
          },
          {
            label: 'you',
            backgroundColor: '#0d6efd',
            data: [this.data_you]
          },
          {
            label: 'labinthewild users',
            backgroundColor: '#99BA6A',
            data: [1.0]
          },
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  computed: {
    data_you: {
      get() {
        // TODO: fix this to be able to get gap by position in array
        return this.store.bias.gap[this.gaps_position];
      },
      set(value) {
      },
    },
  },
}
</script>

<style scoped>

</style>