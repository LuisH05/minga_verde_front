import logo from "./assets/image/logo minga.png"
import menu from "./assets/image/menu hamburguesa.png"
import naruto from "./assets/image/imagen1.png"
import portada from "./assets/image/image 2.png"
import './App.css'

function App() {

  return (
    <>
    <header>
    <nav className="w-full flex justify-between items-center mx-auto px-8 ">
      <img src={menu} className="w-[3rem]"/>
      <img src={logo} className="w-[5rem]"/>
    </nav>

    <div className="flex items-end w-full h-[17rem] bg-gradient-to-l from-pink-400 via-pink-400 to-pink-300 my-10">

    <div className="w-96">
    <img src={naruto} className="w-[17rem] h-[19rem] "/>
    </div>

    <div className="w-80">
    <img src={portada} className="w-[12rem] h-[18rem] mb-5"/>
    </div>

    <div className="h-48 w-96 ">
    <h4 className="text-white text-2xl text-start">Shonen</h4>
    <p className="text-white text-sm text-justify ">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
    </div>

    </div>
    </header>

    </>
  )
}

export default App
