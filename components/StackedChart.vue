<script>
import { HorizontalBar } from 'vue-chartjs'
export default {
  extends: HorizontalBar,
  type: 'horizontalBar',
  data() {
    return {
      chartdata: {
        labels: ['Store 1'],
        datasets: [
          {
            label: 'Orange',
            data: [3],
            backgroundColor: '#F6AD3C',
          },
          {
            label: 'Grape',
            data: [12],
            backgroundColor: '#A64A97',
            // ラベルを個別で指定
            // datalabels: {
            //   labels: {
            //     value: {
            //       color: '#fff',
            //     },
            //   },
            // },
          },
          {
            label: 'Melon',
            data: [2],
            backgroundColor: '#AACF52',
          },
          {
            label: 'BlueBerry',
            data: [4],
            backgroundColor: '#1f3375',
          },
          {
            label: 'Cherry',
            data: [8],
            backgroundColor: '#ef3992',
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        plugins: {
          datalabels: {
            color: '#fff',
            align: 'center',
            formatter: (_value, context) => {
              const data = context.chart.data
              const { datasetIndex, dataIndex } = context
              return `${data.calculatedData[datasetIndex][dataIndex]}%`
            },
          },
          stacked100: { enable: true },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.$refs.canvas.height = 100
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
