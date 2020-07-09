<template>
  <h1 class="title">
    <span>{{ data.name }}. </span>{{ data.description }}
  </h1>
</template>

<script>
export default {
  transition: 'fade',
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
      isOk: false,
    }
  },
  computed: {
    path() {
      return require(`~/assets/${this.data.id || 'nashi'}.png`)
    },
  },
  mounted() {
    setTimeout(() => {
      this.isOk = true
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-44%);
}
.title {
  margin: 40px auto;
}
</style>
