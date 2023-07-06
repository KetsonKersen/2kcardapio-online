import CardsItens from "@/app/(home)/components/CardsItens"
import { BurguesAPI } from "@/services/API/API"

const Burgues = ()=>{
    return (
        <CardsItens categorys={BurguesAPI}/>
    )
}
export default Burgues