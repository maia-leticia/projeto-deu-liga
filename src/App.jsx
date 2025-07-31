import Header from "./components/Header"
import Ingrediente from "./components/Ingrediente"
import ImgPrincipal from "../src/assets/img-principal.png"
import IconSearch from '../src/assets/icon-search.png'
import Send from '../src/assets/sent.png'
import { useState } from "react"

function App() {

const [listFood, setListFood] = useState([])
const[food, setFood] = useState("")

function handleChange(e){
  setFood(e.target.value)
}

function sendFood(){
  if(listFood.length <=4 ){
    if(!listFood.includes(food)){
      if(food != ""){
        setListFood([...listFood, food])
      } 
    } else alert("Alimento ja cadastrado!")
  } else alert("Limite maximo de 5 itens!")
  
  setFood("")
}

function removeItem(nome){
  setListFood(listFood.filter(item => item !== nome))
}

function handleSend(){
  if(listFood.length !==0){
    alert("enviou")
  } else alert("Cadastre algum alimento!")
  
}

  return (
    <>
        <main className="absolute p-5 w-full">
            <Header />
            <div className=" flex justify-center lg:justify-between mt-[50px] ">
              <div className=" lg:pl-[75px] ">
                <div className="flex flex-col items-center"> 
                  <h1 className="text-[50px] lg:text-[70px] text-[white] font-sanchez mb-3" >INGREDIENTES</h1>
                   <div className="flex justify-center items-center gap-5 mb-4">
                     <div className=" flex items-center gap-3 bg-[#FFFFFF] max-w-[600px] p-2 px-3 rounded-full">
                        <img src={IconSearch} alt="" />
                        <input className="text-[24px] font-inter font-bold w-[80vw] outline-none " type="text" name="" id="" placeholder="Search..." value={food} onChange={handleChange} onKeyDown={(e)=>{if (e.key === "Enter"){sendFood()} }}/>
                        </div>
                        <img src={Send} alt="" className="w-[40px] h-[40px] hover:cursor-pointer" onClick={sendFood}/>
                      </div>
                   </div> 
                {listFood.length == 0 &&
                  <p className="text-[#FFFFFF] mb-5 text-[20px]">Nenhum alimento cadastrado ainda :(</p>
                }
                { listFood.map((item, index)=>(
                  <Ingrediente key={index} nome={item} onRemove={removeItem}/>
                )
                )
                }   
                
                <div className="w-[150px] rounded-full bg-[#E53170] text-[#FFFFFF] p-3 text-[20px] text-center cursor-pointer font-bold" onClick={handleSend}>Enviar</div>
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
