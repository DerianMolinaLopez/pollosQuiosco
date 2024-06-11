import { Router } from "express";
import PedidoController from "../controllers/PedidoConTroller";
const routerPedido = Router()
routerPedido.get('/',PedidoController.getPedidos)
routerPedido.post('/',PedidoController.createPedido)
export default routerPedido