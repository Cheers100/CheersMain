import StoreStype from "../types/Entities/StoreType"

const apiUrl = "http://localhost:8080/api/store"


const createStore = async (store: StoreStype) =>{
    
    try{
        const response = await fetch(`${apiUrl}/cadastro`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(store)
    })

    if (!response.ok){
        throw new Error("Erro ao criar estabelecimento!") 
    }

    return await response.json()
    
    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const findStore = async (cnpj: string) =>{
    
    try{
        const response = await fetch(`${apiUrl}/${cnpj}`)

        if(!response.ok){
            throw new Error(`Loja com cnpj: ${cnpj} não encontrado`)
        }

        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const findAllStores = async () =>{
    
    try{
        const response = await fetch(`${apiUrl}`)

        if(!response.ok){
            throw new Error(`Nenhuma loja encontrada!`)
        }

        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const updateStore = async (cnpj: string, updadtedStore: Partial<StoreStype>)=>{

    try{
        const response = await fetch(`${apiUrl}/${cnpj}`, {
            method: "PUT",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(updadtedStore)
        })

        if(!response.ok){
            throw new Error("Erro ao atualizar loja!")
        }

        return await response.json()
    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

const deleteStore = async (cnpj: string) => {

    try{
        const response = await fetch(`${apiUrl}/${cnpj}`, {
            method: "DELETE"
        })

        if(!response.ok){
            throw new Error("Erro ao deletar o estabelecimento")
        }

        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}