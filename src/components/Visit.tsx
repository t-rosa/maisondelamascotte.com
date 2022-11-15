import Image from "next/image";
import Link from "next/link";

function Visit() {
  return (
    <section
      id="visit"
      className="grid grid-cols-[1rem_auto_1rem] grid-rows-[5rem_auto_5rem] sm:grid-cols-[5rem_auto_5rem] sm:grid-rows-[5rem_auto_5rem]"
    >
      <header className="col-[2/3] row-[1/2] pb-16">
        <nav className="grid h-full w-full place-items-center">
          <h2 className="sm:text-4-xl border-b border-gray-400 text-3xl md:text-5xl">
            Visitez les alentours
          </h2>
        </nav>
      </header>
      <div className="col-[2/3] row-[2/3] flex w-fit flex-col place-items-center gap-24 justify-self-center lg:grid lg:grid-cols-2 xl:grid-cols-3">
        <a
          href="https://www.google.fr/maps/place/13210+Saint-R%C3%A9my-de-Provence/@43.7815916,4.8103769,13z/data=!3m1!4b1!4m5!3m4!1s0x12b5e431ac6048f3:0xb5f2d15b520e77dd!8m2!3d43.788652!4d4.831343"
          target="_blank"
          rel="noreferrer"
        >
          <figure className=" relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image
              src="/saint-remy.webp"
              fill
              alt=""
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Saint-Rémy-de-Provence - 10km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.com/maps/place/Avignon/@43.9416581,4.7630461,12z/data=!3m1!4b1!4m5!3m4!1s0x12b5eb8739bc9d07:0xe6429b6efa1d7b36!8m2!3d43.949317!4d4.805528"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image src="/avignon.webp" fill alt="" className="object-cover" />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Avignon - 14km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.fr/maps/place/13520+Les+Baux-de-Provence/@43.7491691,4.7874773,14z/data=!3m1!4b1!4m5!3m4!1s0x12b5e15dd86ab221:0x40819a5fd9704e0!8m2!3d43.743887!4d4.795495"
          target="_blank"
          rel="noreferrer"
        >
          <figure className=" relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image src="/baux.webp" fill alt="" className="object-cover" />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Les baux de Provence - 19km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.fr/maps/place/84800+L'Isle-sur-la-Sorgue/@43.9191238,5.0236488,13z/data=!3m1!4b1!4m5!3m4!1s0x12b5f5ee23b7a5cf:0x1dd5e5d1d1d7e16d!8m2!3d43.91419!4d5.057106"
          target="_blank"
          rel="noreferrer"
        >
          <figure className=" relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image src="/sorgue.webp" fill alt="" className="object-cover" />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              L&apos;Isle-sur-la-Sorgue - 26km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.com/maps/place/Arles/@43.5447349,4.5108494,11z/data=!3m1!4b1!4m5!3m4!1s0x12b672075d4814cd:0x40819a5fd970550!8m2!3d43.676647!4d4.6277769"
          target="_blank"
          rel="noreferrer"
        >
          <figure className=" relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image src="/arles.webp" fill alt="" className="object-cover" />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Arles - 28km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.com/maps/place/Pont+du+Gard/@43.9475698,4.53047,17z/data=!3m1!4b1!4m5!3m4!1s0x12b5c8c248e704d5:0x26b17319f386eae2!8m2!3d43.947566!4d4.53496"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image
              src="/pont-du-gard.webp"
              fill
              alt=""
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Pont du Gard - 38km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.com/maps/place/84220+Gordes/@43.9074886,5.1689282,13z/data=!3m1!4b1!4m5!3m4!1s0x12ca0dc30dc4b6cd:0x6cf8370fce926027!8m2!3d43.911315!4d5.200176"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image src="/gordes.webp" fill alt="" className="object-cover" />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Gordes - 40km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.com/maps/place/N%C3%AEmes/@43.8321891,4.1991637,12z/data=!3m1!4b1!4m5!3m4!1s0x12b42d0bd6e85339:0xde88134f9f200c03!8m2!3d43.836699!4d4.360054"
          target="_blank"
          rel="noreferrer"
        >
          <figure className=" relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image
              src="/arenes-romaine.webp"
              fill
              alt=""
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Nîmes - 43km
            </figcaption>
          </figure>
        </a>
        <a
          href="https://www.google.com/maps/place/Marseille/@43.2804488,5.3104371,12z/data=!3m1!4b1!4m5!3m4!1s0x12c9bf4344da5333:0x40819a5fd970220!8m2!3d43.296482!4d5.36978"
          target="_blank"
          rel="noreferrer"
          className="col-[1/3] xl:col-auto"
        >
          <figure className="relative h-96 w-72 border-2 shadow-lg duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-xl sm:w-96">
            <Image src="/marseille.webp" fill alt="" className="object-cover" />
            <figcaption className="absolute  bottom-0 w-full border-t bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black">
              Marseille - 97km
            </figcaption>
          </figure>
        </a>
      </div>
    </section>
  );
}

export default Visit;
