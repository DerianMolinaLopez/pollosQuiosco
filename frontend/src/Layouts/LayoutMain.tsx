import React from 'react';
import refresco from '../assets/img/refresco.png'
import plato from '../assets/img/plato.png'
import papas  from '../assets/img/papas-fritas.png'
import pollo1  from '../assets/img/pollo1.jpg'
import { Outlet } from 'react-router-dom';
import  { ContenidoLinkProps } from '../components/ContenidoLink';
import ContenidoLink from '../components/ContenidoLink';
import { Link } from 'react-router-dom';
const Ligas : ContenidoLinkProps[] = [
    { img: refresco, texto: 'Bebidas', link: '/Bebidas' },
    { img: plato, texto: 'Platillos', link: '/Platillos' },
    { img: papas, texto: 'Complementos', link: '/Complementos' }
];

export default function LayoutMain() {


    return (
        <div className='flex flex-col max-w-screen-2xl mx-auto'>
            <header>
                <nav className='px-10'>
                    <ul className='grid  text-center gap-5
                                    text-3xl font-bold pt-5  w-full
                                    lg:grid-cols-3'>
                        {Ligas.map((contenido,index)=>(<ContenidoLink
                        key={index}
                        img={contenido.img}
                        texto={contenido.texto}
                        link={contenido.link}
                         />))}
                    </ul>
                </nav>
            </header>
            <Link to={"/resumen"} className=' mx-auto p-2 bg-orange-600 rounded-lg text-white font-bold mt-10'>
            Resumen Del Pedido
            </Link>
            <main>
                <Outlet />
            </main>
        </div>
    );
}