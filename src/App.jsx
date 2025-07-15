import Header from "./components/Header"
import Search from "./components/Search"
import Ingrediente from "./components/Ingrediente"
import ImgPrincipal from "../src/assets/img-principal.png"
import IngredientList from "./components/IngredientList"


function App() {

  return (
    <>
        <main className="absolute p-5 w-full">
            <Header />
            <div className=" flex justify-center lg:justify-between mt-[50px] ">
              <div className=" lg:pl-[75px] ">
                <div className="flex flex-col items-center"> 
                  <h1 className="text-[50px] lg:text-[70px] text-[white] font-sanchez mb-3" >INGREDIENTES</h1>
                  <Search/>
                  {/* 7 Ingredientes no máximo */}
                </div>
                <IngredientList/>
                <div className="w-[150px] rounded-full bg-[#E53170] text-[#FFFFFF] p-3 text-[20px] text-center cursor-pointer font-bold">Enviar</div>
              </div>
              <div>
                <img className="left-[40%] top-[5%] hidden lg:flex relative max-w-[700px]" src={ImgPrincipal} alt="Food-image" />
              </div>
            </div>
        </main>
    </>
  )
}
export default App
