import { Router } from "express";

import UserController from "./Controller";

const router = Router();
const userController = UserController.getInstance();

router.route("/register")
  .post(userController.createUser);

router.route("/login")
  .post(userController.logIn);



export default router;