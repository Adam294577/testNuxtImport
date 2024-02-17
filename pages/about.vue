<script setup>
// useHead({
//  title: "關於我們 About - Nuxt3 高效入門全攻略",
//  meta: [
//    { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
//    { property: "og:url", content: "http://localhost:3000/about" },
//    { property: "og:image", content: "http://localhost:3000/share.jpg" },
//    { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//    { property: "og:description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//  ],
// });
// useSeoMeta({
//   ogTitle: "關於 nuxt",
//   description : "測試 useSeometa",
//   ogDescription: "測試 useSeometa",
//   title: "nuxt練習 - 關於我們的標題",

// })

const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about");
console.log(res.data.value);
useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});

// local 載入 cdn
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
    },
  ],
});



</script>

<template>
  <AboutHeader />
  <div><h1>about</h1></div>
  <AboutFooter />
</template>

<style lang="scss" scoped></style>
