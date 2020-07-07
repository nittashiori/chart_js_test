<script>
import { HorizontalBar } from 'vue-chartjs'
export default {
  extends: HorizontalBar,
  type: 'horizontalBar',
  props: {
    chartdata: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.$refs.canvas.height = 100
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
