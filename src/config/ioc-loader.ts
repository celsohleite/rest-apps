import { Container } from "inversify";
import "reflect-metadata";
import ClienteService from "../module/service/cliente.service";
import SERVICES from "../constants/services";
import ClienteController from "../module/controllers/cliente.controller";
import CONTROLLERS from "../constants/controller";

let container = new Container();

//services
container.bind<ClienteService>(SERVICES.ClienteService).to(ClienteService);

//Controllers
container
  .bind<ClienteController>(CONTROLLERS.ClienteController)
  .to(ClienteController);

export default container;
