import CardsItens from "@/app/(home)/components/CardsItens"
import { SobremesasAPI } from "@/services/API/API"

const Sobremesas = ()=>{
    return (
        <CardsItens categorys={SobremesasAPI}/>
    )
}
export default Sobremesas