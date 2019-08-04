// it's recommended to load configuration for .env as early as possible
require("dotenv").config();
const server = require("./api/server.js");

const port = process.env.PORT ? process.env.PORT : 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
