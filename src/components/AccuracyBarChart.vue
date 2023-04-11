<template>
  <Bar
      id="accuracy-bar-chart"
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
  name: "AccuracyBarChart",
  components: {Bar},
  props: [
    'acc_you',
    'acc_litw',
  ],
  data() {
    return {
      chartData: {
        labels: ["Total accuracy", "Female accuracy", "Male accuracy"],
        datasets: [
          {
            label: 'AI',
            backgroundColor: '#ced4da',
            data: [89.03, 89.97, 88.15],
          },
          {
            label: 'You',
            backgroundColor: '#0d6efd',
            data: this.acc_you,
          },
          {
            label: 'Average LabintheWild users',
            backgroundColor: '#99BA6A',
            data: this.acc_litw,
          },
        ]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function(value, index, ticks) {
                return value+'%';
              }
            }
          }
        }
      }
    }
  },
}
</script>

<style scoped>

</style>