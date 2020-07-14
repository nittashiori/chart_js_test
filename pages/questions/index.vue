<template>
  <div class="container">
    <page-title>
      診断ページ
    </page-title>
    <nuxt-link class="text-link" to="/questions/1">診断を始める</nuxt-link>
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
