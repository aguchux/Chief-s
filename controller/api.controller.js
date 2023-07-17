import { Router } from "express";

class ApiController {
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/here", () => {
      res.send("Hello World");
    });
    this.router.post("/", (req, res) => {
      res.send("Hello World");
    });
  }
}

export default new ApiController().router;
