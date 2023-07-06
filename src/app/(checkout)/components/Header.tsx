'use client'
import Link from "next/link"
import { useState,useEffect} from "react"
import {motion} from "framer-motion"

const Header = (props:any)=>{
    const [state,setState] = useState('w-0')
    useEffect(()=>{
        setState(props.point)
    },[])

    return(
        <header className="w-full flex justify-center items-center pt-16 md:max-w-3xl lg:max-w-5xl">
            <div className="w-full felx">
                <motion.nav animate={{x:[-150,0]}} className="relative">
                    <ul className="w-full flex justify-between">
                        <li className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg">1</li>
                        <li className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg">2</li>
                        <li className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg">3</li>
                        <li className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg">4</li>
                    </ul>
                    <div className="w-full h-1 bg-zinc-500 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4  -z-10">
                        <div className={`${state} h-full bg-yellow-400`}>

                        </div>
                    </div>
                </motion.nav>
                <Link href="/">
                    <motion.div animate={{x:[100,0]}} className="bg-zinc-200/70 flex gap-4 pr-4 items-center rounded-md absolute top-4 right-4 cursor-pointer">
                        <span className="bg-red-500 w-10 h-10 flex items-center justify-center text-xl rounded-l-md text-white"> X </span> Fechar 
                    </motion.div>
                </Link>
            </div>
        </header>
    )
}
export default Header