import { ArticuloType } from "./articulo"
export type PedidoTP ={
    _id:string
    Platillos:Array<ArticuloType>
    total:number
    mesa:string
    estado:string
}
/*
   platillos:Array<PlatilloInter>
    total:number
    mesa:number
    estado:string */