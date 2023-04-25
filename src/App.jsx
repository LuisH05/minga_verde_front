import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import Index from "./pages/Index"

import logo from "./assets/image/logo-minga.png"
import './App.css'
import apiUrl from "../api"

function App() {
console.log(apiUrl);
console.log(process.env.NODE_ENV);
  return (
    <>
    
    <header className="mx-8">

    
    <Navbar />
    <Carousel />

    </header>

    <Index />

    <Footer />


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

