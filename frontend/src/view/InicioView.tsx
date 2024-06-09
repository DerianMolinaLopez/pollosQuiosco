import cocinero  from '../assets/img/cocinero.png'
const InicioView = () => {
  return (
    <section className="h-screen">
      <h2 className="text-black font-semibold font-Archivo text-4xl text-center my-8 ">Selecciona una de las categorias e inicia tu pedido</h2>
      <picture className='flex justify-center'>
           <img src={cocinero} alt="imagen del cocinero"  className='drop-shadow-lm'/>
      </picture>
   
    </section>
  )
}

export default InicioView
