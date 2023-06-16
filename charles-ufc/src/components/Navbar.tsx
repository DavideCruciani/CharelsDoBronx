type NavbarProps = {
  Logo: string
}


const Navbar = ({Logo}: NavbarProps) => {
  return (
    <nav className="bg-transparent fixed z-[999] right-0 top-0 left-0 p-5 flex justify-between font-Lakki text-3xl">
      <div>
        <a href="#">
          <img className="w-24 hover:rotate-6" src={Logo} alt="UFC logo" />
        </a>
      </div>
      <div>
        <ul className="text-yellow-400 flex gap-6">
          <li className="hover:text-yellow-600"><a href="#">HOME</a></li>
          <li className="hover:text-yellow-600"><a href="#history">HISTORY</a ></li>
          <li className="hover:text-yellow-600"><a href="#documentary">DOCUMENTARY</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar