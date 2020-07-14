<template>
  <button class="button-default" disabled="disabled"><slot /></button>
</template>

<style lang="scss" scoped>
.button-default {
  display: block;
  width: 100%;
  max-width: 320px;
  padding: 12px;
  margin: 40px auto;
  background: $primary-color;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  transition: all 0.3s $ease;
  &:hover {
    background: darken($primary-color, 10%);
  }
}
.button-default:disabled {
  background: #ccc;
  cursor: default;
}
</style>
