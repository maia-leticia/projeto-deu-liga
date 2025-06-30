function Header(){
    return(
    <>
        <div className="flex justify-between items-center font-inter p-[35px] bg-transparent text-[white] relative z-20">
            <span className=" font-bold text-[32px]">DEU LIGA!</span>
            <div className="flex justify-center items-center text-[24px] rounded-full border-[3px] w-[146px] h-[32px]">
                <a className="no-underline  text-[white]" href="#">Login</a>
            </div>
        </div>
    </>
    )
}
export default Header