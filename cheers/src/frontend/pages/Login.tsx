import React from "react";
import Button from "../components/Button";
import redirecionar from "../utils/redirecionar";
import styles from "../styles/Login.module.scss"
import useChangeTheme from "../hooks/useChangeTheme";
import { useTheme } from "../Contexts/ThemeContext";

export default function Login() {
    const { toggleTheme } = useTheme()
    

    return (
        <>
            <div className={`${styles.main} `}>

                <div className={styles.login}>
                    <section className={styles.forms}>
                        <h1>Login</h1>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                            <label htmlFor="password">Senha: </label>
                            <input type="password" name="password" id="password" />
                            <Button label="Continuar" onBtnClick={() => ""} />
                        </form>
                        
                        <button onClick={toggleTheme} >
                            Mudar para Escuro
                        </button>

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
