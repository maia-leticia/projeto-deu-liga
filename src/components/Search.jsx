import IconSearch from "../assets/icon-search.png"
import {searchFood} from "../api/searchfood"
import { useState } from "react"

function Search(){
const [suggestions, setSuggestions] = useState([])
    return(
        <form className="flex flex-col items-center justify-center ">
            <div className=" flex items-center gap-3 bg-[#FFFFFF] max-w-[600px] p-2 px-3 rounded-full">
                <img src={IconSearch} alt="" />
                <input className="text-[24px] font-inter font-bold w-[80vw] outline-none " type="text" name="" id="" placeholder="Search..." />
            </div>
{suggestions.length > 0 && (
    <div className=" bg-[#FFFFFF]  w-[90%] border-1 ">
                <ul>
                    <li className=" p-5 text-[20px] bg-[#F2F5F7] cursor-pointer">Item 1</li>
                    
                </ul>
            </div>
)}
            

        </form>
    )
}

export default Search