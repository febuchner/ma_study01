<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: "ResultBarChart",
  components: {Bar},
  data() {
    return {
      chartData: {
        labels: ['female gender gap'],
        datasets: [
          {
            label: 'AI',
            backgroundColor: '#ced4da',
            data: [0.02992037075271492]
          },
          {
            label: 'you',
            backgroundColor: '#0d6efd',
            data: [-0.2]
          },
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>

</style>