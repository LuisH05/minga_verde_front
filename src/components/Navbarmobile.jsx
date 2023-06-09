import logo from "../assets/image/logo-minga.png"
import { useState } from 'react';

export default function Navbarmobile() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
      setShowMenu(!showMenu);
    }
  return (
    <nav className="flex justify-center items-center h-20">
            <div className="flex w-full mx-4 justify-between">
            <div className="flex items-center">
            <button onClick={handleMenuClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F472B6" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
            {showMenu && (
            <div className="absolute m-0 p-0 top-0 left-0 w-screen h-screen bg-gradient-to-b at-153 from-btn1 from-(-13.9%) to-btn2 to-58.69% z-20">
              <button onClick={handleMenuClick} className="px-4 py-2 text-white absolute right-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="font-semibold font-poppins pt-[2rem]">
              <li><a className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">Home</a></li>
              <li><a className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">Mangas</a></li>
              <li><a className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">My mangas</a></li>
              <li><a className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">Favorites</a></li>
              <li><a className="flex justify-center px-4 py-2 text-white hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">Logout</a></li>
            </ul>
            </div>
            )}
            </div>
            <div>
              <img src={logo} className="xsm:w-12 "/>
            </div>
            </div>
      </nav>
  )
}
