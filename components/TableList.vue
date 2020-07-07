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
            label: 'とてもそう思う',
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[0].excellent
            ),
            backgroundColor: '#ff7f7f',
          },
          {
            label: 'そう思う',
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[1].great
            ),
            backgroundColor: '#ffa8a8',
          },
          {
            label: 'まぁそう思う',
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[2].good
            ),
            backgroundColor: '#ffc6c6',
          },
          {
            label: 'あまりそう思わない',
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[3].fair
            ),
            backgroundColor: '#c1e0ff',
          },
          {
            label: 'そう思わない',
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[4].poor
            ),
            backgroundColor: '#a8d3ff',
          },
          {
            label: 'まったくそう思わない',
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[5].bad
            ),
            backgroundColor: '#84c1ff',
          },
        ],
      },
      options: {
        responsive: true,
        tooltips: {
          enabled: false,
          titleFontSize: 0,
        },
        hover: {
          mode: null,
        },
        legend: {
          display: false,
        },
        animation: {
          duration: 0,
        },
        layout: {
          padding: {
            right: 5,
          },
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
