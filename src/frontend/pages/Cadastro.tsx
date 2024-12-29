import Button from "../components/Button";
import redirecionar from "../utils/redirecionar";
import styles from "../styles/Cadastro.module.scss"


export default function Cadastro(){
    return (
        <div className={styles.main}>
          <h1>Cadastrar</h1>
          <div className={styles.cards}>
            {/* Card para Cliente */}
            <section className={styles.card} onClick={() => alert("Cadastrar Cliente")}>
              <h2>Sou Cliente</h2>
              <p>Cadastre-se para fazer pedidos e aproveitar nossos serviços.</p>
            </section>
    
            {/* Card para Restaurante */}
            <section className={styles.card} onClick={() => alert("Cadastrar Restaurante")}>
              <h2>Sou Restaurante</h2>
              <p>Cadastre seu restaurante e comece a receber pedidos.</p>
            </section>
          </div>
        </div>
      );
}