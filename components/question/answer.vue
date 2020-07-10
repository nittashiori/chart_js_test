<template>
  <ul class="select-area">
    <li>
      <nuxt-link :to="`${link}`">とてもそう思う</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="`${link}`">そう思う</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="`${link}`">少しそう思う</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="`${link}`">あまりそう思わない</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="`${link}`">そう思わない</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="`${link}`">まったくそう思わない</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      require: true,
      default() {
        return this.$store.getters['questions/error']
      },
    },
    jsonNum: {
      type: Number,
      require: true,
      default() {
        return this.$store.getters['questions/getQuestions'].length
      },
    },
  },
  data() {
    return {
      id: Number(this.data.id),
    }
  },
  computed: {
    link() {
      return this.id >= this.jsonNum ? 'finish' : this.id + 1
    },
  },
}
</script>

<style lang="scss" scoped>
.select-area {
  width: 100%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  > li:not(:first-child) {
    margin-left: 16px;
  }

  a {
    display: block;
    padding: 12px;
  }

  a:hover {
    background: #eee;
  }
}
</style>
