
/*
   "_id": "666611842315a6a83bdb91b3",
    "nombre": "sasa ",
    "precio": 120,
    "descripcion": "Medio pollo con papas, sopa fria y 3 flautas",
    "imagen": "../assets/img/pollo1.jpg"
*/
import diccionarioImagenes from "../data/data"
import { formatNumber } from "../helpers/cantidades"
import { ArticuloType } from "../types/articulo"
export type CardPlatillosProps = {
  _id: string,
  nombre: string,
  precio: number,
  descripcion: string,
  imagen: string,
  handleModal: () => void,
  setArticulo: (articulo: ArticuloType) => void

}
const CardPlatillos = ({ _id, nombre, precio, descripcion, handleModal, setArticulo }: CardPlatillosProps) => {
  const encontrarImagen = (id: string) => {
    const imagen = diccionarioImagenes.find(imagen => imagen?._id === id)
    return imagen?.imagen
  }
  const handleModificacion = () => {

    setArticulo({
      _id,
      nombre,
      precio,
      descripcion,
      cantidad: 0
    
    })
    handleModal()
  }
  //2-2/4
  return (

    <div className=" flex flex-col border w-3/4 mb-5 space-y-4 rounded-lg">
      <img className='w-full mx-auto rounded-lg h-64' src={encontrarImagen(_id)} alt="Imagen del platillo" />
      <div className=" flex justify-between items-center px-3">
        <h3 className='text-purple-700 font-bold text-2xl'>{nombre}</h3>
        <p className="text-xl">{formatNumber(precio)}</p>
      </div>
      <p className="px-3">{descripcion}</p>
      <button
        onClick={handleModificacion}
        className="bg-purple-600 px-3 py-2 text-white font-bold">Agregar</button>
    </div>


  )
}

export default CardPlatillos
