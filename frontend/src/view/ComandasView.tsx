import {
    SwipeableList,
    SwipeableListItem,
} from 'react-swipeable-list';
import {  trailingActions,leadingActions } from '../helpers/actions';
import 'react-swipeable-list/dist/styles.css';
import { formatNumber } from '../helpers/cantidades';
import { Bounce, ToastContainer } from 'react-toastify';
import { useQuery } from 'react-query';
import { getPedidoByEstado } from '../api/Peticiones';

const ComandasView = () => {

    const { data: comandas, isSuccess } = useQuery({
        queryKey: 'comandas',
        queryFn: getPedidoByEstado
    })

  
  
    

if (isSuccess && comandas ) return (
        <div className='max-w-screen-xl mx-auto mb-7' >
            <h2 className='text-5xl text-center text-white p-5 font-bold mt-10 rounded-t-lg bg-purple-900 w-auto'>Comandas En proceso</h2>
          
            {comandas.map(comanda=>(
                <SwipeableList key={comanda._id}  className='mt-20' >
                    <SwipeableListItem
                                      className='w-full'
                                       trailingActions={trailingActions(comanda._id)}>
                    <section  className='w-3/4 shadow-lg mx-auto border-4 border-purple-600 rounded-lg'>
                    <h2 className=' font-bold text-4xl text-white p-5  bg-purple-800'>{comanda.mesa}</h2>

                    <div className='px-4 py-5'>
                    <h3 className='text-2xl'>Lista de platos:</h3>
                    <section className=''>
                        {comanda.Platillos.map(platillo => (
                            <>
                            <section key={platillo._id} className='flex justify-between text-xl'>
                                <p>{platillo.nombre}</p>
                                <p>Cantidad:{platillo.cantidad}</p>
                            </section>
                            <p>Costo por unidad {formatNumber( platillo.precio)}</p>
                            </>
                            
                        ))}
                    </section>
                    <p className='text-2xl'>
                        Total a pagar: {' '}
                       <span className='font-bold  text-purple-800'>
                        {formatNumber(comanda.total)}
                       </span>
                    </p>

                    </div>
                    
                </section>
                    </SwipeableListItem>

                </SwipeableList>
               
            ))}
        </div>
    )
}
 


/*

if (isSuccess && comandas ) return (
        <div className='' >

            <h2 className='text-5xl text-center text-white p-5 font-bold mt-10 bg-purple-900 w-auto'>Comandas En proceso</h2>
            <section className='grid grid-cols-4 justify-center mt-20 gap-5  w-full max-w-screen-md mx-auto px-10 '>
                {comandas.map((comanda) => (
                    
                    <SwipeableList key={comanda._id} className=''  >
                        <SwipeableListItem
                             className='justify-center'
                            trailingActions={trailingActions(comanda._id)}>
                                <div>
                                <p className='bg-indigo-700 text-white font-bold text-center rounded-t-lg'>{comanda.mesa}</p>
                            <article className='border-2 rounded-lg shadow-2xl '>
                                {comanda.Platillos.map(platillo => (
                                    <div key={platillo._id} className='border-2'>
                                        <div className='flex justify-between px-2'>
                                            <p>{platillo.nombre}</p>
                                            <p>Cantidad:{platillo.cantidad}</p>
                                        </div>

                                    </div>

                                ))}
                                <div className='px-3'>
                                    <p> 
                                        Total a pagar: {' '}
                                      <span className='font-bold text-purple-700'>
                                      { formatNumber(comanda.total)}
                                      </span>    
                                    </p>
                                </div>

                            </article>
                                </div>
                            
                        </SwipeableListItem>
                    </SwipeableList>

                ))}
            </section>
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

        
    )
}
 */

export default ComandasView