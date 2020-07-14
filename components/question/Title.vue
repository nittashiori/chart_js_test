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
  mounted() {
    setTimeout(() => {
      this.isOk = true
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>
.title {
  margin: 40px auto;
  font-size: $fts-heading;
  letter-spacing: 1px;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-44%);
}
</style>
