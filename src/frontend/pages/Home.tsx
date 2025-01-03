import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import RestaurantCard from "../features/restaurants/Components/RestaurantCard";
import styles from "../styles/Home.module.scss"; // Importando o módulo de estilo

const Home = () => {
    // Dados de restaurantes (exemplo)
    const restaurants = [
        { id: 1, name: "Restaurante A", image: "https://exemplo.com/imagem1.jpg" },
        { id: 2, name: "Restaurante B", image: "https://exemplo.com/imagem2.jpg" },
        { id: 3, name: "Restaurante C", image: "https://exemplo.com/imagem3.jpg" },
        { id: 4, name: "Restaurante D", image: "https://exemplo.com/imagem4.jpg" },
    ];

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
                <h2>Outros Restaurantes</h2>
                <div className={styles.restaurantCardsContainer}>
                    {restaurants.map(restaurant => (
                        <RestaurantCard 
                            key={restaurant.id} 
                            name={restaurant.name} 
                            image={restaurant.image} 
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;