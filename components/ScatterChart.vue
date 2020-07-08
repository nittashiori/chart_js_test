<script>
import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  type: 'scatter',
  data() {
    return {
      chartdata: {
        label: 'Scatter Dataset',
        datasets: [
          {
            label: 'Scatter Dataset',
            backgroundColor: '#f87979',
            data: [
              {
                // label: 'A',
                x: -0.54,
                y: 1.8,
              },
              {
                // label: 'B',
                x: 0.59,
                y: 3.4,
              },
              {
                // label: 'C',
                x: -0.42,
                y: 3.7,
              },
              {
                // label: 'D',
                x: -0.56,
                y: 3.5,
              },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
              ticks: {
                beginAtZero: true,
                min: -1,
                max: 1,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 6,
              },
            },
          ],
        },
        plugins: {
          datalabels: {
            display: false,
          },
        },
      },
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
