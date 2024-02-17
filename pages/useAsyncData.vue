<script setup>
const { data } = await useAsyncData("nuxt3_test", () => {
  return $fetch("https://api.nuxt.com/modules");
});
const refreshData = () => {
  refreshNuxtData("nuxt3_test");
};
</script>

<template>
  <h1>useAsyncData Test</h1>
  <button @click="refreshData">refresh</button>
  {{ data }}
</template>

<style lang="scss" scoped></style>
