
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ArticuloType } from '../types/articulo';
import { margin } from '@mui/system';
import { encontrarImagen } from '../data/data';

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
  width:1000,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ArticleModal({handleModal,modal,articulo}:ModalProps) {

 
 if(articulo) return (
    <div>
      <Modal
        open={modal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     
        <Box sx={style}>
           <section className='grid grid-cols-2'>
            <article className=''>
            <h2 className='text-4xl font-bold'>
              {articulo.nombre}
            </h2>
             <p>{articulo.descripcion}</p>
            </article>
            <article className=''>
             <img 
              className='flex justify-center'
             src={encontrarImagen(articulo._id)?.imagen}  alt="" />
             </article>
           </section>
        </Box>
      </Modal>
    </div>
  );
}