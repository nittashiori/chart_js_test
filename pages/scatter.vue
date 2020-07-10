<template>
  <div class="container">
    <h1 class="title">vue-chartjsで散布図</h1>
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link to="/">戻る</nuxt-link>
      </li>
    </ul>
    <section>
      <!-- <h2>目標関数1：業務目標に納得でき、将来に希望が持てる</h2> -->
      <p>x軸が相関係数の数値、y軸がスコアの数値</p>
      <div class="graph">
        <scatter-chart />
      </div>
      <p>
        回答者分の項目（多くて1000人?）をテーブルに追加できないので、別ページで表を出す。<br /><br />
        エクセルの「2.分析版表記イメージ」の散布図だとx軸に設問ごとの相関係数を表記してるが、<br />
        設問の数によっては入り切らない可能性がでてくる。（10問以上はきつい）
      </p>
      <table class="table">
        <thead>
          <tr>
            <th data-title="question">設問</th>
            <th>相関係数</th>
            <th>平均スコア</th>
            <!-- <th>回答者1</th>
            <th>回答者2</th>
            <th>回答者3</th>
            <th>回答者4</th>
            <th>回答者5</th>
            <th>回答者100</th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title="question">
              目的関数：業務目標に納得し、将来に向けて希望が持てる
            </td>
            <td>-</td>
            <td>4</td>
            <!-- <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>3</td> -->
          </tr>
          <tr>
            <td data-title="question">
              従属関数：ストレッチした業務目標は全力＋αを出し尽くせば達成可能だと思う
            </td>
            <td>-0.54</td>
            <td>1.8</td>
          </tr>
          <tr>
            <td data-title="question">
              従属関数：最低限達成しなければいけない業務目標は、十分達成可能だと思う
            </td>
            <td>0.59</td>
            <td>3.4</td>
          </tr>
          <tr>
            <td data-title="question">
              従属関数：業務テーマや業務目標を決める過程に関与している
            </td>
            <td>-0.42</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td data-title="question">
              従属関数：職場の仕事の方針に自分の意見を反映出来る
            </td>
            <td>-0.56</td>
            <td>3.5</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import ScatterChart from '@/components/ScatterChart.vue'

export default {
  components: {
    ScatterChart,
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
p {
  margin: 40px 0;
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
  th[data-title='question'],
  td[data-title='question'] {
    width: 800px;
  }
  td[data-title='question'] {
    text-align: left;
  }
}
</style>
