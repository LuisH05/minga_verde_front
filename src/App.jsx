import Main from "./layouts/Main"
import Index from "./pages/Index"
import './App.css'
import apiUrl from "../api"
import Navbarmobile from "./components/Navbarmobile"
import Footermobile from "./components/Footermobile"
import Indexmobile from "./components/Indexmobile"


function App() {
console.log(apiUrl);
console.log(process.env.NODE_ENV);

  return (
    <>
    <Main>
      <Index />
    </Main>

    {/* //mobile */}
    <div className="flex justify-center xsm:h-full">
      <div className="xsm:bg-[url(/src/assets/image/bg-mobile.png)] xsm:w-full xsm:h-screen xsm:bg-cover md:hidden">
        <Navbarmobile />
          <Indexmobile />
        <Footermobile />
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