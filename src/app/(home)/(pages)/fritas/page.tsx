import CardsItens from "@/app/(home)/components/CardsItens"
import { FritasAPI } from "@/services/API/API"

const Fritas = ()=>{
    return (
        <CardsItens categorys={FritasAPI}/>
    )
}
export default Fritas