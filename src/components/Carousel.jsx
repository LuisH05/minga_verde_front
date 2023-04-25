import naruto from "../assets/image/imagen1.png"
import portada from "../assets/image/image-2.png"
import flecha1 from "../assets/image/flecha1.png"
import flecha2 from "../assets/image/flecha2.png"

export default function Carousel() {
  return (
    <div className="flex justify-between items-center w-full h-[16rem] bg-gradient-to-l from-pink-400 via-pink-400 to-pink-300 my-8 rounded-md xsm:hidden ">

    <div className='absolute w-[92%] flex content-center my-28 justify-between ' >
      <img src={flecha1} className="w-[3rem]" />
      <img src={flecha2} className="w-[3rem] "/>
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

  )
}
