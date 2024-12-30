import React from "react";
import style from "./progressBar.module.scss";
import ProgressBarProps from "../../types/ProgressBar/ProgressBar";

const ProgressBar: React.FC<ProgressBarProps> = ({ etapas, etapaAtual }) => {
  return (
    <div className={style.progressBar}>
      {etapas.map((etapa, index) => (
        <div
          key={index}
          className={`${style.etapa} ${
            index <= etapaAtual ? style.active : ""
          }`}
        >
          <div className={style.circle}>{index + 1}</div>
          <span>{etapa}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
