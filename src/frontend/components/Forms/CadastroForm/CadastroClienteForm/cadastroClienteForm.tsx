import { useState } from "react";
import FormData from "../../../../types/FormData/CadastroClienteForm.ts";
import Button from "../../../Button/index.tsx";
import style from "./cadastroClienteForm.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    sobrenome: "",
    phone:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [phone, setPhone] = useState("");

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
      name: "",
      sobrenome: "",
      phone:"",
      email: "",
      password: "",
      confirmPassword: "",
      
    });
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.inputs1}>
        <div className={style.input}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Informe seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input}>
          <label htmlFor="sobrenome">Sobrenome</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            placeholder="Informe seu sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={style.inputs2}>
        <div className={style.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Informe seu email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Digite um email válido!"
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity("Digite um email válido!")
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={style.inputs3}>
        <div className={style.input}>
          <label htmlFor="telephone">Telefone</label>
          <PhoneInput
            country={'br'}
            value={phone}
            onChange={setPhone}
            placeholder="Informe seu telefone"
            inputProps={{
              name: 'phone',
              required: true,
            }}
            containerClass={style.phoneContainer}
            inputClass={style.phoneInput}
          />
        </div>
      </div>

      <div className={style.inputs4}>
        <div className={style.input}>
          <label htmlFor="password">Senha</label>
          <div className={style.containerInputSenha}>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Digite sua senha"
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}"
              value={formData.password}
              onChange={handleChange}
              required
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "A senha deve ter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número."
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
            <button
              type="button"
              className={style.eyeButton}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <FontAwesomeIcon
                icon={isPasswordVisible ? faEyeSlash : faEye}
              />
            </button>
          </div>
        </div>
        <div className={style.input}>
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <div className={style.containerInputSenha}>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Repita sua senha"
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "A senha deve ter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número."
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              
            />
            <button
              type="button"
              className={style.eyeButton}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <FontAwesomeIcon
                icon={isPasswordVisible ? faEyeSlash : faEye}
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
