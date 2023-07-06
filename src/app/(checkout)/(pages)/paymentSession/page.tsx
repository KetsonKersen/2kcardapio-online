'use client'
import { useState,useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import payment from "../../assets/payment.png"
import QrCode from "../../assets/frame.png"
import CreditCard from "../../assets/creditCard.png"
import {AiOutlineCheck} from 'react-icons/ai'
import Header from "../../components/Header"
const PaymentSession = ()=>{
    const router = useRouter()
    const [selectPayment,setSelectPayment] = useState(false)
    const [state,seState] = useState(
        <div className="h-full flex flex-col gap-2 items-center justify-between">
            <Image src={payment} width={0} height={220} alt="Payment"/>
        </div>
    )
    useEffect(()=>{
        if(!localStorage.getItem('Payment')){
            localStorage.setItem('Payment',JSON.stringify(''))
        }
    },[])


    const ModalPayment = (type:number,btn:any)=>{
        document.querySelectorAll('#btnList > button > span').forEach((check:any)=>{
            check.style.display = 'none'
        }) 
        if(type == 1){
            btn.childNodes[1].style.display = 'flex'
            btn.childNodes[1].style.opacity = '1'
            seState(
                <div className="h-full flex flex-col gap-2 items-center justify-between">
                    <div className="w-44 h-44">
                        <Image src={QrCode} width={0} height={0} alt="QRCODE"/>
                    </div>
                    <div className="hidden">
                        <div>
                            <span>3:00</span>
                        </div>
                        <p>Escaneie o codigo a cima para realizar o pagamento via Pix </p>
                    </div>
                </div>
            )
            localStorage.setItem('Payment',JSON.stringify('PIX'))
        }else if(type == 2){
            btn.childNodes[1].style.display = 'flex'
            btn.childNodes[1].style.opacity = '1'
            seState(
                <div className="h-full flex flex-col gap-2 items-center justify-center">
                    <div className="w-44 h-44">
                        <Image src={CreditCard} width={0} height={0} alt="QRCODE"/>
                    </div>
                    <p className="text-xl">O pagamento sera realizado na entrega</p>       
                </div>
            )
            localStorage.setItem('Payment',JSON.stringify('Cartão'))
        }else{
            btn.childNodes[1].style.display = 'flex'
            btn.childNodes[1].style.opacity = '1'
            seState(
                <div className="h-full flex flex-col gap-2 items-center justify-center">
                    <p className="text-xl">O pagamento sera realizado na entrega</p>
                    <p>Por favor nos informe o valor para troco:</p>
                    <legend className="flex items-center gap-4">
                        R$:
                        <input id="Troco" className="w-32 h-10 px-4 rounded-md text-center" type="number" />
                    </legend>
                </div>
            )
            localStorage.setItem('Payment',JSON.stringify('Dinheiro'))
        }
        setSelectPayment(true)
    }
    const ConfirmPayment =()=>{
        if(selectPayment){
            router.push('/confirm')
            const data:any = localStorage.getItem('Payment')
            const res = JSON.parse(data)
            if(res === 'Dinheiro'){
                const element:any = document.querySelector('#Troco')
                localStorage.setItem('Troco',JSON.stringify(element.value))
            }
        }
    }

    return(
        <>
        <Header point='w-2/3'/>
        <section className="w-full flex items-center flex-col gap-4 mb-10 md:max-w-3xl lg:max-w-5xl">
            <h1 className="w-full font-semibold text-3xl">Selecione a forma de pagamento:</h1>
            <div className="w-full h-52 flex flex-col justify-center gap-2">
                {state}
            </div>
            <div id="btnList" className="flex flex-col gap-4">
                <button onClick={(e)=>ModalPayment(1,e.currentTarget)} className="w-44 h-10 bg-yellow-400 rounded-md relative">
                    Pix 
                    <span  className="w-5 h-5 flex justify-center items-center rounded-full bg-green-500 text-white font-semibold absolute -top-2 -right-2 opacity-0">
                        <AiOutlineCheck/>
                    </span>
                </button>
                <button onClick={(e)=>ModalPayment(2,e.currentTarget)} className="w-44 h-10 bg-yellow-400 rounded-md relative">
                    Cartão 
                    <span className="w-5 h-5 flex justify-center items-center rounded-full bg-green-500 text-white font-semibold absolute -top-2 -right-2 opacity-0">
                        <AiOutlineCheck/>
                    </span>
                </button>
                <button onClick={(e)=>ModalPayment(3,e.currentTarget)} className="w-44 h-10 bg-yellow-400 rounded-md relative">
                    Dinheiro 
                    <span className="w-5 h-5 flex justify-center items-center rounded-full bg-green-500 text-white font-semibold absolute -top-2 -right-2 opacity-0">
                    <AiOutlineCheck/>
                    </span>
                </button>
            </div>
            <div className="w-full flex items-center justify-center">
                <button onClick={()=>ConfirmPayment()} className={`w-64 h-10 ${selectPayment ? 'bg-green-400 hover:bg-green-500' :  'bg-zinc-500 cursor-not-allowed hover:none'} rounded-md text-white`}>Confirmar</button>
            </div>
        </section>
        </>
    )
}
export default PaymentSession