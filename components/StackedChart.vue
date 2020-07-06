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
        ],
      },
      options: {
        responsive: false,
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
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
