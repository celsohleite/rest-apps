"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ClienteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: Number
});
const Cliente = mongoose.model("Cliente", exports.ClienteSchema);
exports.default = Cliente;
//# sourceMappingURL=icliente.js.map