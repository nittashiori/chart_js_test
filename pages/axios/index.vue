<template>
  <div class="container">
    <page-title>
      Axios練習ページ
    </page-title>
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link to="/">戻る</nuxt-link>
      </li>
    </ul>
    <div class="wrap">
      <p>{{ ip }}</p>
      <button class="button" @click="getIp">IPアドレスを取得</button>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
  component: {
    PageTitle,
  },
  data() {
    return {
      ip: '0.0.0.0',
    }
  },
  methods: {
    async getIp() {
      // http://~内を書き換えれば他のデータを取ってこれる
      this.ip = await this.$axios.$get('http://icanhazip.com')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  margin: 40px auto;
  text-align: center;
}
p {
  margin: 20px 0;
}
.button {
  display: block;
  margin: auto;
  padding: 10px 20px;
  border: 1px solid #35495e;
  border-radius: 4px;
}
</style>
