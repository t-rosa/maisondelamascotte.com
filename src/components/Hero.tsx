import Image from "next/image";
import hero from "../assets/hero.webp";

function Hero() {
  return (
    <section
      id="hero"
      className="mt-20 grid h-[calc(100vh-5rem)] items-center py-14 px-3 sm:px-10 md:px-14 lg:px-20"
    >
      <div className="relative h-full border-2 border-indigo-300 shadow-xl dark:border-indigo-400">
        <Image
          src={hero}
          priority
          alt="Champ de lavande"
          fill
          className="object-cover"
          placeholder="blur"
        />
        <div className="relative grid h-full place-items-center">
          <div className="grid place-items-center gap-y-6">
            <h1 className="text-4xl text-gray-800 sm:text-6xl md:text-7xl lg:text-8xl">
              Bienvenue en Provence
            </h1>
            <div className="flex flex-col gap-3 md:flex-row">
              <a
                href="#gallery"
                className="
                     border border-gray-600 bg-blue-200 bg-opacity-50 py-2 px-6 text-center text-3xl font-bold text-gray-800
                    duration-300 hover:scale-105 hover:shadow-lg sm:text-4xl md:text-5xl lg:text-5xl"
              >
                Découvrir
              </a>
              <a
                href="#contact"
                className="
                    border border-gray-600 bg-blue-200 bg-opacity-50 py-2 px-6 text-center text-3xl font-bold text-gray-800
                    duration-300 hover:scale-105 hover:shadow-lg sm:text-4xl md:text-5xl lg:text-5xl"
              >
                Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
