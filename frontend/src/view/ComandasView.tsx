import {
    SwipeableList,
    SwipeableListItem,
} from 'react-swipeable-list';
import {  trailingActions,leadingActions } from '../helpers/actions';
import 'react-swipeable-list/dist/styles.css';
import { Bounce, ToastContainer } from 'react-toastify';
import { useQuery } from 'react-query';
import { getPedidoByEstado } from '../api/Peticiones';

const ComandasView = () => {

    const { data: comandas, isSuccess } = useQuery({
        queryKey: 'comandas',
        queryFn: getPedidoByEstado
    })

  
  
    

if (isSuccess && comandas ) return (
        <>

            <h2 className='text-5xl text-center text-white p-5 font-bold mt-10 bg-purple-900 w-auto'>Comandas En proceso</h2>
            <section className='grid grid-cols-4 justify-center mt-20 gap-5  w-full max-w-screen-xl px-10 '>
                {comandas.map((comanda) => (
                    
                    <SwipeableList key={comanda._id}  >
                        <SwipeableListItem
                          
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
                                    <p>{comanda.total}</p>
                                    <p className=''>Nombre: <span className='font-bold text-indigo-700'>{comanda.mesa}</span></p>
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
    </>

        
    )
}
 


/*
 <div className='bg-gray-700'>
        <SwipeableList>
                <SwipeableListItem
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    Item content
                </SwipeableListItem>
            </SwipeableList>;
        </div>
*/


export default ComandasView