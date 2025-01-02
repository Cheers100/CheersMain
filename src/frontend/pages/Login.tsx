import React from "react";
import Button from "../components/Button";
import styles from "../styles/Login.module.scss"
import { useTheme } from "../Contexts/ThemeContext";
import Form from "../components/Forms/LoginForm/loginForm";
import FormData from "../types/FormData/LoginForm";
import useDocumentTitle from "../hooks/useDocumentTitle";
import redirecionar from "../utils/redirecionar";

export default function Login() {
    const { toggleTheme } = useTheme()
    useDocumentTitle('Cheers - Login')

    const handleFormSubmit = (data: FormData) => {
        console.log("Form data submitted: ", data);
        redirecionar("/home")
      };

    return (
        <>
            <div className={`${styles.main} `}>

                <div className={styles.login}>
                    <section className={styles.forms}>
                        <h1>Login</h1>
                        <Form onSubmit={handleFormSubmit}/>

                        <p>Não tem uma conta? <a href="/cadastro">Sign Up</a></p>
                    </section>
                </div>
                <section className={styles.welcome}>
                    <div>
                        <h2>Bem Vindo de Volta!</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quia debitis similique ducimus tenetur nulla itaque sequi cupiditate! Sapiente nostrum in modi aliquam asperiores voluptatum fuga mollitia blanditiis quam harum?</p>
                    </div>
                </section>

            </div>

        </>
    )
}
