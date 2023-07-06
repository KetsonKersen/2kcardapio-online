import CardsItens from "@/app/(home)/components/CardsItens"
import { PizzasAPI } from "@/services/API/API"

const Pizzas = ()=>{
    return (
        <CardsItens categorys={PizzasAPI}/>
    )
}
export default Pizzas