import { AppConfig } from "./../app/app.config";
import IUser from "../module/model/Iuser";

export default class UsuarioBusiness extends AppConfig {
  public doValidaUsuario(user: IUser) {}
}
Object.seal(UsuarioBusiness);
