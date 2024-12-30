import style from './cadastroEnderecoForm.module.scss'
import FormData from '../../../../types/FormData/CadastroEnderecoForm';
import { useState } from 'react';

interface FormProps {
    onSubmit: (data: FormData) => void;
}
const Form: React.FC<FormProps> = (props) => {
    const [formData, setFormData] = useState<FormData>({
        cep: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(formData);
        setFormData({
            cep: "",
        });
    };

    return (
        <div>Cheguei</div>
    )
}

export default Form