import Logo from '../../../public/logo.svg'

const Header = () => {
  return (
    <header className="w-full h-28 flex justify-center absolute">
      <div className="container w-4/5 flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <nav className='flex gap-5'>
          <ul className='flex gap-5 items-center'>
            <li>
              <a className='p-2 font-medium' href="#">Servicios</a>
            </li>
            <li>
              <a className='p-2 font-medium' href="#">Destinos</a>
            </li>
            <li>
              <a className='p-2 font-medium' href="#">Reserva</a>
            </li>
            <li>
              <a className='p-2 font-medium' href="#">Testimonios</a>
            </li>
            <li>
              <a className='p-2 font-medium' href="#">Iniciar Sesión</a>
            </li>
          </ul>
          <button className='border border-solid border-black p-2 rounded-md'>Registrate</button>
        </nav>
      </div>
    </header>
  )
}

export default Header