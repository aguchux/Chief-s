import express from "express";
import cors from "cors";
import morgan from "morgan";

import connect from "./db/connec.js";
import apiRouter from "./router/api.router.js";
import userRouter from "./router/user.router.js";

// import router from "./router/route.js";

// Enviromental Variable are available
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(express.json());
server.use(morgan("tiny"));
server.use(cors());
server.disable("x-powered-by");

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.use("/api", apiRouter);
server.use("/api/users", userRouter);

const port = process.env.PORT || 8000;
connect()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server:  http://localhost:${port} connected successfully`);
    });
  })
  .catch((error) => {
    console.log("Invalid Datbase connectionn ....!");
  });
