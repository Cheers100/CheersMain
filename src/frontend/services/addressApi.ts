import AddressType from "../types/Entities/AddressType"

const apiUrl = "http://localhost:8080/api/address"


const findAddress = async (id: number) =>{

    try{
        const response = await fetch(`${apiUrl}/${id}`)

        if(!response.ok){
            throw new Error("Erro ao encontrar um endereço com id: " + id)
        }

        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const createAddress = async(address: AddressType) =>{
    
    try{
        const response = await fetch(`${apiUrl}/cadastro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(address)
        })

        if(!response.ok){
            throw new Error("Erro ao criar endereço!")
        }

        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }
    
}

const findAddressByUser = async(userId: number) => {

    try{
        const response = await fetch(`${apiUrl}/user/${userId}`)

        if(!response.ok){
            throw new Error(`Erro ao encontrar endereços para o usuário: ${userId}`)
        }

        return await response.json()
    
    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const findAddressByCnpj = async (cnpj: string) =>{

    try{
        const response = await fetch(`${apiUrl}/store/${cnpj}`)

        if(!response.ok){
            throw new Error(`Erro ao encontrar endereços para a loja: ${cnpj}`)
        }

        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const updateAddress = async (id: number, updadtedAddress: Partial<AddressType>) => {

    try{
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updadtedAddress)
        })

        if(!response.ok){
            throw new Error("Erro ao atualizar endereço!")
        }

        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const deleteAddress = async(id: number) =>{

    try{
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        })

        if(!response.ok){
            throw new Error("Erro ao excluir endereço!")
        }

        return await response.json()
    
    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

export {findAddress, createAddress, findAddressByUser, findAddressByCnpj, updateAddress, deleteAddress}