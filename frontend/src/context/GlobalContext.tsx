import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { CardPlatillosProps } from '../components/CardPlatillos';
import { useQuery } from 'react-query';
import { getAllArticlesbyType } from '../api/Peticiones';

// Definir el tipo para el contexto
interface GlobalContextType {
  categoria: string;
  setCategoria: Dispatch<SetStateAction<string>>;

}

// Definir el tipo para las propiedades del proveedor
interface GlobalProviderProps {
  children: ReactNode;
}

// Crear el contexto con un valor por defecto
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Crear el proveedor del contexto
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [articulos, setArticulos] = useState<CardPlatillosProps[] | undefined>([]);
  const [categoria, setCategoria] = useState<string>(() => {
    const savedCategoria = localStorage.getItem('categoria');
    return savedCategoria ?? 'Inicio';
  });

  useEffect(() => {
    // Persistir el valor de categoria en localStorage cuando cambie
    localStorage.setItem('categoria', categoria);
  }, [categoria]);
  console.log(categoria)
  return (
    <GlobalContext.Provider value={{ categoria, setCategoria }}>
      {children}
    </GlobalContext.Provider>
  );
};