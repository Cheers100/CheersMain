import React, { useState } from "react";
import NavBar from "../components/NavBar/index.tsx";
import Footer from "../components/Footer/index.tsx";
import { useTheme } from "../Contexts/ThemeContext.tsx";
import Banner from "../components/Banner/index.tsx";
import useDocumentTitle from "../hooks/useDocumentTitle.tsx";
import styles from "../styles/LandingPage.module.scss"
import LandingPageXp from "../components/LandingPageXp/index.tsx";

const LandingPage: React.FC = () => {

    useDocumentTitle("Cheers")
    const { theme } = useTheme()

    return (
        <>
        <div className={styles.main}>
            <NavBar />

            <h1 className={styles.title}>Encontre o seu rolê ideal</h1>
            <div className={styles.experience}>
                <LandingPageXp/>
            </div>

            <Footer />
        </div >
        </>
    )
}

export default LandingPage