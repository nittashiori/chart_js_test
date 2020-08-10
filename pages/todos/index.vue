<template>
  <div class="container">
    <page-title>
      Vuex練習ページ
    </page-title>
    <div class="wrap">
      <ul>
        <li v-for="todo in todos" :key="todo">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
      </ul>
      <input
        class="input"
        type="text"
        placeholder="タスクを追加"
        @keyup.enter="addTodo"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import PageTitle from '@/components/PageTitle.vue'
export default {
  component: {
    PageTitle,
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  margin: 40px auto;
  text-align: center;
}
p {
  margin: 20px 0;
}
.input {
  display: block;
  width: 300px;
  margin: 10px auto;
  padding: 10px 15px;
  border: 1px solid #ccc;
}
.done {
  text-decoration: line-through;
}
</style>
