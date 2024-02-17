<script setup>
// https://api.github.com/orgs/nuxt
// https://api.github.com/orgs/nuxt/repos
// const { data: org1 } = await useAsyncData("orgs", () => {
//   return $fetch("https://api.github.com/orgs/nuxt");
// });
// const { data: org2 } = await useAsyncData("orgs2", () => {
//   return $fetch("https://api.github.com/orgs/nuxt/repos");
// });
const [{ data: org1 }, { data: org2 }] = await Promise.all([
  useAsyncData("org1", () => $fetch("https://api.github.com/orgs/nuxt")),
  useAsyncData("org2", () => $fetch("https://api.github.com/orgs/nuxt/repos")),
]);
</script>
<template>
  <!-- <div>{{ org1 }}</div> -->
  <div>{{ org2 }}</div>
</template>

<style lang="scss" scoped></style>
