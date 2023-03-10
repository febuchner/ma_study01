<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import {useStore} from "@/stores/store";
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  setup() {
    const store = useStore();
    return {store};
  },
  name: "ResultBarChart",
  components: {Bar},
  props: [
    'chartlabel',
    'data_AI',
    'data_you',
    'data_litw',
  ],
  data() {
    return {
      chartData: {
        labels: [this.chartlabel],
        datasets: [
          {
            label: 'AI',
            backgroundColor: '#ced4da',
            data: [this.data_AI],
          },
          {
            label: 'You',
            backgroundColor: '#0d6efd',
            data: [this.data_you],
          },
          {
            label: 'Average LabintheWild users',
            backgroundColor: '#99BA6A',
            data: [this.data_litw],
          },
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
}
</script>

<style scoped>

</style>