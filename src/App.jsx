import Header from "./components/Header"
import ElipseBackground from "./components/ElipseBackground"
import ImgPrincipal from "../src/assets/img-principal.png"
function App() {
  return (
    <>
        <main className="relative bg-[#880808] h-[100vh]">
            <Header />
            <ElipseBackground className="absolute -translate-x-[20vw] -translate-y-[25vw]"/>
            <div className="flex justify-between mt-[50px] ">
              <div className="relative z-20 pl-[75px] ">
                <h1 className="text-[70px] text-[white] font-sanchez" >INGREDIENTES</h1>
              </div>
              <div>
                <img className="hidden lg:flex relative z-20 pt-[70px]" src={ImgPrincipal} alt="Food-image" />
                   <ElipseBackground className="absolute translate-x-[20vw] -translate-y-[45vw]"/>
              </div>
            </div>
        </main>
    </>
  )
}
export default App
