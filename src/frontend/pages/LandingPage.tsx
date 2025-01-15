import React, { useState } from "react";
import NavBar from "../components/NavBar/index.tsx";
import Footer from "../components/Footer/index.tsx";
import { useTheme } from "../Contexts/ThemeContext.tsx";
import Banner from "../components/Banner/index.tsx";
import useDocumentTitle from "../hooks/useDocumentTitle.tsx";
import styles from "../styles/LandingPage.module.scss"
import LandingPageXp from "../components/LandingPageXp/index.tsx";
import Button from "../components/Button/index.tsx";
import RestaurantCard from "../features/restaurants/Components/RestaurantCard.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const LandingPage: React.FC = () => {

    useDocumentTitle("Cheers")
    const { theme } = useTheme()

    const cardsBestRestaurant = [
        {
            name: "Outback Steakhouse",
            logo: "https://iguatemi.com.br/campinas/sites/campinas/files/logo-1360166060533.png",
            stars: 4.5,
            roleType: "Casual"
        },
        {
            name: "Coco Bambu",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaTMw1qNuErqy7GjE6PTrKfnDIQ57tl45vw&s",
            stars: 4.7,
            roleType: "Família e Eventos"
        },
        {
            name: "Subway",
            logo: "https://gkpb.com.br/wp-content/uploads/2016/08/novo-logo-subway-blog-gkpb.jpg",
            stars: 4.2,
            roleType: "Fast Food"
        },
        {
            name: "Madeiro",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo_Madero.jpg",
            stars: 4.6,
            roleType: "Hamburgueria Premium"
        },
        {
            name: "Habbib's",
            logo: "https://upload.wikimedia.org/wikipedia/pt/b/b1/Novo-logo.png",
            stars: 4.0,
            roleType: "Comida Árabe Rápida"
        }
    ];

    const cardsByRoleType = [
        {
            name: "Bar do Zeca",
            logo: "https://via.placeholder.com/150",
            stars: 4.3,
            roleType: "Happy Hour",
            description: "Ambiente descontraído com música ao vivo e drinks incríveis."
        },
        {
            name: "La Trattoria",
            logo: "https://via.placeholder.com/150",
            stars: 4.8,
            roleType: "Jantar",
            description: "Restaurante italiano com pratos sofisticados e carta de vinhos selecionada."
        },
        {
            name: "Clube Infinity",
            logo: "https://via.placeholder.com/150",
            stars: 4.6,
            roleType: "Balada",
            description: "Balada premium com DJs internacionais e estrutura de ponta."
        },
        {
            name: "Café Urbano",
            logo: "https://via.placeholder.com/150",
            stars: 4.5,
            roleType: "Casual",
            description: "Café moderno com opções rápidas e ambiente acolhedor."
        },
        {
            name: "Salão Royal",
            logo: "https://via.placeholder.com/150",
            stars: 4.7,
            roleType: "Eventos",
            description: "Espaço para eventos com serviço de buffet completo e decoração temática."
        },
        {
            name: "Cantinho Vegano",
            logo: "https://via.placeholder.com/150",
            stars: 4.4,
            roleType: "Outros",
            description: "Restaurante vegano com opções saudáveis e sabor único."
        }
    ];


    return (
        <>
            <div className={styles.main}>
                <NavBar />

                <section className={styles.secao1}>
                    <div className={styles.experience}>
                        <LandingPageXp />
                    </div>
                </section>
                <section className={styles.secao2}>
                    <div className={styles.card}>
                        <img className={styles.cardImg} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0b/62/ad/seed-interior.jpg" alt="" />
                        <div className={styles.cardInfo}>
                            <p className={styles.cardText}>Busque o lugar ideal para sua noite!</p>
                            <button className={styles.cardBtn}>Encontre seu rolê</button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.cardImg} src="https://media-cdn.tripadvisor.com/media/photo-s/16/a4/d7/f1/salon.jpg" alt="" />
                        <div className={styles.cardInfo}>
                            <p className={styles.cardText}>Seu restaurante na nossa plataforma!</p>
                            <button className={styles.cardBtn}>Adicione seu restaurante</button>
                        </div>
                    </div>
                </section>
                <section className={styles.secao3}>

                    <div className={styles.itens1}>
                        <h2 className={styles.itensTittle}>Os melhores restaurantes</h2>
                        <div className={styles.cardsContainer}>
                            {cardsBestRestaurant.map(restaurant => (
                                <div key={restaurant.name} className={styles.cardRestaurant}>
                                    <img src={restaurant.logo} alt={`${restaurant.name} Logo`} className={styles.logoRestaurant} />
                                    <h3 className={styles.restaurantName}>{restaurant.name}</h3>
                                    <div className={styles.divStars}>
                                        <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                        <p className={styles.starsText}>{restaurant.stars}</p>
                                    </div>
                                    <p className={styles.roleType}>{restaurant.roleType}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className={styles.linha} />
                    <div className={styles.itens2}>
                        <h2 className={styles.itensTittle}>Os melhores por tipo de rolê</h2>
                        <div className={styles.cardsContainer}>
                            {cardsByRoleType.map((card) => (
                                <div key={card.name} className={styles.cardRoleType}>
                                    <img
                                        src={card.logo}
                                        alt={`${card.name} Logo`}
                                        className={styles.logoCard}
                                    />
                                    <h3 className={styles.cardName}>{card.name}</h3>
                                    <div className={styles.divStars}>
                                        <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                        <p className={styles.starsText}>{card.stars}</p>
                                    </div>
                                    <p className={styles.roleType}>{card.roleType}</p>
                                    <div className={styles.overlay}>
                                        <p className={styles.overlayDescription}>{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section >
                <Footer />
            </div >
        </>
    )
}

export default LandingPage