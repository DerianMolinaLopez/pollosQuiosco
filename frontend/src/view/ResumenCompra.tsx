
import { useGlobalContext } from '../hooks/useGlobalPorvider';
import platoVacio from '../assets/img/plato-vacio.png';
import { Link } from 'react-router-dom';
import CardPedidoResumen from '../components/CardPedidoResumen';
import { formatNumber } from '../helpers/cantidades';
import { Bounce, ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { createPedido } from '../api/Peticiones';
import { PedidoTP } from '../types/Pedido';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const ResumenCompra = () => {
  const [diable,setDisable] = useState(false)
  const navigate = useNavigate();
  const { pedido,totalPedido, reiniciarPedido,
              setNombreCliente,nombreCliente,
              reiniciarAplicacion } = useGlobalContext();
  const handleEnviarPedido = async() =>{
  
    if(nombreCliente.trim() === ''){
      console.log('aaa')
       toast.error('Agrega el nombre de quien es el pedido')
       return
    } 
    setDisable(true)
    //construccion del objeto de pedido
    const PedidoArmado : PedidoTP = {
      _id: '',
      Platillos :pedido,
      total: totalPedido,
      mesa: nombreCliente,
      estado : 'En curso'
    }
     await createPedido(PedidoArmado)
   
  //  toast.success('Pedido enviado correctamente')
    toast.success('Pedido enviado correctamente')
    setTimeout(()=>{
        navigate('/')  
         reiniciarAplicacion()
    },3000)
  
  }
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <h3 className='text-orange-500 text-6xl font-bold text-center pt-5'>Resumen del pedido</h3>
      <div className='flex justify-around mt-10'>
        <Link to="/" className='bg-orange-500 text-white rounded-lg shadow-lg p-3 font-bold'>
          Regresar
        </Link>
        <button 
          onClick={reiniciarPedido}
          className='bg-purple-900 text-white rounded-lg shadow-lg p-3 font-bold'>
          Reiniciar pedido
        </button>
      
      </div>
      
      <article className='flex flex-col space-y-3 mt-14'>
        {pedido.length === 0 ? (
          <>
            <h2 className='text-7xl text-purple-800 font-bold text-center mb-20'>
              No tienes ningún artículo agregado
            </h2>
            <img 
              className='mx-auto w-1/4'     
              src={platoVacio} alt="Plato vacío" 
            />
          </>
        ) : (
          <>
           <section className='w-1/4 space-y-5 mb-5 mx-36'>
            <article  className='space-y-4'>
              <label className='text-3xl font-bold'>¿A nombre de quien o mesa es el pedido?</label>
               <input 
                      value={nombreCliente}
                      onChange={(e ) => setNombreCliente(e.target.value)}
                      className='border-b-4 border-purple-900 w-full p-2 bg-gray-100 text-2xl font-bold'
                     type="text" name="" id="" />
                <p className='text-3xl font-bold'>Total de la compra: 
                  <br />
                  <span className='text-purple-700'>
                    { formatNumber( totalPedido)}
                  </span>
                </p>
                     <button 
                            disabled={diable}
                           onClick={handleEnviarPedido}
                           className='bg-orange-700 text-whitee font-semibold text-white p-3 rounded-lg'>Completar Pedido</button>
            </article>
           </section>
            <div className='overflow-auto altura space-y-5'>
            {pedido.map(articulo => (
              <CardPedidoResumen
                key={articulo._id}
                articulo={articulo}
              />
            ))}
          </div>
          </>
        
        )}
      </article>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
    </div>
   
  );
}

export default ResumenCompra;