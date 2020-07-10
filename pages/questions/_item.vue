<template>
  <div class="container">
    <Title :data="question" />
    <answer :data="question" />
  </div>
</template>

<script>
import Title from '@/components/question/Title.vue'
import answer from '@/components/question/answer.vue'

export default {
  transition: 'fade',
  component: {
    Title,
    answer,
  },
  computed: {
    question() {
      const question = this.$store.getters['questions/getQuestions'].filter(
        (item) => {
          return item.id === this.$route.params.item
        }
      )
      return question[0]
    },
  },
  head() {
    return {
      title: this.$route.params.item,
    }
  },
}
</script>

<style lang="scss"></style>
