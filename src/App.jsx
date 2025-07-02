import Header from "./components/Header"
import ElipseBackground from "./components/ElipseBackground"
import Search from "./components/Search"
import Ingrediente from "./components/Ingrediente"
import ImgPrincipal from "../src/assets/img-principal.png"

function App() {

  return (
    <>
        <main className="relative bg-[#880808] h-[100vh]">
            <Header />
            <ElipseBackground className="absolute -translate-x-[20vw] -translate-y-[25vw]"/>
            <div className=" flex justify-center lg:justify-between mt-[50px] ">
              <div className="relative z-20 lg:pl-[75px] ">
                <div className="flex flex-col items-center"> 
                  <h1 className="text-[50px] lg:text-[70px] text-[white] font-sanchez mb-3" >INGREDIENTES</h1>
                  <Search/>
                  {/* 7 Ingredientes no máximo */}
                </div>
                <div className="w-[150px] rounded-full bg-[#E53170] text-[#FFFFFF] p-3 text-[20px] text-center cursor-pointer font-bold">Enviar</div>
              </div>
              <div>
                <img className="hidden lg:flex relative z-20 pt-[70px] w-[40vw]" src={ImgPrincipal} alt="Food-image" />
                   <ElipseBackground className="absolute translate-x-[20vw] -translate-y-[40vw]"/>
              </div>
            </div>
        </main>
    </>
  )
}
export default App
