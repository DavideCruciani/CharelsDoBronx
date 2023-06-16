import { useState } from 'react'
import {BiMenu, BiX} from 'react-icons/bi'

type NavbarProps = {
  Logo: string
}


const Navbar = ({Logo}: NavbarProps) => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="bg-transparent fixed z-[999] right-0 top-0 left-0 p-5 flex justify-between font-Lakki">
      <div>
        <a href="#">
          <img className="w-20 lg:w-24 hover:rotate-6" src={Logo} alt="UFC logo" />
        </a>
      </div>
      <div className='hidden xl:inline-block'>
        <ul className="text-yellow-400 flex gap-6 text-3xl">
          <li className="hover:text-yellow-600"><a href="#">HOME</a></li>
          <li className="hover:text-yellow-600"><a href="#history">HISTORY</a ></li>
          <li className="hover:text-yellow-600"><a href="#documentary">DOCUMENTARY</a></li>
        </ul>
      </div>
      <div className='xl:hidden z-[999]' onClick={handleNav}>
      {nav ? <BiX className='cursor-pointer' size={38} color='#FACC15'/> : <BiMenu className='cursor-pointer' size={38} color='#FACC15'/>}
      </div>
      <div className={nav ? 'fixed bg-[#15803D]/[0.9] #172554 border-l-2 border-l-green-800 flex justify-center py-32 xl:hidden right-0 top-0 text-center p-4 w-2/3 h-full ease-in-out duration-300' : 'fixed bg-[#15803D]/[0.9] border-l-2 border-l-green-800 flex justify-center py-32 xl:hidden top-0 text-center p-4 w-2/3 h-full right-[-100%] ease-in-out duration-300'}>
        <ul className="text-yellow-400 flex flex-col gap-10 text-2xl">
          <li className="hover:text-yellow-600"><a href="#">HOME</a></li>
          <li className="hover:text-yellow-600"><a href="#history">HISTORY</a ></li>
          <li className="hover:text-yellow-600"><a href="#documentary">DOCUMENTARY</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar