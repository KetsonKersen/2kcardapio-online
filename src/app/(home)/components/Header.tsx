'use client'
import Categoria from "./Categoria"

const Header = ()=>{
    return(
        <header className="w-full flex flex-col gap-6 items-center pt-16 pb-10 relative">
            <div className="text-center">
                <p className=" text-xl text-yellow-400 font-semibold">Cardapio</p>
                <h1 className="text-3xl font-semibold">Conheça nosso cardápio</h1>
            </div>
            <Categoria/>
        </header>
    )
}
export default Header 