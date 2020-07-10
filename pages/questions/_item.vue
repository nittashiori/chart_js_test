<template>
  <div class="container">
    <div class="question-area">
      <Title :data="question" />
      <answer :data="question" />
      <progress-bar :data="question" />
    </div>
    <control-btn :data="question" />
  </div>
</template>

<script>
import Title from '@/components/question/Title.vue'
import answer from '@/components/question/answer.vue'
import ProgressBar from '@/components/question/ProgressBar.vue'
import ControlBtn from '@/components/question/ControlBtn.vue'

export default {
  transition: 'fade',
  component: {
    Title,
    answer,
    ProgressBar,
    ControlBtn,
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

<style lang="scss">
.question-area {
  width: 960px;
  margin: 40px auto;
  padding: 0 0 40px;
  border-bottom: 1px solid $border-color;
}
</style>
