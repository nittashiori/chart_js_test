<template>
  <div class="container">
    <h1 class="title">お疲れさまでした。診断は終わりです。</h1>
    <nuxt-link class="text-link" to="/">トップに戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'reject-direct',
}
</script>

<style lang="scss"></style>
