<script setup>
const userName = ref("ringo");
const store = CounterStore();
const { $welcome } = useNuxtApp();
</script>
<template>
  <h1>{{ $welcome(userName, store.storeName) }}</h1>
</template>

<style lang="scss" scoped></style>
