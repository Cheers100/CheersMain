export default interface AddressType{
    cep: string,
    street: string,
    city: string,
    state: string,
    country: string,
    neighborhood: string,
    number: number,
    complement: string,
    idUser: number | null,
    cnpj: string | null
    alias: string | null | any
}