<template>
  <div class="container">
    <h1 class="title">vue-chartjsで100%積み上げ棒グラフ</h1>
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link to="/">戻る</nuxt-link>
      </li>
    </ul>
    <table class="table">
      <thead>
        <tr>
          <th data-title="no">No</th>
          <th data-title="question">設問</th>
          <th data-title="analysis">回答分析（単位：%）</th>
          <th data-title="negative">否定的<br />回答</th>
          <th data-title="positive">肯定的<br />回答</th>
        </tr>
      </thead>
      <tbody>
        <table-list v-for="list in lists" :key="list.id" :arg="list" />
      </tbody>
    </table>
  </div>
</template>

<script>
import StackedData from '@/store/stacked_data.json'

export default {
  asyncData(context) {
    return {
      lists: StackedData.lists,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
.table {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  th {
    background: #eee;
  }
  th[data-title='no'] {
    width: 30px;
  }
  th[data-title='question'] {
    width: 320px;
  }
  th[data-title='negative'],
  th[data-title='positive'] {
    width: 80px;
  }
  td[data-title='question'] {
    text-align: left;
  }
  td[data-title='analysis'] {
    width: 500px;
    padding: 0 5px 0 0;
  }
}
</style>
