
import logo from "../assets/image/logo-minga.png"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center xsm:hidden mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F472B6" className="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        <img src={logo} className="w-[4rem]"/>
    </nav>
  )
}
