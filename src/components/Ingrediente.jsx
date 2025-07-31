import IconTrash from "../assets/icon-trash.png"

function Ingrediente({nome, onRemove}){
    return(
        <div className="flex items-center justify-between p-5 mb-3 bg-[#FFFFFF] w-[600px] h-[60px] rounded-[11.69px] ">
            <span className="text-[20px] font-inter font-bold">{nome}</span>
            <div className="cursor-pointer"><img src={IconTrash} alt="trash" onClick={()=>onRemove(nome)}/></div>
        </div>
    )
}
export default Ingrediente