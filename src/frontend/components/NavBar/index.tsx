import style from "./styles.module.scss";
import Button from "../Button/index.tsx";
import useChangeTheme from "../../hooks/useChangeTheme.tsx";
import redirecionar from "../../utils/redirecionar.ts";

export default function NavBar() {
    
  const { theme, toggleTheme } = useChangeTheme();

  return (
    <div className={style.main}>
      <div className={style.menuEsquerda}></div>

      <div className={style.menuDireita}>
        <a href="#" className={style.tituloNavbar}>
          Cheers
        </a>
        <Button label="Login" className={style.buttonCadastrar} onBtnClick={() => redirecionar("/login")} />
        <Button label="Cadastrar" className={style.buttonCadastrar} onBtnClick={() => redirecionar("/cadastro")} />
        <Button label="Mudar Tema" onBtnClick={toggleTheme} />
      </div>
    </div>
  );
}
