import { ICliente } from "./../module/model/icliente";

export default class ClienteData {
  public saveCliente(cliente: ICliente) {
    cliente.save((error: string, result: ICliente) => {
      if (error) {
        console.log(["Error"] + error);
      } else {
        return "salvo com sucesso";
      }
    });
  }

  public listCliente(cliente: ICliente) {
    cliente.model("Cliente").find((error: string, result: ICliente[]) => {});
  }

  public updateCliente(cliente: ICliente) {
    cliente.update("Cliente", (error: string, result: string) => {});
  }
}
