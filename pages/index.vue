<template>
  <div class="container">
    <h1 class="title">vue-chartjsで棒グラフ</h1>
    <div class="graph">
      <BarChart :chartdata="chartdata" :options="options" />
    </div>
  </div>
</template>

<script>
// pluginに登録したのでimportしなくて良い
// import BarChart from '@/components/BarChart.vue'
import Data from '@/data/bar.json'

export default {
  // components: {
  //   BarChart,
  // },
  data() {
    return {
      chartdata: {
        labels: Data.data.map((data) => data.month),
        datasets: [
          {
            label: ['Data One'],
            backgroundColor: '#f87979',
            data: Data.data.map((data) => data.sale),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  margin: 30px auto;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
