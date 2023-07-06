import CardsItens from "@/app/(home)/components/CardsItens"
import { BebidasAPI } from "@/services/API/API"

const Bebidas = ()=>{
    return (
        <CardsItens categorys={BebidasAPI}/>
    )
}
export default Bebidas