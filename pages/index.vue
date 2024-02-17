<script setup>
const store = CounterStore();
const { storeName, nowTimeIs } = storeToRefs(store);
const getApi = async () => {
  const res = await fetch("/api/test").then((res) => {
    res.json();
  });
  console.log(res);
};

// const {data} = await useFetch("https://api.nuxt.com/modules");

const { data } = await useFetch("https://api.nuxt.com/modules", {
  onRequest({ request, options }) {
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer token`;
    console.log("1", options.headers);
  },
  onRequestError({ request, options, error }) {
    // 處理 request 錯誤
  },
  onResponse({ request, response, options }) {
    // 處理回傳資料
    return response._data;
  },
  onResponseError({ request, response, options }) {
    // 處理 response 錯誤
  },
});
</script>
<template>
  <div>首頁</div>
  <!-- {{ data }} -->
  <button @click="getApi">get hello api</button>
  <h1>
    測試store {{ storeName }}
    <button @click="store.handstorekey">store++</button>
  </h1>
  <h2>
    測試nuxtplugin方法
    <LoginMsg />
  </h2>
  <Count />
  <h3>現在時間: <span v-todayIs="nowTimeIs"></span></h3>
  <VCalendar borderless />
  <div></div>
  <nuxt-link to="/about">前往About</nuxt-link>
  <nuxt-link to="/User">前往User</nuxt-link>
  <nuxt-link to="/useAsyncData">前往AsyncData</nuxt-link>
  <nuxt-link to="/MultApiTest">前往多API的Data</nuxt-link>
  <span></span>
</template>

<style lang="scss" scoped></style>
