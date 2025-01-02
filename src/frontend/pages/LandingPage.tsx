import React, { useState } from "react";
import NavBar from "../components/NavBar/index.tsx";
import Footer from "../components/Footer/index.tsx";
import { useTheme } from "../Contexts/ThemeContext.tsx";
import Banner from "../components/Banner/index.tsx";
import useDocumentTitle from "../hooks/useDocumentTitle.tsx";
import style from "../styles/Home.module.scss"

const LandingPage: React.FC = () => {

    useDocumentTitle("Cheers")
    const { theme } = useTheme()

    return (
        <>
        <div className={style.main}>
            <NavBar />

            <Banner
                title="Teste"
                backgroundImage="https://static.vecteezy.com/ti/vetor-gratis/p1/1410877-banner-de-programacao-e-codificacao-futurista-vetor.jpg"
            />

            <Footer />
        </div >
        </>
    )
}

export default LandingPage