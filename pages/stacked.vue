<template>
  <div class="container">
    <h1 class="title">vue-chartjsで帯グラフ</h1>
    <div class="graph">
      <stacked-chart />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>設問</th>
          <th>回答分析</th>
          <th>否定的回答</th>
          <th>肯定的回答</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>職場の仕事の方針に自分の意見を反映出来る</td>
          <td>グラフが入る</td>
          <td>50%</td>
          <td>50%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import StackedChart from '@/components/StackedChart.vue'

export default {
  components: {
    StackedChart,
  },
}
</script>

<style lang="scss">
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
.table {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  th,
  td {
    padding: 10px;
  }
  th {
    background: #eee;
  }
}
</style>
