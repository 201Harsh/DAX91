const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const port = process.env.PORT || 5000;
const http = require("http");

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
