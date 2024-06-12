import { Router } from "express";
import PedidoController from "../controllers/PedidoConTroller";
const routerPedido = Router()
routerPedido.get('/',PedidoController.getPedidos)
routerPedido.post('/',PedidoController.createPedido)
routerPedido.get('/:estado',PedidoController.getPedidoEstado)
routerPedido.put('/liberacion',PedidoController.liberarComanda)
export default routerPedido