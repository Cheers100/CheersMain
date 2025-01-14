import style from "./cadastroFinalizacaoForm.module.scss";
import FormData from "../../../../../types/FormData/CadastroFinalizacaoForm";
import { useState } from "react";

interface FormProps {
    onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = (props) => {
    const [formData, setFormData] = useState<FormData>({
        tipoRole: "",
        tipoCardapio: "",
    });

    const handleCardClick = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(formData);
    };

    const cardapios = [
        { id: "vegano", label: "Vegano", image: "https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/cardapio-vegano-cardapio-vegetariano-diferencas.jpg?itok=oUX7YOJ7" },
        { id: "vegetariano", label: "Vegetariano", image: "https://gooutside.com.br/wp-content/uploads/sites/3/2016/03/vegetar.jpg" },
        { id: "carnes", label: "Carnes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVWKb86pv8zD9f_tGcM12KFqeeL7TeU6H0w&s" },
        { id: "bebidas", label: "Bebidas", image: "https://careclub.com.br/wp-content/uploads/2022/09/As-Principais-Diferenc%CC%A7as-entre-as-Bebidas-Alcoo%CC%81licas.jpg" },
        { id: "doces", label: "Doces", image: "https://ravan.com.br/wp-content/uploads/2022/01/Dicas-para-vender-mais-sobremesas-no-seu-restaurante.jpg" },
        { id: "massas", label: "Massas", image: "https://siterg.uol.com.br/wp-content/uploads/2020/10/pasta-party-1500.jpg" },
        { id: "frutos-do-mar", label: "Frutos do Mar", image: "https://static.baratocoletivo.com.br/2017/0831/oferta_15042161456977_Ofertafrutosdomar.jpg" },
        { id: "sanduiches", label: "Sanduíches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFCw3TOR2JlSrtiURg7bgKREtozYsfBaO9A&s" },
        { id: "cafeteria", label: "Cafeteria", image: "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/cafeteria-1920w.jpg" },
        { id: "pizza", label: "Pizza", image: "https://www.skymsen.com/ckfinder/userfiles/images/os%20melhores%20Tipos%20de%20massa%20de%20pizza.jpg" },
    ];

    const roles = [
        { id: "happy-hour", label: "Happy Hour", image: "https://blog.glassdoor.com/site-br/wp-content/uploads/sites/13/2019/06/happyhour-1.jpg" },
        { id: "jantar", label: "Jantar", image: "https://soubh.uai.com.br/wp-content/uploads/2023/11/main_ad13b45f-d4c0-4d8c-ab3f-6847cbdce645.jpg" },
        { id: "balada", label: "Balada", image: "https://www.portalin.com.br/wp-content/uploads/2019/11/casamento-de-nicole-vasconcelos-e-pedro-paulo-negrao-57.jpg" },
        { id: "casual", label: "Casual", image: "https://www.zapimoveis.com.br/blog/wp-content/uploads/2024/07/bares-na-vila-mariana-para-conhecer-722x406.jpg" },
        { id: "evento", label: "Evento Especial", image: "https://lapisdenoiva.com/wp-content/uploads/2024/05/restaurante-para-casamento-18.jpg" },
    ];

    return (
        <form className={style.formContainer}>
            <section className={style.section}>
                <h2>O que você quer comer?</h2>
                <div className={style.cardsContainer}>
                    {cardapios.map((cardapio) => (
                        <div
                            key={cardapio.id}
                            className={`${style.card} ${formData.tipoCardapio === cardapio.id ? style.selected : ""}`}
                            style={{ backgroundImage: `url(${cardapio.image})` }}
                            onClick={() => handleCardClick("tipoCardapio", cardapio.id)}
                        >
                            <span>{cardapio.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className={style.section}>
                <h2>Qual seu tipo de rolê?</h2>
                <div className={style.cardsContainer}>
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            className={`${style.card} ${formData.tipoRole === role.id ? style.selected : ""}`}
                            style={{ backgroundImage: `url(${role.image})` }}
                            onClick={() => handleCardClick("tipoRole", role.id)}
                        >
                            <span>{role.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <button type="submit" onSubmit={handleSubmit} className={style.submitButton}>
                Finalizar
            </button>
        </form>
    );
};

export default Form;
