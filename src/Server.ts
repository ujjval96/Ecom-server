import express from "express";
import cors from "cors";

import connectDb from "./utils/connect";
import router from "./router"

export default class Server {
  private app: express.Application;

  constructor(){
    this.app = express();
    this.addConf();
    this.setRoutes()
  }

  addConf() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
  }

  setRoutes() {
    this.app.get("/health-check", (req,res) => res.send("Welcome"))
    this.app.use("/api",router);
  }

  run() {
    const port = process.env.PORT || 8000;
    connectDb(process.env.URL)
    .then(() => {
      this.app.listen(port, () => console.log(`Application started at ${port}`));
    });
  }
}

