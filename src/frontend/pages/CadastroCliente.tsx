import style from '../styles/CadastroCliente.module.scss'
import Form from '../components/Forms/CadastroForm/cadastroClienteForm'
import FormData from '../types/FormData/CadastroClienteForm';

export default function CadastroCliente() {

    const handleFormSubmit = (data: FormData) => {
        console.log("Form data submitted: ", data);

    };

    return (
        <div className={style.main}>
            <Form onSubmit={handleFormSubmit}></Form>
        </div>
    )
}