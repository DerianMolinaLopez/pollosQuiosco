import React from 'react'
import { useQuery } from 'react-query'
import CardPlatillos from '../components/CardPlatillos'
import { getAllArticlesbyType } from '../api/Peticiones'
const PlatillosView = () => {
  const {data:dataPlatillos,isSuccess} = useQuery({
    queryKey:['platillos'],
    queryFn:()=>getAllArticlesbyType('platillo'),
    retry:1
  })
  if(isSuccess) console.log(dataPlatillos)

  if(dataPlatillos) return (
    <section className='grid md:grid-cols-2 place-items-center mt-8 lg:grid-cols-3 '>
      {dataPlatillos?.map(platillo=>(
        <CardPlatillos
          key={platillo._id}
          _id={platillo._id}
          nombre={platillo.nombre}
          descripcion={platillo.descripcion}
          precio={platillo.precio}
          imagen={platillo.imagen}
        />
      ))}
    </section>
  )
}

export default PlatillosView
