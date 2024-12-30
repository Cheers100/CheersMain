import Button from "../components/Button";
import redirecionar from "../utils/redirecionar";
import styles from "../styles/Cadastro.module.scss"


export default function Cadastro() {
  return (
    <div className={styles.main}>
      <div className={styles.divTitle}>
        <div className={styles.title}>
          <h1>Cadastrar</h1>
          <hr className={styles.hr}></hr>
        </div>
        <Button
          onBtnClick={() => redirecionar('/')}
          className={styles.voltarButton}
          label="Voltar"
        ></Button>
      </div>

      <div className={styles.cards}>
        {/* Card para Cliente */}
        <div className={`${styles.card} ${styles.cardCliente}`} onClick={() => alert("Cadastrar Cliente")}>
          <iframe
            src="https://www.youtube.com/embed/xPPLbEFbCAo?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=xPPLbEFbCAo&disablekb=1&rel=0&fs=0"
            className={styles.video}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "1",
              pointerEvents: "none", // Impede a interação com o iframe
            }}
          ></iframe>



          <div className={styles.info}>
            <h2>Sou Cliente</h2>
            <p>Cadastre-se para fazer pedidos e aproveitar nossos serviços.</p>
          </div>
        </div>

        {/* Card para Restaurante */}
        <div className={`${styles.card} ${styles.cardRestaurante}`} onClick={() => alert("Cadastrar Restaurante")}>
          <div className={styles.info}>
            <h2>Sou Restaurante</h2>
            <p>Cadastre seu restaurante e comece a receber pedidos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}