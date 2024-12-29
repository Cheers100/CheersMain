import React from "react";
import NavBar from "../components/NavBar/index.tsx";
import Footer from "../components/Footer/index.tsx";
import { useTheme } from "../Contexts/ThemeContext";
import Banner from "../components/Banner/index.tsx";

const Home: React.FC = () => {

    const {theme} = useTheme()

    return(
        <>
            <NavBar />
            <Banner
            title="Teste"
            backgroundImage="https://static.vecteezy.com/ti/vetor-gratis/p1/1410877-banner-de-programacao-e-codificacao-futurista-vetor.jpg"
            />
            <Footer/>
        </>
    )
}

export default Home