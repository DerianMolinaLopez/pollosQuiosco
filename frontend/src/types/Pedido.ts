import { ArticuloType } from "./articulo"
export type PedidoTP ={
    Platillos:Array<ArticuloType>
    total:number
    mesa:"string"
    estado:string
}
/*
   platillos:Array<PlatilloInter>
    total:number
    mesa:number
    estado:string */