import dotenv from "dotenv";
import http from "http";
import ConnectTODB from "./config/database.js";
import app from "./app.js";
dotenv.config();

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  ConnectTODB();
});
