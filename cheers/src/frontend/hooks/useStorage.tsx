import { useEffect, useState } from "react";

const useStorage = (key:string) =>{
    const [storedValue, setStoreValue] = useState<string | null>(null)
    useEffect(() => {
        const value = window.localStorage.getItem(key)
        setStoreValue(value)
    }, [key])

    const updateValue = (newValue: string) =>{
        window.localStorage.setItem(key, newValue)
        setStoreValue(newValue)
    }

    const removeValue = () =>{
        setStoreValue(null)
    }

    return {storedValue, updateValue, removeValue}
}

export default useStorage