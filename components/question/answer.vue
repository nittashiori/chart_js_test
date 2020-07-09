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
  },
  data() {
    return {
      id: Number(this.data.id),
    }
  },
  computed: {
    link() {
      return this.id + 1
    },
  },
}
</script>
