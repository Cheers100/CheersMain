import ModalProps from "../../../types/Modal/ModalProps"
import styles from "./index.module.scss"

const ModalInformativo: React.FC<ModalProps> = (props) =>{
    if(!props.show) return null;

    return(
        <div className={styles.overlay}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                    <button onClick={() => props.onClose()}>x</button>
                </div>

                <div className={styles.body}>
                    <p>{props.text}</p>
                </div>

                <div className={styles.footer}>
                    <button onClick={() => props.onClose()}>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalInformativo