import { useTheme } from "next-themes";
import Image from "next/future/image";
import Link from "next/link";
import hero from "../assets/hero.webp";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function Hero() {
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <section
      id="hero"
      className="h-full grid grid-rows-[5rem_1fr_1rem] grid-cols-[1rem_1fr_1rem] sm:grid-rows-[5rem_1fr_5rem] sm:grid-cols-[5rem_1fr_5rem]"
    >
      <button
        className="col-[2/3] row-[1/2] justify-self-end z-10 w-fit h-fit self-center rounded-full p-2 dark:hover:bg-zinc-800 hover:bg-gray-100 duration-200"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <MoonIcon
            strokeWidth={1}
            className="w-6 h-6 hover:rotate-[360deg] duration-700"
          />
        ) : (
          <SunIcon
            strokeWidth={1}
            className="w-6 h-6 hover:rotate-[360deg] duration-700"
          />
        )}
      </button>
      <header className="justify-self-start sm:justify-self-center col-[2/3] pl-4 row-[1/2]">
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
            <div className="flex flex-col md:flex-row gap-3">
              <Link href="#gallery" passHref>
                <a
                  className="
                     text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-800 border border-gray-600 py-2 px-6
                    hover:scale-105 hover:shadow-lg duration-300 font-bold bg-blue-200 bg-opacity-50"
                >
                  Découvrir
                </a>
              </Link>
              <Link href="#contact" passHref>
                <a
                  className="
                    text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-800 border border-gray-600 py-2 px-6
                    hover:scale-105 hover:shadow-lg duration-300 font-bold bg-blue-200 bg-opacity-50"
                >
                  Contacter
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
