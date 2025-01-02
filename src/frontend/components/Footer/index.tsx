import React, { useState } from "react";
import styles from "./styles.module.scss"; // Importe os estilos criados
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import ModalInformativo from "../Modal/ModalInformativo";

function Footer() {

  const [isPerguntasFrequentes, setPerguntasFrequentes] = useState(false)

  return (
    <div className={styles.footer}>
      

      {/* Conteúdo do Footer */}
      <div className={styles.content}>
        {/* Coluna 1 */}
        <div className={styles.column}>
          <h2>Sobre a Cheers</h2>
          <ul>
            <li>Quem Somos</li>
            <li>Fale Conosco</li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className={`${styles.column}`}>
          <h2>Redes Sociais</h2>
          <ul className={`${styles.sociais}`}>
            <li><FontAwesomeIcon icon={faInstagram} size="2x"/></li>
            <li> <FontAwesomeIcon icon={faFacebook} size="2x"/> </li>
            <li><FontAwesomeIcon icon={faTwitter} size="2x"/></li>
          </ul>
        </div>


        {/* Coluna 4 */}
        <div className={styles.column}>
          <h2>Privacidade</h2>
          <ul>
            <li>Política de Segurança</li>
            <li>Segurança</li>
            <li>Termos de Uso</li>
          </ul>
        </div>

        {/* Coluna 5 */}
        <div className={styles.column}>
          <h2>Sobre a plataforma</h2>
          <ul>
            <li onClick={() => setPerguntasFrequentes(true)}>Perguntas Frequentes</li>
          </ul>
        </div>
      </div>

      {/* Rodapé com Copyright */}
      <div className={styles.copyright}>
        <p>&copy; 2024 Voogle. Todos os direitos reservados.</p>
      </div>


      {isPerguntasFrequentes &&
      <ModalInformativo
      title="Perguntas Frequentes"
      show={isPerguntasFrequentes}
      text="Teste"
      onClose={() => setPerguntasFrequentes(false)}
      />
    }


    </div>
    
  );
}

export default Footer;