import { AppConfig } from "./app/app.config";
import * as fs from "fs";
import "reflect-metadata";
import WebApi from "./application";

import AppLog from "./config/app.log";

let packageJson;
if (fs.existsSync("./package.json")) {
  packageJson = require("./package.json");
} else {
  packageJson = require("../package.json");
}

let port: number = Number.parseInt(AppConfig.APP_SERVER_PORT);

let useHTTP2: boolean =
  AppConfig.APP_SERVER_USE_HTTP2.indexOf("true") === 0 ? true : false;

let gp: WebApi = undefined;
gp = new WebApi(port, useHTTP2);
gp.run();
AppLog.info(
  `Iniciando - ${packageJson.description} v.${
    packageJson.version
  } - rodando na porta ${port}`
);
