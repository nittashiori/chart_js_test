<template>
  <tr>
    <td data-title="no">{{ arg.id }}</td>
    <td data-title="question">
      {{ arg.title }}
    </td>
    <td data-title="analysis">
      <stacked-chart :chartdata="chartdata" :options="options" />
    </td>
    <td data-title="negative">{{ arg.negative }}%</td>
    <td data-title="positive">{{ arg.positive }}%</td>
  </tr>
</template>

<script>
import StackedData from '@/store/stacked_data.json'

export default {
  props: {
    arg: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartdata: {
        datasets: [
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[0].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[0].num
            ),
            backgroundColor: '#ff7f7f',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[1].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[1].num
            ),
            backgroundColor: '#ffa8a8',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[2].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[2].num
            ),
            backgroundColor: '#ffc6c6',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[3].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[3].num
            ),
            backgroundColor: '#c1e0ff',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[4].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[4].num
            ),
            backgroundColor: '#a8d3ff',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[5].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[5].num
            ),
            backgroundColor: '#84c1ff',
          },
        ],
      },
      options: {
        responsive: true,
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        animation: {
          duration: 0,
        },
        plugins: {
          datalabels: {
            color: '#222',
            align: 'center',
            font: {
              weight: 'bold',
              size: 14,
            },
            formatter: (_value, context) => {
              const data = context.chart.data
              const { datasetIndex, dataIndex } = context
              return (
                // `${data.calculatedData[datasetIndex][dataIndex]}` + '\n' + `%`
                `${data.calculatedData[datasetIndex][dataIndex]}`
              )
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
                // beginAtZero: true,
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
}
</script>
