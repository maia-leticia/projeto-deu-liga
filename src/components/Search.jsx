import IconSearch from "../assets/icon-search.png"

function Search(){
    return(
        <form>
            <div className="mb-10 flex items-center gap-3 bg-[#FFFFFF] w-[600px] p-2 px-3 rounded-full">
                <img src={IconSearch} alt="" />
                <input className="text-[24px] font-inter font-bold w-[80vw] outline-none " type="text" name="" id="" placeholder="Search..." />
                
            </div>
        </form>
    )
}

export default Search