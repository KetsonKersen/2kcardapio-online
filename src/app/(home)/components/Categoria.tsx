import {FaHamburger , FaPizzaSlice ,FaDrumstickBite ,FaBacon , FaIceCream} from 'react-icons/fa'
import {BiSolidDrink} from 'react-icons/bi'
import {GiFrenchFries} from 'react-icons/gi'

import Link from 'next/link'

const Categoria = ()=>{
    const styleBtn = "flex items-center gap-2 rounded-md py-1 px-4 shadow-md font-semibold bg-white cursor-pointer transition-transform hover:bg-yellow-400 hover:scale-110"
    return(
            <nav className="w-full">
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                    <Link href='/'><li className={styleBtn}><FaHamburger/>Burgues</li></Link>
                    <Link href='/pizzas'><li className={styleBtn}><FaPizzaSlice/>Pizzas</li></Link>
                    <Link href='/churrasco'><li className={styleBtn}><FaDrumstickBite/>Churrasco</li></Link>
                    <Link href='/fritas'><li className={styleBtn}><GiFrenchFries/>Fritas</li></Link>
                    <Link href='/bebidas'><li className={styleBtn}><BiSolidDrink/>Bebidas</li></Link>
                    <Link href='/sobremesas'><li className={styleBtn}><FaIceCream/>Sobremesas</li></Link>
                </ul>
            </nav>
    )
}
export default Categoria