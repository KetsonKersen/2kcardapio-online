'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState,useEffect } from "react"
import {FaSearchLocation} from 'react-icons/fa'
import DeliveryImage from "../../assets/Delivery.png"
import Header from "../../components/Header"

const Location = ()=>{
    const [state,seState]:LocationCep | any = useState('')
    const [input,setInput] = useState('')
    const [erroCapos,setErroCampos] = useState('')
    const router = useRouter()
    useEffect(()=>{
        if(!localStorage.getItem('Location')){
            localStorage.setItem('Location',JSON.stringify(''))
        }
    },[])

    const GetDataLocation = async (url:string,eventDefualt:any)=>{
        try{
            eventDefualt.preventDefault()
            const data = await fetch(url)
            const res = await data.json()
            seState(res)
        }
        catch (error){
            alert('Falha ao encontrar o cep informado')
        }
    }
    const CheckLocationData = (eventDefualt:any)=>{
        eventDefualt.preventDefault()
        const cep:any = document.querySelector('#cep')
        const rua:any =document.querySelector('#rua')
        const numero:any =document.querySelector('#numero')
        const bairro:any =document.querySelector('#bairro')
        const cidade:any =document.querySelector('#cidade')
        const estado:any =document.querySelector('#estado')

        const Location:currentLocation = {
            cep:cep.value,
            rua:rua.value,
            numero:numero.value,
            bairro:bairro.value,
            cidade:cidade.value,
            estado:estado.value
        }

        const List = [cep,rua,numero,bairro,cidade,estado]


        if((cep.value && rua.value && numero.value && bairro.value && cidade.value && estado.value) == ''){
            List.map((item:Element | any)=>{
                if(item.value == ''){
                    item.style.border = '2px solid red'
                    setErroCampos('*Digite todos os campos*')
                }
            })
        }else{
            localStorage.setItem('Location',JSON.stringify(Location))
            setErroCampos('')
            router.push('/paymentSession')
            
        }
    }


    return(
        <>
            <Header point='w-1/3'/>
            <section className="w-full flex flex-col gap-4 mb-10 md:max-w-3xl lg:max-w-5xl">
                <h1 className="w-full font-semibold text-3xl mb-5">Endereço para entrega:</h1>
                <form className="flex gap-4 flex-wrap justify-center sm:justify-center md:grid md:grid-cols-4 ">
                    <div className="w-full relative">
                        <input id="cep" className="w-full h-10 pl-4 bg-white rounded-md" type="text" value={input} placeholder="Digite o seu Cep" onChange={(e)=>{setInput(e.target.value)}}/>
                        <button className="w-10 h-full flex justify-center items-center text-xl font-semibold absolute top-0 right-0 bg-yellow-400 rounded-r-md" onClick={()=>GetDataLocation(`https://viacep.com.br/ws/${input}/json/`, event)}><FaSearchLocation/></button>
                    </div>
                    <input id="rua" className="w-full h-10 px-4 bg-white rounded-md border-2 border-hidden sm:w-72 md:w-full" type="text" value={state.logradouro} placeholder="Rua:"/>
                    <input id="numero"className="w-full h-10 px-4 bg-white rounded-md border-2 border-hidden sm:w-72 md:w-full" type="text" placeholder="Numero:"/>
                    <input id="bairro" className="w-full h-10 px-4 bg-white rounded-md border-2 border-hidden sm:w-72 md:w-full" type="text" value={state.bairro} placeholder="Bairro:"/>
                    <input id="cidade" className="w-full h-10 px-4 bg-white rounded-md border-2 border-hidden sm:w-72 md:w-full" type="text" value={state.localidade} placeholder="Cidade:"/>
                    <input id="estado" className="w-full h-10 px-4 bg-white rounded-md border-2 border-hidden sm:w-72 md:w-full" type="text" value={state.uf} placeholder="Estado:"/>
                    <input className="w-full h-10 px-4 bg-white rounded-md border-2 border-hidden sm:w-72 md:w-full" type="text" placeholder="Complemento:"/>
                    <button onClick={()=>CheckLocationData(event)} className="w-full h-10 bg-yellow-400 rounded-md">Confirmar endereço</button>
                </form>
                <p className="w-full text-center text-red-600">{erroCapos}</p>
                <div className="w-full h-80 items-center justify-center overflow-hidden hidden sm:flex">
                    <Image src={DeliveryImage} width={0} height={550} alt="Delivery"/>
                </div>
            </section>
        </>
    )
}
export default Location