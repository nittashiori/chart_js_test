<template>
  <div class="container">
    <Title :data="question" />
    <answer :data="question" />
    <question-nav />
  </div>
</template>

<script>
import Title from '@/components/question/Title.vue'
import answer from '@/components/question/answer.vue'
import QuestionNav from '@/components/question/QuestionNav.vue'

export default {
  transition: 'fade',
  component: {
    Title,
    answer,
    QuestionNav,
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
.select-area {
  width: 960px;
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
    margin-left: 20px;
  }

  a {
    display: block;
    padding: 10px;
  }

  a:hover {
    background: #eee;
  }
}
</style>
