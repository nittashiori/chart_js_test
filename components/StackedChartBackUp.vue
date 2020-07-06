<script>
import { HorizontalBar } from 'vue-chartjs'
export default {
  extends: HorizontalBar,
  type: 'horizontalBar',
  data() {
    return {
      chartdata: {
        labels: ['Foo', 'Bar'],
        datasets: [
          {
            label: 'bad',
            data: [5, 25],
            backgroundColor: 'rgba(244, 143, 177, 0.6)',
          },
          {
            label: 'better',
            data: [15, 10],
            backgroundColor: 'rgba(255, 235, 59, 0.6)',
          },
          {
            label: 'good',
            data: [10, 8],
            backgroundColor: 'rgba(100, 181, 246, 0.6)',
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          stacked100: { enable: true },
        },
      },
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
