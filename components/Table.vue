<template>
  <table class="table">
    <thead>
      <tr>
        <th data-title="no">No</th>
        <th data-title="question">設問</th>
        <th data-title="analysis">回答分析</th>
        <th data-title="negative">否定的回答</th>
        <th data-title="positive">肯定的回答</th>
      </tr>
    </thead>
    <tbody>
      <table-list v-for="list in lists" :key="list.id" :arg="list" />
    </tbody>
  </table>
</template>

<script>
import TableList from '@/components/TableList.vue'

export default {
  components: {
    TableList,
  },
}
</script>

<style lang="scss">
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
  th[data-title='question'] {
    width: 480px;
  }
}
</style>
