import logo from "./assets/image/logo minga.png"
import menu from "./assets/image/menu hamburguesa.png"
import naruto from "./assets/image/imagen1.png"
import portada from "./assets/image/image 2.png"
import flecha1 from "./assets/image/flecha1.png"
import flecha2 from "./assets/image/flecha2.png"
import footer from "./assets/image/bf footer.png"
import redes from "./assets/image/redes.png"
import linea from "./assets/image/linia.png"
import './App.css'

function App() {

  return (
    <>
    <header>
    <nav className="w-full flex justify-between items-center mx-auto px-8 ">
      <img src={menu} className="w-[2rem]"/>
      <img src={logo} className="w-[3rem]"/>
    </nav>

    <div className="flex justify-between items-end  w-full h-[17rem] bg-gradient-to-l from-pink-400 via-pink-400 to-pink-300 my-10">

    <div className="w-12 h-72 flex items-center">
      <img src={flecha1} className=""/>
    </div>
    <div className="w-[20rem]">
    <img src={naruto} className="w-[17rem] h-auto "/>
    </div>

    <div className="w-[20rem]">
    <img src={portada} className="w-[12rem] h-auto mb-5"/>
    </div>

    <div className="h-48 w-72 ">
    <h4 className="text-white text-2xl text-start">Shonen</h4>
    <p className="text-white text-sm text-justify ">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
    </div>
    <div className="w-12 h-72 flex items-center">
      <img src={flecha2} className=""/>
    </div>
    </div>
    </header>


    <footer className="w-100 h-auto justify-center items-center">
    <div>
      <img src={footer} className=""/>
    </div>

    <div className="flex justify-around items-center h-32 w-100">
    <div className="flex gap-20">
      <h5 >Home</h5>
      <h5>Mangas</h5>
    </div>
    <div className="">
    <img src={logo} className="w-[3rem]"/>
    </div>
    <div className="">
    <img src={redes} className="w-56"/>
    </div>
    </div>
    <div className="border-b border-gray-400 w-100 items-center">
  
    </div> 
    </footer>
    </>
  )
}

export default App