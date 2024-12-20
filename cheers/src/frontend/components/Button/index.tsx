import ButtonType from "../../types/Button/ButtonType";
import style from "./styles.module.scss"

const Button: React.FC<ButtonType> = (props: ButtonType) => {

    const buttonClass = `${style.button} ${props.className || ""}`;

  return (
    <div onClick={props.onBtnClick} className={buttonClass}>
      <p>{props.label}</p>  
    </div>
  );
};

export default Button;
