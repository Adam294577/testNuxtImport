export default defineNuxtPlugin((nuxtapp) => {
  return {
    provide: {
      welcome: (user, n) => `welcome ${user}，已點擊了 ${n}次`,
    },
  };
});
