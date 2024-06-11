import Pedido from '../models/Pedido';
import { Request, Response } from 'express';
import { PedidoInter } from '../models/Pedido'; // Asegúrate de que la importación sea correcta
import { PlatilloInter } from '../models/Platillo';
class PedidoController {
    static async getPedidos(req: Request, res: Response) {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    }
/*

export interface PedidoInter extends Document {
    Platillos: Array<PlatilloInter>[]; // Usando el esquema de Platillo directamente
    total: number;
    mesa: string; // Si es para llevar, la mesa es el nombre de quien ordena
    estado: string;
}
*/
    static async createPedido(req: Request, res: Response) {
        const { Platillos, total, mesa, estado } = req.body;
        const platillosParseados : PlatilloInter = Platillos
        const pedido = new Pedido({
            Platillos: platillosParseados,
            total,
            mesa,
            estado
        });
        pedido.save()
        res.json({ message: 'Pedido creado'});
    }
}

export default PedidoController;