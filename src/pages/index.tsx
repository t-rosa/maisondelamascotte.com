import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Host from "../components/Host";
import Modal from "../components/Modal";
import Visit from "../components/Visit";
import Location from "../components/Location";
import Header from "../components/Header";

const Home: NextPage = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <>
            <Head>
                <title>Maison de la mascotte - Bienvenue en provence</title>
                <meta
                    name="description"
                    content="La maison de la mascotte est un gîte située dans la campagne et entourée de prairies aux alentours de Châteaurenard à 10km d'Avignon et 35km de Nîmes. La maison a une capacité d'accueil maximale de 4 personnes et fournit des services de réception 24/24 et des services de réception 24 heures/24. Elle dispose d'une piscine privée et d'une cuisine. La maison du Lézard est à 3.1 km. Le Musée Des Arômes Et Du Parfum est à 3.5 km de Maison de la Mascotte. La villa est située à environ 22 minutes en voiture de l'aéroport d'Avignon-Provence. Toutes les chambres ont un accès direct à un pupitre d'écriture, Internet à grande vitesse et une TV à écran plat avec des chaînes satellite. La salle de bain comprend une douche et une douche à l'italienne avec un sèche-cheveux, des draps de bain et des serviettes. Une micro-ondes, une vaisselle et une bouilloire électrique sont également disponibles pour le self-catering. Un accès sans fil (Wi-Fi) est disponible dans toute la villa gratuitement. Parking privé gratuit possible sur place."
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Modal />
            <main className=" bg-zinc-50 transition-colors duration-300 dark:bg-zinc-900">
                <Header />
                <Hero />
                <Gallery />
                <Visit />
                <Host />
                <FAQ />
                <Contact />
                {/* <Location /> */}
                <Footer />
            </main>
        </>
    );
};

export default Home;
