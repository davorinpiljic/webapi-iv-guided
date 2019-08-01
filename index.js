const server = require('./api/server.js');

const port = process.env.PORT ? process.env.PORT : 4000

server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
