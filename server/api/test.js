export default defineEventHandler((event) => {
  const data = {
    age: 27,
    name: "ringo",
  };
  return { data };
});
