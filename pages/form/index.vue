<template>
  <div class="container">
    <page-title>
      ユーザー登録
    </page-title>
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link to="/">戻る</nuxt-link>
      </li>
    </ul>
    <form-register />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import FormRegister from '@/components/form/FormRegister.vue'

export default {
  component: {
    PageTitle,
    FormRegister,
  },
  data() {
    return {
      mail: '',
      name: '',
      department: '',
      category: '',
      gender: '',
    }
  },
}
</script>

<style lang="scss"></style>
