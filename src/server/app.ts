import { AppConfig } from "./../app/app.config";
import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";

class App extends AppConfig {
  public app: express.Application;
  private morgan: morgan.Morgan;

  constructor() {
    super();
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.app
      .route("/")
      .get((req, res) => res.status(200).json({ message: "teste" }));

    console.log("banco de dados" + this.mongoDB());
  }
}

export default new App();
