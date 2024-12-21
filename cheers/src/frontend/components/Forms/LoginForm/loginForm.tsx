import { useState } from "react";
import  FormData  from "../../../types/FormData/LoginForm.ts"

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
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
    onSubmit(formData); 
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
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;