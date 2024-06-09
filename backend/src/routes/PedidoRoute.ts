import { Router } from "express";
import PedidoController from "../controllers/PedidoConTroller";
const routerPedido = Router()
routerPedido.get('/',PedidoController.getPedidos)
export default routerPedido