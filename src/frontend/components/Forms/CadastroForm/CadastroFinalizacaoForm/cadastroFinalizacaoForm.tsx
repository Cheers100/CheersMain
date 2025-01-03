import style from "./cadastroFinalizacaoForm.module.scss"
import FormData from "../../../../types/FormData/CadastroFinalizacaoForm";
import { useState } from "react";

interface FormProps {
    onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = (props) => {

const [formData, setFormData] = useState<FormData>({
    tipoRole: "",
    tipoCardapio: "",
})
}

export default Form