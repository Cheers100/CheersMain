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

import Carousel from "../components/Carousel/index.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { bestRestaurantsData } from "../data/LandingPageData/BestRestaurantsData.tsx";
import { bestByRoleTypeData } from "../data/LandingPageData/bestByRoleType.tsx";
import { carouselData } from "../data/LandingPageData/carouselData.tsx";


const LandingPage: React.FC = () => {

    useDocumentTitle("Cheers")
    const { theme } = useTheme()

    const bestRestaurants = bestRestaurantsData.restaurants || []

    const bestByRoleType = bestByRoleTypeData.restaurants || []

    const carouselSlides = carouselData.slides || []


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
                            {bestRestaurants.map(restaurant => (
                                <div key={restaurant.name} className={styles.cardRestaurant}>
                                    <div className={styles.divLogo}>
                                        <img src={restaurant.logo} alt={`${restaurant.name} Logo`} className={styles.logoRestaurant} />
                                        <h3 className={styles.restaurantName}>{restaurant.name}</h3>
                                    </div>
                                    <div className={styles.divStars}>
                                        <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                                        <p className={styles.starsText}>{restaurant.stars}</p>
                                    </div>
                                    <p className={styles.roleType}>{restaurant.roleType}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Carousel items={carouselSlides} customStyles={{}} customSettings={{
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 2300,
                        pauseOnHover: true,
                        dots: true,
                        infinite: true,
                    }} />

                    <hr className={styles.linha} />
                    <div className={styles.itens2}>
                        <h2 className={styles.itensTittle}>Os melhores por tipo de rolê</h2>
                        <div className={styles.cardsContainer}>
                            {bestByRoleType.map((card) => (
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