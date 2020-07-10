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

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
</style>
