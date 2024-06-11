import React from 'react'
import { useGlobalContext } from '../hooks/useGlobalPorvider';
import platoVacio from '../assets/img/plato-vacio.png';
import { Link } from 'react-router-dom';
import CardPedidoResumen from '../components/CardPedidoResumen';
const ResumenCompra = () => {
    const {pedido,reiniciarPedido} = useGlobalContext();
    console.log(pedido)
return (
  <div className='max-w-screen-2xl mx-auto'>
    <h3 className='text-orange-500 text-6xl font-bold text-center pt-5'>Resumen del pedido</h3>
    <div className='flex justify-between mt-5'>
      <Link to="/" className='bg-orange-500 text-white rounded-lg shadow-lg p-3 font-bold'>
        Regresar
      </Link>
      <button 
        onClick={reiniciarPedido}
        className='bg-purple-900 text-white rounded-lg shadow-lg p-3 font-bold'>
        Reiniciar pedido
      </button>
      <Link to="/" className='bg-orange-500 text-white rounded-lg shadow-lg p-3 font-bold'>
        Completar Pedido
      </Link>
    </div>
    
    <article className='flex flex-col space-y-3 mt-14'>
      {pedido.length === 0 ? (
        <>
        <h2 className='text-7xl text-purple-800 font-bold text-center mb-20'>
          No tienes ningun articulo agregado {''}
        </h2>
        <img 
           className='mx-auto w-1/4'     
        src={platoVacio} alt="Plato vacío" />
        </>
        
      ) : (
        pedido.map(articulo => (
          <CardPedidoResumen
            key={articulo._id}
            articulo={articulo}
          />
        ))
      )}
    </article>
  </div>
)}

export default ResumenCompra
