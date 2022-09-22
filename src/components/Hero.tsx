import Image from "next/future/image";
import Link from "next/link";
import hero from "../assets/hero.webp";

function Hero() {
  return (
    <section
      id="hero"
      className="h-full grid grid-rows-[5rem_1fr_1rem] grid-cols-[1rem_1fr_1rem] sm:grid-rows-[5rem_1fr_5rem] sm:grid-cols-[5rem_1fr_5rem]"
    >
      <header className="col-[2/3] row-[1/2]">
        <nav className="grid place-items-center w-full h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl border-b border-gray-400">
            Maison de la mascotte
          </h2>
        </nav>
      </header>
      <div className="relative col-[2/3] row-[2/3] bg-cover bg-no-repeat  bg-center border border-gray-300">
        <Image
          src={hero}
          priority
          fill
          alt=""
          className="-z-10 object-cover"
          placeholder="blur"
        />
        <div className="grid place-items-center h-full">
          <div className="grid place-items-center gap-9">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-800">
              Bienvenue en Provence
            </h1>
            <Link href="#gallery" passHref>
              <a
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-800 border border-gray-600 py-2 px-6 
                  hover:scale-105 hover:shadow-lg duration-300 font-bold bg-blue-200 bg-opacity-20"
              >
                Découvrir
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
