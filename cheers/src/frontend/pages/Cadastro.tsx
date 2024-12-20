import Button from "../components/Button";
import redirecionar from "../utils/redirecionar";
import styles from "../styles/Cadastro.module.scss"


export default function Cadastro(){
    return(
        <>
        <div className={styles.main}>
            <div className={styles.cadastro}>
                <section className={styles.forms}>
                        <h1>Sing Up</h1>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Senha: </label>
                        <input type="password" name="password" id="password" />
                        <Button label="Continuar" onBtnClick={() => ""}/>
                    </form>
                    <a href="/cadastro">Já tem uma conta? Login</a>
                </section>
            </div>
            <section className={styles.welcome}>
                <h2>Bem Vindo!</h2>
            </section>
        </div>

        </>
    )
}