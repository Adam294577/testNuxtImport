export default defineEventHandler((event) => {
    console.log('serve middleware:',event.node.req.url);
  });
  