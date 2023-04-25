import logo from "./assets/image/logo-minga.png"
import menu from "./assets/image/menu-hamburguesa.png"
import naruto from "./assets/image/imagen1.png"
import portada from "./assets/image/image 2.png"
import flecha1 from "./assets/image/flecha1.png"
import flecha2 from "./assets/image/flecha2.png"
import footer from "./assets/image/bf footer.png"
import redes from "./assets/image/redes.png"
import './App.css'
import apiUrl from "../api"

function App() {
console.log(apiUrl);
console.log(process.env.NODE_ENV);
  return (
    <>
    
    <header className="mx-10">
    <nav className="w-full flex justify-between items-center xsm:hidden mt-10">
      <img src={menu} className="w-[3rem]"/>
      <img src={logo} className="w-[4rem]"/>
    </nav>

    <div className="flex justify-between items-center w-full h-[16rem] bg-gradient-to-l from-pink-400 via-pink-400 to-pink-300 my-8 rounded-md xsm:hidden ">

      <div className='absolute w-[90%] flex content-center my-28 justify-between ' >
        <img src={flecha1} className="w-[3rem]" />
        <img src={flecha2} className="w-[3rem]"/>
      </div>


    <div className="w-[100%] h-[22rem] flex">
      <div className="w-[50%]">
        <img src={naruto} className="w-auto h-[80%] my-4 "/>
      </div>
      <div className="w-[50%]">
        <img src={portada} className="w-auto h-[75%] my-3 "/>
      </div>
    </div>

      <div className="h-auto w-[90%] ml-10">
        <h4 className="text-white text-2xl text-start w-[50%] pl-2">Shonen</h4>
        <p className="text-white text-sm text-justify w-[60%] pl-2 ">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
      </div>
    </div>

    </header>


    <div className="bg-[url(/src/assets/image/bg-main.png)] bg-no-repeat bg-cover bg-center w-fill h-[500px] rounded-md mt-[1] flex flex-col justify-center items-start pl-[10%] gap-[10px] p-0 xsm:hidden mx-10">
            <h2 className="not-italic font-bold text-[64px] leading-[95.19%] text-white text-shadow: 1px 8px 50px rgba(255, 255, 255, 0.25)">Live the emotion of the manga</h2>
            <p className="font-normal text-2xl leading-[95.19%] text-white">Find the perfect manga for you</p>
            <span className="not-italic font-semibold text-base leading-[95.18%] text-white">#MingaForever 🔥</span>
            <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">Sign In!</button>
    </div>

    <footer className="w-auto my-8 xsm:hidden mx-10">
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
    <div className="flex justify-center xsm:h-full">
      <div className="xsm:bg-[url(/src/assets/image/bg-mobile.png)] xsm:w-full xsm:h-screen xsm:bg-cover md:hidden">
        <div className="flex justify-center items-center h-20">
        <div className="flex w-full mx-4 justify-between">
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F472B6" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
        </div>
        <div>
          <img src={logo} className="xsm:w-12 "/>
        </div>
        </div>
        </div>

        <div className="xsm: flex xsm: mt-40 xsm: flex-col">
        <h1 className="text-white xsm: text-4xl xsm:text-center xsm:font-bold">Live the emotion of the manga</h1>
        <h3 className="text-white xsm: self-center xsm:text-base xsm:mb-2 p-3">Find the perfect manga for you</h3>
        <div className="xsm: self-center">
          <button className="rounded-3xl text-white bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-10 w-64 " >Explore</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App


{/* <div>
        <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.9%) to-btn2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">
                    Donate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
        </button>
      </div> */}
