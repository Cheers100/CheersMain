import Banner from "../components/Banner"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Home = () =>{
    return(
        <>
        <NavBar/>
        <Banner
        title="Loja 1"
        backgroundImage="https://img.freepik.com/vetores-premium/banner-da-web-de-promocao-de-menu-de-restaurante-de-fast-food-ou-folheto-de-marketing-de-midia-social_592861-97.jpg?semt=ais_hybrid"
        ></Banner>

        <Footer/>
        </>
    )
}

export default Home

