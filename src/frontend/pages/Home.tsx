import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RestaurantCard from "../features/restaurants/Components/RestaurantCard";
import styles from "../styles/Home.module.scss";
import { HomeSectionsData } from "../data/HomeData/HomeSectionsData";
import { HomeSection } from "../types/Section/HomeSection";
import Carousel from "../components/Carousel";

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
                        <Carousel items={section.items} customSettings={{

                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 10,
                            slidesToScroll: 1,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 10,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 7,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 5,
                                    },
                                },
                            ],

                        }}

                            customStyles={{
                                container: 'customContainer',
                                itemContainer: 'customItemContainer',
                                item: 'customItem',
                                icon: 'customIcon',
                                img: 'customImg',
                                title: 'customTitle',
                                description: 'customDescription',
                            }} />

                    </div>
                ))}

            </section>

            <Footer />
        </>
    );
};

export default Home;