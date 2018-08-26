"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
class AppConfig {
    mongoDB() {
        let connect = mongoose.createConnection("http://localhost:27017/aplicativos");
        return connect;
    }
}
exports.default = AppConfig;
Object.seal(AppConfig);
//# sourceMappingURL=app.config.js.map