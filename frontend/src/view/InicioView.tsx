
import cocinero from '../assets/img/cocinero.png';
import { useGlobalContext } from '../hooks/useGlobalPorvider';
import { useQuery } from 'react-query';
import { getAllArticlesbyType } from '../api/Peticiones';
import CardPlatillos from '../components/CardPlatillos';
import { useEffect, useState } from 'react';
import { ArticuloType } from '../types/articulo';
import ArticleModal from '../components/Modal';
const InicioView = () => {
  const { categoria } = useGlobalContext();
  const [modal,setModal] = useState(false); 
  const [articulo,setArticulo] = useState<ArticuloType | null>(null)

  const { data: dataArticulos, isSuccess } = useQuery(
    ['articulos', categoria], // Incluir categoria en la clave de la consulta
    () => getAllArticlesbyType(categoria.toLocaleLowerCase()),
    {
      enabled: categoria !== 'Inicio',
    }
  );

  const handleModal  = ()=>{
    setModal(!modal)
    console.log('modal habilitado')
  }

  return (
    <>
      {modal && <ArticleModal handleModal={handleModal} modal={modal} articulo={articulo}  />}
      {isSuccess && dataArticulos ? (
        <section className='grid md:grid-cols-2 place-items-center mt-8 lg:grid-cols-3 '>
          {dataArticulos.map((platillo) => (
            <CardPlatillos
              setArticulo={setArticulo} 
              key={platillo._id}
              _id={platillo._id}
              nombre={platillo.nombre}
              descripcion={platillo.descripcion}
              precio={platillo.precio}
              imagen={platillo.imagen}
              handleModal={handleModal}
            />
          ))}
        </section>
      ) : (
        <section className="h-screen">
          <h2 className="text-black font-semibold font-Archivo text-4xl text-center my-8">
            Selecciona una de las categorias e inicia tu pedido
          </h2>
          <picture className="flex justify-center">
            <img src={cocinero} alt="imagen del cocinero" className="drop-shadow-lm" />
          </picture>
        </section>
      )}
    </>
  );
};

export default InicioView;
