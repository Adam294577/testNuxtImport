export function useAddFn() {
  const count = ref(207);
  const addFn = () => {
    count.value++;
  };
  return {
    count,
    addFn,
  };
}
