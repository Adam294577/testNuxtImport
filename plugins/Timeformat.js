import dayjs from "dayjs";

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.directive("todayIs", {
    mounted(el, binding) {
      const today = dayjs(binding.value).format("YYYY/MM/DD");
      el.innerText = today;
    },
  });
});
