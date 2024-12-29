import React from "react";
import NavBar from "../components/NavBar/index.tsx";
import Footer from "../components/Footer/index.tsx";
import { useTheme } from "../Contexts/ThemeContext";

const Home: React.FC = () => {

    const {theme} = useTheme()

    return(
        <>
            <NavBar />

            <Footer/>
        </>
    )
}

export default Home