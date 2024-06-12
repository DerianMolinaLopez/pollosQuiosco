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
        const { Platillos, total, mesa } = req.body;
        const platillosParseados : PlatilloInter = Platillos
        const pedido = new Pedido({
            Platillos: platillosParseados,
            total,
            mesa,
            estado:"Preparando"
        });
        pedido.save()
        res.json({ message: 'Pedido creado'});
    }
    static async getPedidoEstado (req:Request, res:Response){
        const {estado} = req.params;
        const pedidos = await Pedido.find({estado});//solamente mandamos todos los pedidos que esten como "Preparando"
        console.log(pedidos[0])
        res.json(pedidos);
    }
    static async liberarComanda(req:Request, res:Response){
        const {id} = req.body;
        const pedido = await Pedido.findById(id);
        if(pedido){
            pedido.estado = "Liberado";
            await pedido.save();
            res.json({message:"Pedido liberado",status:'ok'})
        }
    
    }
}

export default PedidoController;