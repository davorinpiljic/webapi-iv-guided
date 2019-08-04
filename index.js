// it's recommended to load configuration for .env as early as possible
require("dotenv").config();
const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.get("/", async (req, res) => {
  try {
    const shoutouts = await db("shoutouts");
    const messageOfTheDay = process.env.MOTD || "Hello World!"; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error("\nERROR", error);
    res.status(500).json({ error: "Cannot retrieve the shoutouts" });
  }
});

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// const port = process.env.PORT ? process.env.PORT : 4000;
