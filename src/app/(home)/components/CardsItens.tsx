'use client'
import {useState , useEffect} from "react"
import {motion} from "framer-motion"
import Image from "next/image"
import {FaShoppingCart} from "react-icons/fa"
import CartBtn from "./BtnShoppingCart"

const CardsItens = (props:any)=>{
    const category:Item[] = props.categorys

    const [count,setCount] = useState(1)
    const [QntItems,setQntItems] = useState(0)

    useEffect(()=>{
        const data:any = localStorage.getItem('shoppingCart')
        const res:any = JSON.parse(data)
        setQntItems(res.length)
    },[])
    if (typeof window !== 'undefined') {
        if(!localStorage.getItem('shoppingCart')){
            localStorage.setItem('shoppingCart',JSON.stringify([]))
        }
    }

    const AddShoppingCart = (item:Item | any)=>{
        item.qnt = count
        const data:any = localStorage.getItem('shoppingCart')
        const res:any = JSON.parse(data)

        res.push(item)

        localStorage.setItem('shoppingCart',JSON.stringify(res))

        const newData:any = localStorage.getItem('shoppingCart')
        const newRes:any = JSON.parse(newData)
        setQntItems(newRes.length)
    }
    return (
        <main className="w-full grid grid-cols-1 gap-4 pb-10 xsm:px-8 sm:grid-cols-2 sm:gap-1 sm:px-0 md:grid-cols-3 md:gap-3 lg:grid-cols-4 md:max-w-3xl lg:max-w-5xl">
            {category.map((item)=>{
                return(
                    <motion.div animate={{y:[150,0]}} key={item.name} onMouseLeave={()=>setCount(1)} className="flip-container">
                        <div className="flipper">
                            <div className="front w-full h-full bg-white flex flex-col gap-2 items-center p-4 pb-6 rounded-md shadow-xl">
                                <Image priority={true} quality={100} width={0} height={0} src={item.img} alt={item.name} className="w-full h-48 rounded-md"/>
                                <div className="font-semibold text-xl text-center">{item.name}</div>
                                <div className="font-semibold text-xl text-yellow-400 group-hover:text-black">{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                            </div>
                            <div className="back w-full h-full bg-yellow-400 flex flex-col gap-2 justify-between items-center p-4 pb-6 rounded-md shadow-xl cursor-default">
                                <h1>{item.name}</h1>
                                <p>{item.ingredientes}</p>
                                <div className="flex items-center bg-white rounded-md">
                                    <button onClick={()=> count <= 1 ? '' : setCount(count - 1)}  className={`w-12 h-8 rounded-md font-semibold text-lg ${count < 2 ? 'bg-zinc-400 text-black ' : 'bg-black text-white '}`}>-</button>
                                        <input type="number" value={count} className="w-16 h-full text-center flex justify-center"/>
                                    <button onClick={()=> setCount(count + 1)}  className="w-12 h-8 bg-black text-white rounded-md font-semibold text-lg">+</button>
                                </div>
                                    <button onClick={()=>AddShoppingCart(item)} className="w-full flex items-center justify-center gap-2 bg-black text-white py-1 rounded-md font-semibold text-lg">Adicionar<FaShoppingCart/></button>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
            {QntItems >= 1 ? <CartBtn qnt={QntItems}/> : ''}
        </main>
    )
}
export default CardsItens
