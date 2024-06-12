import axiosCLI from "./AxiosCLI";
import { CardPlatillosProps } from "../components/CardPlatillos";
import { PedidoTP } from "../types/Pedido";
export async function getAllArticlesbyType(tipo: string): Promise<CardPlatillosProps[] | undefined> {
    try {
        const response = await axiosCLI(`/platillos/${tipo}`);
        const data: CardPlatillosProps[] = response.data.map((item: any) => ({
            _id: item._id, // Asegúrate de que el mapeo de _id es correcto
            nombre: item.nombre,
            precio: item.precio,
            descripcion: item.descripcion, // Añadido mapeo de descripcion
            imagen: item.imagen, // Añadido mapeo de imagen
        }));
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function createPedido(pedido:PedidoTP) :Promise<PedidoTP | undefined|string>{
    try {
        console.log(pedido)
        const {data} = await axiosCLI.post('/pedidos',pedido);
        console.log(data)
        return  data.message;
    } catch (error) {
        console.error(error);
    }
    
}
export async function getPedidoByEstado():Promise<PedidoTP[] | undefined>{
    const {data} = await axiosCLI.get('/pedidos/Preparando');

    return data;
    
}
export async function liberacion(id:string):Promise<string>{
    const {data} = await axiosCLI.put('/pedidos/liberacion',{id});
    return data.message;
}