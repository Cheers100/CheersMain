import React from "react";
import Button from "../components/Button";
import styles from "../styles/Login.module.scss"
import { useTheme } from "../Contexts/ThemeContext";
import Form from "../components/Forms/LoginForm/loginForm";
import FormData from "../types/FormData/LoginForm";

export default function Login() {
    const { toggleTheme } = useTheme()
    
    const handleFormSubmit = (data: FormData) => {
        console.log("Form data submitted: ", data);
        
      };

    return (
        <>
            <div className={`${styles.main} `}>

                <div className={styles.login}>
                    <section className={styles.forms}>
                        <h1>Login</h1>
                        <Form onSubmit={handleFormSubmit}/>

                        <a href="/cadastro">Não tem uma conta? Sign Up</a>
                    </section>
                </div>
                <section className={styles.welcome}>
                    <h2>Bem Vindo de Volta!</h2>
                </section>

            </div>

        </>
    )
}
