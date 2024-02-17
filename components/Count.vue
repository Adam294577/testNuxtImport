<script setup>
const { count, addFn } = useAddFn();
</script>

<template>
  <h1 style="color: #f00">計數器:{{ count }}</h1>
  <button @click="addFn">add</button>
</template>

<style lang="scss" scoped></style>
