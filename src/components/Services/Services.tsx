import IconImg1 from '../../../public/icon1.png'
import IconImg2 from '../../../public/icon2.png'
import IconImg3 from '../../../public/icon3.png'
import IconImg4 from '../../../public/icon4.png'
const Services = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="container w-11/12 flex flex-col justify-center">
        <p className="text-gris text-2xl font-medium text-center mb-2">Categorias</p>
        <h2 className="text-azul text-3xl font-bold text-center">Ofrecemos los mejores servicios</h2>
        <div className="container flex justify-center mt-8 gap-4">
          <div className="flex-auto h-64 p-4 rounded-[30px] shadow-xl flex flex-col justify-center items-center">
            <img className='w-[75px]' src={IconImg1} alt="IconImg1" />
            <p className='text-azul text-2xl font-bold text-center mb-2'>Clima calculado</p>
            <p className='text-gris text-base font-medium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex-auto h-64 p-4 rounded-[30px] shadow-xl flex flex-col justify-center items-center">
            <img src={IconImg2} alt="IconImg2" />
            <p className='text-azul text-2xl font-bold text-center mb-2'>Mejores Vuelos</p>
            <p className='text-gris text-base font-medium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex-auto h-64 p-4 rounded-[30px] shadow-xl flex flex-col justify-center items-center">
            <img src={IconImg3} alt="IconImg3" />
            <p className='text-azul text-2xl font-bold text-center mb-2'>Eventos locales</p>
            <p className='text-gris text-base font-medium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex-auto h-64 p-4 rounded-[30px] shadow-xl flex flex-col justify-center items-center">
            <img src={IconImg4} alt="IconImg4" />
            <p className='text-azul text-2xl font-bold text-center mb-2'>Personalización</p>
            <p className='text-gris text-base font-medium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services