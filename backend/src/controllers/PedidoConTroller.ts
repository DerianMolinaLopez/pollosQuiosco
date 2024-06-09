import Pedido from '../models/Pedido';
import { Request, Response } from 'express';
class PedidoController {
    static async getPedidos (req:Request,res:Response){
        const pedidos = await Pedido.find()
        res.json(pedidos)
    }
 
}
export default PedidoController