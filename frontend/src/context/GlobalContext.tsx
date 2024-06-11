import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { CardPlatillosProps } from '../components/CardPlatillos';
import { useQuery } from 'react-query';
import { getAllArticlesbyType } from '../api/Peticiones';
import { toast } from 'react-toastify';
import { ArticuloType } from '../types/articulo';
// Definir el tipo para el contexto
interface GlobalContextType {
  categoria: string;
  setCategoria: Dispatch<SetStateAction<string>>;
  pedido: ArticuloType[];
  setPedido: Dispatch<SetStateAction<ArticuloType[]>>;
  eliminarPedido:(id:string)=>void;
  reiniciarPedido:()=>void;

}

// Definir el tipo para las propiedades del proveedor
interface GlobalProviderProps {
  children: ReactNode;
}

// Crear el contexto con un valor por defecto
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Crear el proveedor del contexto
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {

  const [pedido,setPedido] = useState<ArticuloType[]>([]);
  const [categoria, setCategoria] = useState<string>(() => {
    const savedCategoria = localStorage.getItem('categoria');
    return savedCategoria ?? 'Inicio';
  });

  useEffect(() => {
    // Persistir el valor de categoria en localStorage cuando cambie
    localStorage.setItem('categoria', categoria);
  }, [categoria]);
  console.log(categoria)

//verificamos si hay articulos guardados
  useEffect(()=>{
    const pedidoGuardado = JSON.parse(localStorage.getItem('pedido') || '[]');
    setPedido(pedidoGuardado);
  },[])
  //por cada cambio agregado al pedido, lo mandamos al localStorage
  useEffect(() => {
    if(pedido.length >0){
      localStorage.setItem('pedido', JSON.stringify(pedido));
    
    }
     // localStorage.setItem('pedido', JSON.stringify(pedido));
  }, [pedido]);
      const eliminarPedido = (id:string)=>{
        setPedido(pedido.filter(articulo=>articulo._id !== id))
      
      }
      const reiniciarPedido = ()=>{
        const confirmar = window.confirm('¿Estas seguro de reiniciar el pedido?')
        if(confirmar){
          setPedido([])
        }
      }


  return (
    <GlobalContext.Provider value={{ categoria, setCategoria,
                                       pedido,setPedido, eliminarPedido, 
                                       reiniciarPedido }}>
      {children}
    </GlobalContext.Provider>
  );
};