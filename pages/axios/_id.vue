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
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PageTitle from '@/components/PageTitle.vue'
export default {
  component: {
    PageTitle,
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id
      )
      .then((response) => (this.posts = response))
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
