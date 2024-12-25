import React from "react";
import ButtonType from "../../types/Button/ButtonType";
import style from "./styles.module.scss";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const buttonClass = `${style.button} ${props.className || ""}`;

  return (
    <button
      type={props.type || `button`} 
      onClick={props.onBtnClick}
      className={buttonClass}
    >
      {props.label}
    </button>
  );
};

export default Button;