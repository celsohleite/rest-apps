import * as mongoose from "mongoose";

export interface ICliente extends mongoose.Document {
  nome: string;
  email: string;
  telefone: string;
  dataInclusao: Date;
}
export const ClienteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  _id: Number
});
const Cliente = mongoose.model<ICliente>("Cliente", ClienteSchema);
export default Cliente;
