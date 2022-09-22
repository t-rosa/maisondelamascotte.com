import type { NextPage } from "next";
import Head from "next/head";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maison de la mascotte - Bienvenue en provence</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <Hero />
        <Gallery />
      </main>
    </>
  );
};

export default Home;
