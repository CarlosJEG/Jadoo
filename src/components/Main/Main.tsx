import Img from '../../../public/hero-img.png'

const Main = () => {
  return (
    <main className="BgMain w-full flex justify-center pt-28">
      <div className="container w-4/5 flex justify-between">
        <div className='max-w-xl flex flex-col pt-24 gap-5'>
          <p className='text-naranja text-2xl font-bold'>Los mejores destinos alrededor del mundo</p>
          <h1 className='text-azul text-6xl font-bold'>Viaja, disfruta y vive una vida nueva y plena</h1>
          <p className='text-gris text-lg font-medium'>Una de las mejores agencias de viajes del mundo, <br/> Cuando se trataba de planificar un viaje.</p>
          <button className='bg-amarillo px-7 py-3 rounded-xl text-white text-lg font-normal w-40'>Saber más</button>
        </div>
        <div>
          <img src={Img} alt="Img" />
        </div>
      </div>
    </main>
  )
}

export default Main