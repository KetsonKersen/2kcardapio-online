import {FaShoppingCart} from "react-icons/fa"
import {motion} from "framer-motion"

import Link from "next/link"
const Carrinho = (props:any)=>{
    const QntItems:number = props.qnt
    return(
        <Link href="/shoppingCart">
            <motion.div animate={{x:[100,0]}} className="bg-zinc-200/70 flex gap-4 pr-4 items-center rounded-md absolute right-4 top-4 cursor-pointer md:top-10 md:right-10">
                <span id="QntItem" className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold absolute left-8 -top-2">{QntItems}</span>
                <span className="bg-yellow-400 w-10 h-10 flex items-center justify-center text-xl rounded-l-md"><FaShoppingCart/></span>
                <p>Carrinho</p>
            </motion.div>
        </Link>
    )

}
export default Carrinho