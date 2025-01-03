const apiCep = "http://viacep.com.br/ws/"

function verificarCep(cep: string) {
    const regex = /^[0-9]{8}$/;
    return regex.test(cep);
}

async function getDados(cep: string){
    const cepValid = verificarCep(cep)
    if(!cepValid){
        return
    }

    const response = `${apiCep}${cep}/json/`;

    if(response){

    try {
        const dados = await fetch(apiCep);
        const endereco1 = await dados.json();

        const address = {
            cidade: endereco1.localidade || "",
            estado: endereco1.uf || "",
            endereco: endereco1.logradouro || "",
            bairro: endereco1.bairro || "",
            complemento: endereco1.complemento || "",
        }

        return address

    } catch (erro) {
        alert("Cep não encontrado!");
        console.error(erro);
    }
}
}

export default getDados
