import questionsList from '~/assets/data/questionslist.json'

export const state = () => ({
  items: questionsList.items,
  default: questionsList.default,
  error: questionsList.error,
})

export const getters = {
  getQuestions(state) {
    return state.items
  },
  default(state) {
    return state.default
  },
  error(state) {
    return state.error
  },
}
