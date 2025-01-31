import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RestaurantCard from "../features/restaurants/Components/RestaurantCard";
import styles from "../styles/Home.module.scss";
import { HomeSectionsData } from "../data/HomeData/HomeSectionsData";
import { HomeSection } from "../types/Section/HomeSection";

import CarouselSecoes from "../features/Carousel/index";

const Home = () => {


    return (
        <>
            <NavBar />
            {/* Banner do restaurante em destaque */}
            <Banner
                title="Restaurante em Destaque"
                backgroundImage="https://img.freepik.com/vetores-premium/banner-da-web-de-promocao-de-menu-de-restaurante-de-fast-food-ou-folheto-de-marketing-de-midia-social_592861-97.jpg?semt=ais_hybrid"
            />

            {/* Seção de outros restaurantes */}
            <section className={styles.restaurantsSection}>

                {HomeSectionsData.map((section: HomeSection, index: number) => (
                    <div key={index} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.sectionTitle}</h2>
                        <div className={styles.carouselContainer}>
                            <CarouselSecoes items={section.items}
                                customSettings={{
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                }}

                                customStyles={{
                                    container: "meu-container",
                                    swiper: "meu-swiper",
                                    itemContainer: "meu-item-container",
                                    item: "meu-item",
                                    img: "minha-imagem",
                                    title: "meu-titulo",
                                    description: "minha-descricao",
                                    btnContainer: "meu-botao-container",
                                }} />
                        </div>
                    </div>
                ))}

            </section>

            <Footer />
        </>
    );
};

export default Home;