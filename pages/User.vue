<script setup>
definePageMeta({
  middleware: ["auth"],
});


// 另種載入meta方法
const res = await useFetch("https://vue-lessons-api.vercel.app/seo/user");

const title = computed(() => res.data.value.title);
const description = computed(() => res.data.value.description);
</script>

<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
    <div>
	<h1>USER</h1>
    </div>
</template>
<style lang="scss" scoped></style>
