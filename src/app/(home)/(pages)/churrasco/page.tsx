import CardsItens from "@/app/(home)/components/CardsItens"
import { ChurrascoAPI } from "@/services/API/API"

const Churrasco = ()=>{
    return (
        <CardsItens categorys={ChurrascoAPI}/>
    )
}
export default Churrasco