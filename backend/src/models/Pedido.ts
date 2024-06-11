import mongoose, { Schema, Document } from 'mongoose';
import { PlatilloInter } from './Platillo';
import { PlatilloSchema } from './Platillo'; // Asegúrate de exportar PlatilloSchema desde './Platillo'
export interface PedidoInter extends Document {
    Platillos: PlatilloInter[]; // Usando el esquema de Platillo directamente
    total: number;
    mesa: string; // Si es para llevar, la mesa es el nombre de quien ordena
    estado: string;
}

const PedidoSchema: Schema = new Schema<PedidoInter>({
    Platillos:{
        type: [],
        required: true
    }, // Aquí cambiamos a usar el esquema de Platillo directamente
    total: {
        type: Number,
        required: true
    },
    mesa: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Pedido = mongoose.model<PedidoInter>('Pedido', PedidoSchema);

export default Pedido;