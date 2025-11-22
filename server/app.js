
import express from "express";
import UserRouter from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
console.log("Allowed Origin:", process.env.CLIENT_SIDE_URL);


app.use(
  cors({
    origin: process.env.CLIENT_SIDE_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/users", UserRouter);

export default app;
