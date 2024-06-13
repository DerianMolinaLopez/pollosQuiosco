
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ArticuloType } from '../types/articulo';
import { toast } from 'react-toastify';

import { useState } from 'react';
import { encontrarImagen } from '../data/data';
import { useGlobalContext } from '../hooks/useGlobalPorvider';

type ModalProps = {
    handleModal:()=>void
    modal:boolean
    articulo:ArticuloType | null
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  maxWidth: '90%',
  maxHeight: 'auto', // Cambiado a auto
  bgcolor: 'background.paper',
  p: 4,
};
export default function ArticleModal({handleModal,modal,articulo}:ModalProps) {

const {setPedido,pedido} = useGlobalContext()
//verificamos si el articulo existe, para colocar la cantidad del mismo
const articuloExistente = pedido.find(articuloPedido => articuloPedido._id === articulo?._id);

const [contador, setContador] = useState(articuloExistente?.cantidad ?? 0);

const handleIncrementar = () => {
  setContador(contador + 1);
};

const handleDecrementar = () => {
  if (contador > 0) {
    setContador(contador - 1);
  }
};
/*
   _id:string,
    nombre:string,
    precio:number,
    descripcion:string,
    cantidad:number
*/
const handleAgregar = () => {
  const pedidoExistente = pedido.find(articuloPedido => articuloPedido._id === articulo?._id);

  if (pedidoExistente) {
    if (contador > 0) {
      // Actualizar la cantidad del artículo existente
      
      const pedidoActualizado = pedido.map(pedidoItem => 
        pedidoItem._id === articulo?._id ? { ...pedidoItem, cantidad: contador } : pedidoItem
      );
      setPedido(pedidoActualizado);
      toast.info('Pedido Modificado Correctamente')
      handleModal()
      return
    } else {
      // Eliminar el artículo si el contador es cero
      const pedidoFiltrado = pedido.filter(pedidoItem => pedidoItem._id !== articulo?._id);
      toast.info('Pedido Modificado Correctamente')
      setPedido(pedidoFiltrado);
    }
  } 
   if (contador > 0) {
    // Agregar el nuevo artículo al pedido si no existe y el contador es mayor que cero
    const articuloPedido = {
      _id: articulo?._id ?? '',
      nombre: articulo?.nombre ?? '',
      precio: articulo?.precio ?? 0,
      descripcion: articulo?.descripcion ?? '',
      cantidad: contador
    };
    setPedido([...pedido, articuloPedido]);
    toast.success('Artículo agregado al pedido');
  }

  handleModal();
};
 if(articulo) return (
    <div>
      <Modal
        open={modal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     
        <Box sx={style}>
           <section className='grid lg:grid-cols-2'>
            <article className='space-y-5 flex justify-center mx-auto flex-col'>
            <h2 className='text-5xl font-bold text-white bg-purple-800 text-center mx-5 rounded-2xl'>
              {articulo.nombre}
            </h2>
             <p className='text-2xl'>
              <span className='font-bold block '>
                Descripcion: {''}
              </span>
              {articulo.descripcion}</p>
              <div className='flex gap-3 items-center'>
                <button 
                    onClick={handleIncrementar}
                className='bg-indigo-700 rounded-full p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
               
                </button>
                  <p className='text-4xl'>{contador}</p>
                <button 
                       onClick={handleDecrementar}
                       className='bg-red-700 rounded-full p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                </button> 
                            
              </div>
              <button 
                     onClick={handleAgregar}
                     className='mx-10 p-2 text-white uppercase font-bold text-2xl bg-orange-700 '>agregar</button>
            </article>
            <article  className='flex justify-center'>
             <img 
             className='w-1/2 lg:w-full'
             src={encontrarImagen(articulo._id)?.imagen}  alt="" />
             </article>
           </section>
        </Box>
      </Modal>
    </div>
  );
}