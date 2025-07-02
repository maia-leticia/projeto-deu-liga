import IconTrash from "../assets/icon-trash.png"

function Ingrediente(){
    return(
        <div className="flex items-center justify-between p-5 mb-3 bg-[#FFFFFF] w-[600px] h-[60px] rounded-[11.69px] ">
            <span className="text-[20px] font-inter font-bold">Ingrediente 1</span>
            <div className="cursor-pointer"><img src={IconTrash} alt="trash" /></div>
        </div>
    )
}
export default Ingrediente