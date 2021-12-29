import { NextFunction, Request, Response } from "express";
import userRepository from "../../repository/user/Repository";

export default class UserController {
  static instance: UserController;

  static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      await userRepository.getInstance().createUser(req.body);
      res.status(201).send({ message: "User Created" });
    } catch (err) {
      next(err);
    }
  }

  async logIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const user = await userRepository.getInstance().getUser({ username });
      if (!user) {
        throw new Error("User Not found.");
      }
      if (password !== user.password) {
        throw new Error("Invalid Credentials.");
      }
      res.status(200).send({ message: "User Login" })
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}