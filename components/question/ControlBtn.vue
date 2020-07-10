<template>
  <ul class="control-btn-area">
    <li>
      <nuxt-link :to="`${backnum}`">前の画面に戻る</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/questions">最初の画面に戻る</nuxt-link>
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
  },
  data() {
    return {
      id: Number(this.data.id),
    }
  },
  computed: {
    backnum() {
      return this.id === 1 ? '/questions' : this.id - 1
    },
  },
}
</script>

<style lang="scss" scoped>
.control-btn-area {
  width: 960px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    width: 100%;
    max-width: 200px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
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
