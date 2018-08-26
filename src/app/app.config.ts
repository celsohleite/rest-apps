import { MongoClient } from "mongodb";
import { MONGODB_CONFIG } from "./../enum/eparam";
import * as mongoose from "mongoose";
(mongoose as any).Promise = global.Promise;
export class AppConfig {
  public mongoDB() {
    let connect: mongoose.Connection = mongoose.createConnection(
      MONGODB_CONFIG.URL.concat(MONGODB_CONFIG.BASE_DADOS)
    );
    //MONGODB_CONFIG.URL.concat(MONGODB_CONFIG.BASE_DADOS)
    return connect;
  }
  static APP_SERVER_USE_HTTP2: string =
    process.env.AW_APP_SERVER_USE_HTTP2 || "false";
}

Object.seal(AppConfig);
