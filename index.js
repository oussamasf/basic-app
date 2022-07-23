const http = require("http");
const server = http.createServer();
require("dotenv").config();

const PORT = process.env.PORT;

server.on("request", (req, res) => {
  res.end("hello there");
});

server.listen(PORT, () => {
  console.log("Listening on ", PORT);
});
