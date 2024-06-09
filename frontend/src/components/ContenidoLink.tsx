import { Link } from "react-router-dom";
import {useLocation } from "react-router-dom";
export type ContenidoLinkProps = {
    img: string;
    texto: string;
    link: string;
};

const ContenidoLink = ({ img, texto,link }: ContenidoLinkProps) => {
  const location = useLocation()
  return (
    <Link to={link} className={`flex justify-center items-center gap-5 border
                                hover:bg-purple-500 hover:text-white transition-colors
                                ${location.pathname === link ? 'bg-purple-500 text-white' : 'bg-white text-black'}
                                `}>
     <img src={img} alt="Imagen de refresco" className='w-20' />
             <p>{texto}</p>
    <img src={img} alt="Imagen de refresco" className='w-20 gap-2' />
    </Link>
  );
};

export default ContenidoLink;