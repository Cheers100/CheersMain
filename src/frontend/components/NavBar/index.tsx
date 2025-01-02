import style from "./styles.module.scss";
import Button from "../Button/index.tsx";
import useChangeTheme from "../../hooks/useChangeTheme.tsx";
import redirecionar from "../../utils/redirecionar.ts";
import "@fontsource/poppins/400.css";

export default function NavBar() {

  const { theme, toggleTheme } = useChangeTheme();

  return (
    <div className={style.main}>
      <div className={style.menuEsquerda}>
      <a href="#" className={style.tituloNavbar}>
        Cheers
      </a>
      </div>
      <div className={style.menuDireita}>

        <a className={style.menuLink} onClick={() => redirecionar("/login")} >Login</a>
        <a className={style.menuLink} onClick={() => redirecionar("/cadastro")} >Cadastro</a>
        <a className={style.menuLink} onClick={toggleTheme}>Mudar Tema</a>
      </div>
    </div>
  );
}
