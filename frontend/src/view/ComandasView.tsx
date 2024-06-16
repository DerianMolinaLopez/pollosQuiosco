import {
    SwipeableList,
    SwipeableListItem,
} from 'react-swipeable-list';
import cajaVacia from '../assets/img/CajaVacia.png';
import { trailingActions } from '../helpers/actions';
import 'react-swipeable-list/dist/styles.css';
import { formatNumber } from '../helpers/cantidades';
import { ToastContainer } from 'react-toastify';
import { useQuery } from 'react-query';
import { getPedidoByEstado } from '../api/Peticiones';

const ComandasView = () => {

    const { data: comandas, isSuccess } = useQuery({
        queryKey: 'comandas',
        queryFn: getPedidoByEstado
    })





    if (isSuccess && comandas) return (
        <>
            <h2 className='max-w-screen-xl mx-auto text-5xl text-center text-white p-2 font-bold mt-10 rounded-t-lg bg-purple-900 w-auto'>Comandas En proceso</h2>


            {comandas.length > 0 ?

                (<div className='max-w-screen-xl mx-auto mt-6' >

                    {comandas.map(comanda => (
                        <SwipeableList key={comanda._id} className='' >
                            <SwipeableListItem 
                                className='w-full'
                                trailingActions={trailingActions(comanda._id)}>
                                <section className='w-3/4 shadow-lg mx-auto border-4 border-purple-600 rounded-lg'>
                                    <h2 className=' font-bold text-4xl text-white px-4 bg-purple-800'>{comanda.mesa}</h2>

                                    <div className='px-4 py-5'>
                                        <h3 className='text-2xl'>Lista de platos:</h3>
                                        <section className=''>
                                            {comanda.Platillos.map(platillo => (
                                                <>
                                                <div className='border-t border-b border-gray-400'>
                                                    <section key={platillo._id} className='flex justify-between text-xl'>
                                                        <p>{platillo.nombre}</p>
                                                        <p className='text-red-500 font-semibold'>Cantidad:{' '}{platillo.cantidad}</p>
                                                    </section>
                                                    <p>Costo por unidad {formatNumber(platillo.precio)}</p>
                                                </div>
                                                    
                                                </>

                                            ))}
                                        </section>
                                        <p className='text-2xl mt-2'>
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
                </div>)
                :

                (
                    <>
                     <h3 className='text-center mt-10 text-4xl font-bold'>No hay comandas Pendientes esperando...</h3>
                        <article className='flex justify-center mt-10 mb-10'>
                            <div className='rounded-full anchura-borde border-purple-950 p-10'>
                                  <img  src={cajaVacia} className='w-40' alt="" />
                            </div>
                          
                        </article>
                    </>


                )
            }
            <ToastContainer />

        </>

    )
}

export default ComandasView