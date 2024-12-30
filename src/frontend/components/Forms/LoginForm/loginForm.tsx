import { useState } from "react";
import FormData from "../../../types/FormData/LoginForm.ts"
import Button from "../../Button/index.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import style from "./loginForm.module.scss"

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
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
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="A senha deve ter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número."
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity(
              "Digite um email válido!"
            );
          }}
          onInput={(e) => e.currentTarget.setCustomValidity("")}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className={style.input2}>
        <label htmlFor="password">Senha</label>
        <div className={style.containerInputSenha}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Senha"
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}"
            value={formData.password}
            onChange={handleChange}
            required
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity(
                "A senha deve ter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número."
              );
            }}
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />

          <button
            type="button"
            className={style.eyeButton}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
          </button>
        </div>
      </div>

      <Button
        label='Continuar'
        type="submit"
      />

    </form>
  );
};

export default Form;