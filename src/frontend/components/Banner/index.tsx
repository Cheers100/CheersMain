import React from "react";
import styles from "./index.module.scss";
import BannerProps from "../../types/Banner/BannerType";

const Banner: React.FC<BannerProps> = ({ title, backgroundImage }) => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};

export default Banner;