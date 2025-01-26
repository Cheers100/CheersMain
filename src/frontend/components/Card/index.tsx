import styles from "./styles.module.scss"
import { CardType } from "../../types/Card/CardType"
import Button from "../Button"

const Card: React.FC<CardType> = (items, customStyles) => {
    return (
        <div className={styles.container}>
            {items.map((item, index) => (
                <div key={index} className={styles.itemContainer}>
                    {item.image && (
                        <img
                            src={item.image}
                            alt={item.title || 'Card Image'}
                            className={styles.itemImage}
                        />
                    )}

                    <div className={styles.info}>
                        {item.title && (
                            <h1 className={`${styles.title} ${customStyles?.title}`}>{item.title}</h1>
                        )}

                        {item.description && (
                            <p className={`${styles.description} ${customStyles?.description}`}>{item.description}</p>
                        )}

                        {item.buttons && item.buttons.length > 0 && (
                            <div className={styles.btnContainer}>
                                {item.buttons.map((button, btnIndex) => (
                                    <Button
                                        key={btnIndex}
                                        label={button.label}
                                        onBtnClick={button.onClick}
                                        className={styles.btn}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )

}
export default Card