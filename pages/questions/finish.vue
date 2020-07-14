<template>
  <div class="container">
    <page-title>
      お疲れさまでした。診断は終わりです。
    </page-title>
    <nuxt-link class="text-link" to="/">トップに戻る</nuxt-link>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
  component: {
    PageTitle,
  },
}
</script>

<style lang="scss"></style>
