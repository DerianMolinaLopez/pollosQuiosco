import React from 'react'
import { ArticuloType } from '../types/articulo'
import { useGlobalContext } from '../hooks/useGlobalPorvider'
import { formatNumber } from '../helpers/cantidades'
type CardPedidoResumenProps = {
    articulo: ArticuloType
}
const CardPedidoResumen = ({ articulo }: CardPedidoResumenProps) => {
    const {eliminarPedido} = useGlobalContext();
    const handleEliminar = ()=>{
        eliminarPedido(articulo._id)
    }
    return (
        <>
        <div className='w-10/12 mx-auto'>
            <div className='bg-purple-900 h-10 rounded-t-lg'>

            </div>
            <article className='border shadow-lg p-10 '>
                
                <div className='flex flex-col space-y-5 md:justify-between md:flex-row'>
                    <h2 className='text-purple-700 font-bold text-5xl'>
                        {articulo.nombre}
                    </h2>
                    <div className='flex gap-4'>
                        <button className='bg-indigo-700 p-2 rounded-lg flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                        <button 
                            onClick={handleEliminar}
                            className='bg-red-700 p-2 rounded-lg flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </button>
                    </div>


                </div>



                <p className='text-2xl'>
                    {articulo.descripcion}
                </p>
                <p className='text-2xl'>
                    cantidad: {articulo.cantidad}
                </p>
                <p className='text-2xl'>
                    Precio por unidad: <span className='text-indigo-700 font-bold'>{formatNumber( articulo.precio)}</span>  
                </p>
                <p className='text-2xl'>
                    Sub total: <span className='text-indigo-700 font-bold'> 
                    {formatNumber(articulo.precio * articulo.cantidad)}
                              </span> 
                </p>

            </article>
        </div>
            
        </>

    )
}

export default CardPedidoResumen
