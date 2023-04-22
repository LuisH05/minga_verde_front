import logo from "./assets/image/logo minga.png"
import menu from "./assets/image/menu hamburguesa.png"
import naruto from "./assets/image/imagen1.png"
import portada from "./assets/image/image 2.png"
import flecha1 from "./assets/image/flecha1.png"
import flecha2 from "./assets/image/flecha2.png"
import footer from "./assets/image/bf footer.png"
import redes from "./assets/image/redes.png"
import './App.css'

function App() {

  return (
    <>
    <header>
    <nav className="w-full flex justify-between items-center mx-auto px-8 m-8 xsm:hidden">
      <img src={menu} className="w-[3rem]"/>
      <img src={logo} className="w-[5rem]"/>
    </nav>

    <div className="flex justify-between items-end  w-full h-[18rem] bg-gradient-to-l from-pink-400 via-pink-400 to-pink-300 my-20 mx-[rem] xsm:hidden ">

    <div className=" absolute w-[100%] flex content-center my-28 justify-between">
      <img src={flecha1} className="w-[3rem]"/>
      <img src={flecha2} className="w-[3rem]"/>
    </div>
    <div className="w-[100%] h-[150%] flex">

    <div className="w-[50%]">
    <img src={naruto} className="w-auto h-[80%] my-24 "/>
    </div>
    <div className="w-[50%]">
    <img src={portada} className="w-auto h-[75%] my-20 "/>
    </div>
    </div>

    <div className="h-[70%] w-[90%] ml-101111111">
    <h4 className="text-white text-2xl text-start w-[50%] pl-4">Shonen</h4>
    <p className="text-white text-sm text-justify w-[70%] pl-4">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
    </div>
    </div>
    </header>

    <div className="bg-[url(/src/assets/image/bg-main.png)] bg-no-repeat bg-cover bg-center w-fill h-[551px] rounded-md mt-[3%] flex flex-col justify-center items-start pl-[10%] gap-[15px] p-0 xsm:hidden">
            <h2 className="not-italic font-bold text-[64px] leading-[95.19%] text-white text-shadow: 1px 8px 50px rgba(255, 255, 255, 0.25)">Live the emotion of the manga</h2>
            <p className="font-normal text-2xl leading-[95.19%] text-white">Find the perfect manga for you</p>
            <span className="not-italic font-semibold text-base leading-[95.18%] text-white">#MingaForever 🔥</span>
            <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">Sign In!</button>
    </div>

    <footer className="w-auto my-8 xsm:hidden">
    <div className="">
      <img src={footer} className="w-[100%]"/>
    </div>
    <div className="flex justify-around items-center h-32 w-[100%]">
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
    <div className="border-b border-gray-400 w-[80%] items-center m-auto">
  
    </div> 
    </footer>


    {/* //mobile */}
    <div className="flex justify-center xsm:h-screen sm:hidden">
      <div className="xsm:bg-[url(/src/assets/image/bg-mobile.png)] xsm:w-full xsm:h-full xsm:bg-cover">
        <div className="flex justify-center items-center h-20">
        <div className="flex w-full mx-4 justify-between">
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F472B6" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
        </div>
        <div>
          <img src={logo} className="xsm:w-12"/>
        </div>
        </div>
        </div>

        <div className="xsm: flex xsm: mt-40 xsm: flex-col">
        <h1 className="text-white xsm: text-4xl xsm:text-center xsm:font-bold">Live the emotion of the manga</h1>
        <h3 className="text-white xsm: self-center xsm:text-base xsm:mb-2 p-3">Find the perfect manga for you</h3>
        <div className="xsm: self-center">
          <button className="rounded-3xl text-white bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-10 w-64">Explore</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
