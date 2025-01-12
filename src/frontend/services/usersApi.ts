import UserType from "../types/Entities/UserType"

const apiUrl = "http://localhost:8080/api/users"

const createUser = async (user: UserType) =>{
    
    try{
        const response = await fetch(`${apiUrl}/cadastro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user) 
        })

        if(!response.ok) throw new Error("Erro ao criar usuário");

        return await response.json()
    }catch(error){
        console.log("Erro: ", error)
        throw error
    }

}

// Login de usuário
const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Erro ao logar usuário");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  };
  
  // Atualizar usuário
const updateUser = async (id: string, updatedData: Partial<UserType>) => {
    try {
      const response = await fetch(`${apiUrl}/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) throw new Error("Erro ao atualizar usuário");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
};
  
  // Deletar usuário
const deleteUser = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}/delete/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao deletar usuário");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
};
  
  // Buscar usuário
const findUser = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}/find/${id}`, {
        method: "GET",
      });
      if (!response.ok) throw new Error("Erro ao buscar usuário");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
};
  

export { createUser, loginUser, updateUser, deleteUser, findUser };