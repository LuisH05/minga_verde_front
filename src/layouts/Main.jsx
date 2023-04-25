import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"

export default function Main({children}) {
    console.log(children);
  return (
    <>
    <header className="mx-8">
        <Navbar />
        <Carousel />
    </header>
    {/* <Index /> */}
    {children}
    <Footer />
    </>
  )
}

