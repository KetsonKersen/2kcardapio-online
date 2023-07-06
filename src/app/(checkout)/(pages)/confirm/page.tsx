'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import {AiOutlineCheck} from 'react-icons/ai'
import Header from "../../components/Header"
import { useRouter } from "next/navigation"
const Confirm = ()=>{

    const router = useRouter()

    const typeLocation:currentLocation | any = {}

    const [stateShoppinCart,setShoppinCart] = useState([])
    const [stateLocation,setLocation] = useState(typeLocation)
    const [statePaymentCurrent,setPaymentCurrent] = useState('')
    const [statePayment,setPayment] = useState('')
    const [stateTroco,setTroco] = useState('')

    useEffect(()=>{
        const dataShoppinCart:any = localStorage.getItem('shoppingCart')
        const resShoppingCart:any = JSON.parse(dataShoppinCart)
        setShoppinCart(resShoppingCart)
    
        const dataLocation:any = localStorage.getItem('Location')
        const resLocation:currentLocation | any = JSON.parse(dataLocation)
        setLocation(resLocation)

        const dataPaymentCurrent:any = localStorage.getItem('PaymentCurrent')
        const resPaymentCurrent:any = JSON.parse(dataPaymentCurrent)
        setPaymentCurrent(resPaymentCurrent)

        const dataPayment:any = localStorage.getItem('Payment')
        const resPayment:any = JSON.parse(dataPayment)
        setPayment(resPayment)

        const dataTroco:any = localStorage.getItem('Troco')
        const resTroco:any = JSON.parse(dataTroco)
        setTroco(resTroco)
    },[])
                        
    const [state,setState] = useState(false)
    
    const Clear = (btn:Element | any)=>{
        localStorage.setItem('shoppingCart',JSON.stringify([]))
        localStorage.setItem('Location',JSON.stringify({}))     
        localStorage.setItem('PaymentCurrent',JSON.stringify(0))
        localStorage.setItem('Payment',JSON.stringify(0))
        localStorage.setItem('Troco',JSON.stringify(0))

        btn.style.display = 'none'
        

        setTimeout(
            () =>{
                router.push('/')  
            },3000);
    }
    const Confirm = ()=>{
        return(
            <div className="w-full h-full bg-white flex flex-col items-center justify-center gap-4 text-center absolute top-0 left-0 z-10">
                <p className="text-3xl">Pedido finalizado com sucesso</p>
                <p className="text-xl">Obrigado pela preferencia</p>
                <div className="w-32 h-32 flex items-center justify-center rounded-full text-8xl font-extrabold text-white bg-green-500">
                    <AiOutlineCheck/>
                </div>
            </div>
        )
    }
    
    return(
        <>
            <Header point='w-full'/>
            <section className="w-full max-w-4xl flex flex-col gap-4 md:max-w-3xl lg:max-w-5xl relative">
                <h1 className="w-full font-semibold text-3xl">Confirmar pedido:</h1>

                <div className="w-full flex flex-wrap justify-center bg-white rounded-md p-4 gap-4 md:justify-center md:flex-nowrap">
                    <div id='scrollHidden' className="w-full max-h-96 flex flex-col gap-2 overflow-y-scroll md:w-2/4">
                        <h3 className="text-xl text-yellow-400">Lista de pedidos</h3>
                        {stateShoppinCart.map((item:Item)=>{
                            return(
                                <div key={item.name} className="flex items-center gap-6">
                                    <div>
                                        <Image quality={100} width={80} height={80} src={item.img} alt={item.name} className="rounded-md"/>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>Qnt: x{item.qnt}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full flex flex-col gap-4 text-lg md:w-2/4 md:text-right">
                        <div>
                            <h3 className="text-xl text-yellow-400">Endereço para entrega</h3>
                           <p>Rua: {stateLocation.rua}</p>
                            <p>Numero: {stateLocation.numero}</p>
                            <p>Bairro: {stateLocation.bairro}</p>
                            <p>Cidade: {stateLocation.cidade} - {stateLocation.estado}</p>
                            <p>Cep: {stateLocation.cep}</p> 
                        </div>
                        <div>
                            <h3 className="text-xl text-yellow-400">Forma de pagamento</h3>
                            <p>Total a pagar: {Number(statePaymentCurrent).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            <p>Forma de pagamento: {statePayment}</p>
                            <p>Troco para: {Number(stateTroco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        </div>
                    </div>
                    {state && Confirm()}
                </div>

                <div className="flex justify-center">
                    <button onClick={(e)=>{
                        Clear(e.target)
                        setState(!state)}}  className={`w-64 h-10 bg-green-400 hover:bg-green-500 rounded-md text-white`}>Confirmar</button>
                </div>
            </section>
        </>
        
    )
}
export default Confirm
