import axiosCLI from "./AxiosCLI";
import { CardPlatillosProps } from "../components/CardPlatillos";

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