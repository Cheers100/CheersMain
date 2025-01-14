import style from '../styles/CadastroCliente.module.scss'
import CadastroClienteForm from '../components/Forms/CadastroForm/CadastroClienteForm/cadastroClienteForm'
import CadastroEnderecoForm from '../components/Forms/CadastroForm/CadastroEnderecoForm/cadastroEnderecoForm';
import CadastroFinalizacao from '../components/Forms/CadastroForm/CadastroFinalizacaoForm/cadastroFinalizacaoForm'
import FormData from '../types/FormData/CadastroClienteForm';
import ProgressBar from '../components/ProgressBar/progressBar';
import { useState } from 'react';

export default function CadastroCliente() {

    const etapas = ["Dados Pessoais", "Endereço", "Finalização"];
    const [etapaAtual, setEtapaAtual] = useState(0);

    const proximaEtapa = () => {
        if (etapaAtual < etapas.length - 1) {
            setEtapaAtual(etapaAtual + 1);
        }
    };

    const voltarEtapa = () => {
        if (etapaAtual > 0) {
            setEtapaAtual(etapaAtual - 1);
        }
    };

    const carregarEtapa = () => {
        switch (etapaAtual) {
            case 0:
                return <CadastroClienteForm onSubmit={() => proximaEtapa()} />;
            case 1:
                return <CadastroEnderecoForm onSubmit={proximaEtapa} />;
            case 2:
                return <CadastroFinalizacao onSubmit={() => handleFormSubmit}/>;
            default:
                return null;
        }
    };

    const handleFormSubmit = (data: FormData) => {
        console.log("Form data submitted: ", data);

    };

    const handleNext = (data: FormData) => {
        let atributos = Object.keys(data); 
        let pares: Record<string, string> = {}; 

        atributos.forEach((item) => {
            pares[item] = data[item as keyof FormData]; 
        });

        return pares;
    };

    return (
        <div className={style.main}>
            <div className={style.header}>
                <h1 className={style.title}>Cadastro de Cliente</h1>
                <p className={style.description}>
                    Complete as etapas para finalizar o seu cadastro.
                    Insira os dados corretamente para continuar.
                </p>
            </div>
            <div className={style.divProgressBar}>
                <ProgressBar etapas={etapas} etapaAtual={etapaAtual}></ProgressBar>
            </div>
            <div className={style.formularios}>
                {carregarEtapa()}
            </div>
            <div className={style.navigationButtons}>
                {etapaAtual > 0 && (
                    <button onClick={voltarEtapa} className={style.button}>
                        Voltar
                    </button>
                )}
                {etapaAtual < etapas.length - 1 && (
                    <button onClick={proximaEtapa} className={style.button}>
                        Próximo
                    </button>
                )}
            </div>
        </div>
    )
}