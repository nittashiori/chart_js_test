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
            backgroundColor: '#F6AD3C',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[1].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[1].num
            ),
            backgroundColor: '#A64A97',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[2].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[2].num
            ),
            backgroundColor: '#AACF52',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[3].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[3].num
            ),
            backgroundColor: '#1f3375',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[4].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[4].num
            ),
            backgroundColor: '#A64A97',
          },
          {
            label: StackedData.lists.map(
              (lists) => this.arg.object_chart[5].label
            ),
            data: StackedData.lists.map(
              (lists) => this.arg.object_chart[5].num
            ),
            backgroundColor: '#ef3992',
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
            color: '#fff',
            align: 'center',
            font: {
              weight: 'bold',
              size: 14,
            },
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
}
</script>
