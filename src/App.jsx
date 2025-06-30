import Header from "./components/Header"
import ElipseBackground from "./components/ElipseBackground"
import ImgPrincipal from "../src/assets/img-principal.png"
function App() {
  return (
    <>
        <main className="relative bg-[#880808]">
            <Header />
            <ElipseBackground className="absolute -translate-x-[20vw] -translate-y-[25vw]"/>
            <div className="relative z-20 px-[70px]">
              <h1 className="text-[50px] text-[white] font-sanchez" >INGREDIENTES</h1>
            </div>
            <div>
              <img className="hidden md:flex" src={ImgPrincipal} alt="Food-image" />
            </div>
        </main>
    </>
  )
}
export default App
