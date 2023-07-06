interface Item{
    img:string,
    name:string,
    ingredientes:string,
    price:number,
    qnt:number
}
interface currentLocation{
        cep:string,
        rua:string,
        numero:string,
        bairro:string,
        cidade:string,
        estado:string
}

interface LocationCep{
    cep: number,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: number,
    gia: string,
    ddd: number,
    siafi: number
}