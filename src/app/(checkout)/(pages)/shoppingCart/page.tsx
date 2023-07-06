'use client'
import { useState,useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Header from "../../components/Header"
const Pagina1 = ()=>{
    let soma = 0
    const router = useRouter()
    const [state,setState] = useState([])
    
    useEffect(()=>{
        const data:any = localStorage.getItem("shoppingCart")
        const res = JSON.parse(data)
        setState(res)

        if(!localStorage.getItem("PaymentCurrent")){
            localStorage.setItem("PaymentCurrent",JSON.stringify(0))
        }
    },[])



    const RemoveItemCart = (item:never)=>{
        const index = state.indexOf(item)
        if(index > -1){
            state.splice(index, 1)
            localStorage.setItem("shoppingCart",JSON.stringify(state))
            const data:any = localStorage.getItem("shoppingCart")
            setState(JSON.parse(data))
        }
    }

    const CheckItems = ()=>{
        if(state.length > 0){
            router.push('/location')
            localStorage.setItem("PaymentCurrent",JSON.stringify(soma))
        }
    }
    // md:max-w-3xl lg:max-w-5xl
    return( 
        <>
            <Header point='w-0'/>
            <section className="w-full flex flex-col gap-4 md:max-w-3xl lg:max-w-5xl">
                <h1 className="font-semibold text-3xl">Seu carrinho:</h1>
                <div className="h-80 flex flex-col gap-2 overflow-y-scroll rounded-md">
                    {state[0] ? 
                        state.map((element) =>{
                            const item:Item = element
                            const index:never = element
                            soma += item.price * item.qnt
                            return(
                                <div className="flex items-center justify-between rounded-md bg-white esm:pr-6" key={Math.floor(Math.random()*5000)}>
                                    <div className="flex items-center gap-6">
                                        <Image priority={true} quality={100} width={100} height={100} src={item.img} alt={item.name} className="rounded-md"/>
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.name}</h3>
                                            <p className="font-semibold text-lg text-yellow-400">{(item.price * item.qnt).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col-reverse 2xsm:flex-row items-center rounded-md ">
                                        <p>Qnt: x{item.qnt}</p>
                                        <button onClick={()=>RemoveItemCart(index)} className="w-8 h-8 flex items-center justify-center bg-red-500 rounded-md text-white font-semibold ml-4">X</button>
                                    </div>
                                </div>
                            )
                        })
                    :
                    <h1>
                        Carrinho vazio...
                    </h1>
                    }
                </div>
                <p>Valor total: {soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <div className="flex justify-center">
                    <button onClick={()=>CheckItems()} className={`w-64 h-10 ${state.length == 0 ? 'bg-zinc-500 cursor-not-allowed hover:none' : 'bg-green-400 hover:bg-green-500'} rounded-md text-white`}>Confirmar</button>
                </div>
            </section>
        
        </>
    )
}
export default Pagina1