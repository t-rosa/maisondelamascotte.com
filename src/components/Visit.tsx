import Image from "next/future/image";
import Link from "next/link";

function Visit() {
  return (
    <section
      id="visit"
      className="grid grid-rows-[5rem_auto_5rem] grid-cols-[1rem_auto_1rem] sm:grid-rows-[5rem_auto_5rem] sm:grid-cols-[5rem_auto_5rem]"
    >
      <header className="col-[2/3] row-[1/2] pb-16">
        <nav className="grid place-items-center w-full h-full">
          <h2 className="text-3xl sm:text-4-xl md:text-5xl border-b border-gray-400">
            Visitez les alentours
          </h2>
        </nav>
      </header>
      <div className="col-[2/3] row-[2/3] w-fit gap-24 justify-self-center flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 place-items-center">
        <Link
          passHref
          href="https://www.google.com/maps/place/Avignon/@43.9416581,4.7630461,12z/data=!3m1!4b1!4m5!3m4!1s0x12b5eb8739bc9d07:0xe6429b6efa1d7b36!8m2!3d43.949317!4d4.805528"
        >
          <a target="_blank" rel="noreferrer">
            <figure className="border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
              <Image src="/avignon.webp" fill alt="" className="object-cover" />
              <figcaption className="font-bold absolute text-center bottom-0 w-full text-3xl bg-gray-300 bg-opacity-30 py-3  border-t">
                Avignon
              </figcaption>
            </figure>
          </a>
        </Link>
        <Link
          passHref
          href="https://www.google.com/maps/place/Pont+du+Gard/@43.9475698,4.53047,17z/data=!3m1!4b1!4m5!3m4!1s0x12b5c8c248e704d5:0x26b17319f386eae2!8m2!3d43.947566!4d4.53496"
        >
          <a target="_blank" rel="noreferrer">
            <figure className="border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
              <Image
                src="/pont-du-gard.webp"
                fill
                alt=""
                className="object-cover"
              />
              <figcaption className="font-bold absolute text-center bottom-0 w-full text-3xl bg-gray-300 bg-opacity-30 py-3  border-t">
                Pont du gard
              </figcaption>
            </figure>
          </a>
        </Link>
        <Link
          href={
            "https://www.google.com/maps/place/84220+Gordes/@43.9074886,5.1689282,13z/data=!3m1!4b1!4m5!3m4!1s0x12ca0dc30dc4b6cd:0x6cf8370fce926027!8m2!3d43.911315!4d5.200176"
          }
          passHref
        >
          <a target="_blank" rel="noreferrer">
            <figure className="border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
              <Image src="/gordes.webp" fill alt="" className="object-cover" />
              <figcaption className="font-bold absolute text-center bottom-0 w-full text-3xl bg-gray-300 bg-opacity-30 py-3  border-t">
                Gordes
              </figcaption>
            </figure>
          </a>
        </Link>
        <Link
          href={
            "https://www.google.com/maps/place/N%C3%AEmes/@43.8321891,4.1991637,12z/data=!3m1!4b1!4m5!3m4!1s0x12b42d0bd6e85339:0xde88134f9f200c03!8m2!3d43.836699!4d4.360054"
          }
          passHref
        >
          <a target="_blank" rel="noreferrer">
            <figure className=" border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
              <Image
                src="/arenes-romaine.webp"
                fill
                alt=""
                className="object-cover"
              />
              <figcaption className="font-bold absolute text-center bottom-0 w-full text-3xl bg-gray-300 bg-opacity-30 py-3  border-t">
                Nîmes
              </figcaption>
            </figure>
          </a>
        </Link>
        <Link
          passHref
          href="https://www.google.com/maps/place/Marseille/@43.2804488,5.3104371,12z/data=!3m1!4b1!4m5!3m4!1s0x12c9bf4344da5333:0x40819a5fd970220!8m2!3d43.296482!4d5.36978"
        >
          <a target="_blank" rel="noreferrer">
            <figure className=" border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
              <Image
                src="/marseille.webp"
                fill
                alt=""
                className="object-cover"
              />
              <figcaption className="font-bold absolute text-center bottom-0 w-full text-3xl bg-gray-300 bg-opacity-30 py-3  border-t">
                Marseille
              </figcaption>
            </figure>
          </a>
        </Link>
        <Link
          passHref
          href="https://www.google.com/maps/place/Arles/@43.5447349,4.5108494,11z/data=!3m1!4b1!4m5!3m4!1s0x12b672075d4814cd:0x40819a5fd970550!8m2!3d43.676647!4d4.6277769"
        >
          <a target="_blank" rel="noreferrer">
            <figure className=" border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
              <Image src="/arles.webp" fill alt="" className="object-cover" />
              <figcaption className="font-bold absolute text-center bottom-0 w-full text-3xl bg-gray-300 bg-opacity-30 py-3  border-t">
                Arles
              </figcaption>
            </figure>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default Visit;