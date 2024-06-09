
import { getAllArticlesbyType } from '../api/Peticiones'
import { useQuery } from 'react-query'
import CardPlatillos from '../components/CardPlatillos'

const ComplementosView = () => {
  const {data:dataComplementos,isSuccess} = useQuery({
    queryKey:['complementos'],
    queryFn:()=>getAllArticlesbyType('complementos'),
  })

  if(dataComplementos) return (
    <section className='grid md:grid-cols-2 place-items-center mt-8 lg:grid-cols-3 '>
    {dataComplementos.map(platillo=>(
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

export default ComplementosView
