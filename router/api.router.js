import { Router } from "express";

class ApiRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", (req, res) => {
      res.send("Hello World API-Router - GET");
    });
    this.router.post("/", (req, res) => {
      res.send("Hello World API-Router - POST");
    });
  }
}

export default new ApiRouter().router;
