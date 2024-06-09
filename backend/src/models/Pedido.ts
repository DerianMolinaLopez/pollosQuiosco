import mongoose, { Schema,Document} from 'mongoose'
import{PlatilloInter} from './Platillo'
interface PedidoInter extends Document {
    platillos:Array<PlatilloInter>
    total:number
    mesa:number
    estado:string
}
const PedidoSchema:Schema = new Schema<PedidoInter>({
    platillos:[{
        type:Schema.Types.ObjectId,
        ref:'Platillo'
    } ],
    total:{
        type:Number,
        required:true
    },
    mesa:{/* si es apra llevar, la mesa es el nombre de quien ordena */
        type:Number,
        required:true
    },
    estado:{
        type:String,
        required:true
    }
},{timestamps:true})
const Pedido = mongoose.model<PedidoInter>('Pedido',PedidoSchema)
export default Pedido