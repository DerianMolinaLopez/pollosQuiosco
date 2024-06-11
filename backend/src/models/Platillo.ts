import mongoose, { Schema,Document} from 'mongoose'
export interface PlatilloInter extends Document {
    nombre:string
    precio:number
    descripcion:string
    imagen:string
    tipo:string
}
export const PlatilloSchema :Schema = new Schema<PlatilloInter>({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    tipo:{
        type:String
    },
    imagen:{
        type:String,
        required:true
    }

},{timestamps:true})
const Platillo = mongoose.model<PlatilloInter>('Platillo',PlatilloSchema)
export default Platillo