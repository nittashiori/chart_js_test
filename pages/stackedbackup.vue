<template>
  <div class="container">
    <h1 class="title">vue-chartjsで帯グラフ</h1>
    <div class="graph">
      <stacked-chart-back-up />
    </div>
  </div>
</template>

<script>
import StackedChartBackUp from '@/components/StackedChartBackUp.vue'

export default {
  components: {
    StackedChartBackUp,
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
</style>
