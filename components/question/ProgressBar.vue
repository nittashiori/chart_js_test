<template>
  <p class="progressbar">{{ count }}/{{ jsonMaxNum }}</p>
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
    jsonMaxNum: {
      type: Number,
      require: true,
      default() {
        return this.$store.getters['questions/getQuestions'].length
      },
    },
  },
  data() {
    return {
      count: Number(this.data.id),
    }
  },
}
</script>
