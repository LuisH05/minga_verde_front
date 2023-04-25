
import footer from "../assets/image/footer.png"
import redes from "../assets/image/redes.png"
import logo from "../assets/image/logo-minga.png"

export default function Footer() {
    return (
    
    <footer className="w-auto my-8 xsm:hidden mx-8">
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

    )
}
