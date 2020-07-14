<template>
  <div class="container">
    <page-title>
      vue-chartjsで棒グラフ
    </page-title>
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link to="/questions">診断ページ</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/form">ユーザー登録</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/stacked">100%積み上げ棒グラフ</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/scatter">散布図</nuxt-link>
      </li>
    </ul>
    <div class="graph">
      <BarChart :chartdata="chartdata" :options="options" />
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Data from '@/assets/data/bar.json'

export default {
  components: {
    PageTitle,
  },
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

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
.nav {
  width: 800px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  &__item:not(:first-child) {
    margin: 0 0 0 40px;
  }
}

.graph {
  max-width: 920px;
  margin: auto;
}
</style>
