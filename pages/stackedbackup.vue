<template>
  <div class="container">
    <page-title>
      vue-chartjsで帯グラフ
    </page-title>
    <div class="graph">
      <stacked-chart-back-up />
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import StackedChartBackUp from '@/components/StackedChartBackUp.vue'
export default {
  components: {
    PageTitle,
    StackedChartBackUp,
  },
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>
