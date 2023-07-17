import DestImg1 from '../../../public/dest1.jpg'
import DestImg2 from '../../../public/dest2.jpg'
import DestImg3 from '../../../public/dest3.jpg'
import Icon from '../../../public/navigation.svg'

const Destinations = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="container w-11/12 flex flex-col justify-center">
        <p className="text-gris text-2xl font-medium text-center mb-2">Más vendidos</p>
        <h2 className="text-azul text-3xl font-bold text-center">Principales destinos</h2>
        <div className="container flex justify-center mt-8 gap-6">
          <div className="flex-auto h-[525px] rounded-[30px] shadow-xl flex flex-col">
            <img className=' rounded-t-[30px]' src={DestImg1} alt="DestImg1" />
            <div className='flex justify-between px-6 my-4'>
              <p className='text-gris text-xl font-medium'>Roma, Italia</p>
              <p className='text-gris text-xl font-medium'>$5.42k</p>
            </div>
            <div className='flex justify-start px-6 items-center gap-2'>
              <img className='w-[20px] h-[20px]' src={Icon} alt="Icon" />
              <p className='text-gris text-lg font-medium'>10 Días</p>
            </div>
          </div>
          <div className="flex-auto h-[525px] rounded-[30px] shadow-xl flex flex-col">
            <img className=' rounded-t-[30px]' src={DestImg2} alt="DestImg2" />
            <div className='flex justify-between px-6 my-4'>
              <p className='text-gris text-xl font-medium'>London, UK</p>
              <p className='text-gris text-xl font-medium'>$4.2k</p>
            </div>
            <div className='flex justify-start px-6 items-center gap-2'>
              <img className='w-[20px] h-[20px]' src={Icon} alt="Icon" />
              <p className='text-gris text-lg font-medium'>12 Días</p>
            </div>
          </div>
          <div className="flex-auto h-[525px] rounded-[30px] shadow-xl flex flex-col">
            <img className=' rounded-t-[30px]' src={DestImg3} alt="DestImg3" />
            <div className='flex justify-between px-6 my-4'>
              <p className='text-gris text-xl font-medium'>Europa</p>
              <p className='text-gris text-xl font-medium'>$15k</p>
            </div>
            <div className='flex justify-start px-6 items-center gap-2'>
              <img className='w-[20px] h-[20px]' src={Icon} alt="Icon" />
              <p className='text-gris text-lg font-medium'>28 Días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations