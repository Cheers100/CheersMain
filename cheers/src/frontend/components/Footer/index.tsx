import React from "react";
import styles from "./styles.module.scss"; // Importe os estilos criados
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className={styles.footer}>
      {/* Onda Superior */}
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={styles.waveSvg}
        >
          <path
            d="M0,0V46.29c120,22,240,22,360,0S600,2,720,24s240,22,360,0S1200,2,1200,2V0Z"
          ></path>
        </svg>
      </div>

      {/* Conteúdo do Footer */}
      <div className={styles.content}>
        {/* Coluna 1 */}
        <div className={styles.column}>
          <h2>Sobre a **Name**</h2>
          <ul>
            <li>Quem Somos</li>
            <li>Fale Conosco</li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className={`${styles.column}`}>
          <h2>Redes Sociais</h2>
          <ul className={`${styles.sociais}`}>
            <li><FontAwesomeIcon icon={faInstagram}/></li>
            <li> <FontAwesomeIcon icon={faFacebook}/> </li>
            <li><FontAwesomeIcon icon={faTwitter}/></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className={styles.column}>
          <h2>Tipos de Seguro</h2>
          <ul>
            <li>Seguro 1</li>
            <li>Seguro 2</li>
            <li>Seguro 3</li>
            <li>Seguro 4</li>
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
            <li>Perguntas Frequentes</li>
          </ul>
        </div>
      </div>

      {/* Rodapé com Copyright */}
      <div className={styles.copyright}>
        <p>&copy; 2024 Voogle. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;