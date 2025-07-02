import IconSearch from "../assets/icon-search.png"

function Search(){
    return(
        <form>
            <div className="flex items-center gap-3 bg-[#FFFFFF] w-[400px] lg:w-[550px] p-2 px-3 rounded-full">
                <img src={IconSearch} alt="" />
                <input className="text-[24px] font-inter font-bold w-[30vw] outline-none " type="text" name="" id="" placeholder="Search..." />
                
            </div>
        </form>
    )
}

export default Search