import { Router } from "express";
import { getUsers } from "../controller/user.controller.js";

class UserRouter {
  constructor() {
    this.router = Router();
    this.init();
  }
  init() {
    // api/users
    this.router.get("/", getUsers, (req, res) => {
      return res.status(200).json({
        users: res.users,
      });
    });
  }
}

export default new UserRouter().router;

// const router = Router();

// import * as controller from "../controller/api.controller.js";

// // Get Method
// router.route("/here").get(controller.getAll);

// router.route("/user/:username").get(controller.getUser)
// router.route("/generateOTP").get(controller.generateOTP)
// router.route("/verifyOTP").get(controller.verifyOTP)
// router.route("/createResetSession").get(controller.createResetSession)

// POST
// router.route(controller.register).post((req, res)=> res.json('register route')),

// router.route("/registerMail").post() //send the mail
// router.route("/authenticate").post((req, res)=> res.end( ))
// router.route("/login").post(controller.verifyUser,controller.login)
// router.route("/register").post(controller.register)

// PUT method
// router.route('/updateuser').put(controller.updateUser)
// router.route('/resetPassword').put(controller.resetPassword)

// export default router;
