"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app_config_1 = require("../app/app.config");
class App extends app_config_1.default {
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
exports.default = new App();
//# sourceMappingURL=app.js.map