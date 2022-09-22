import Image from "next/future/image";
import Link from "next/link";

function Gallery() {
  return (
    <section
      id="gallery"
      className="grid grid-rows-[5rem_auto_15rem] grid-cols-[1rem_auto_1rem] sm:grid-rows-[5rem_auto_15rem] sm:grid-cols-[5rem_auto_5rem]"
    >
      <header className="col-[2/3] row-[1/2] pb-16">
        <nav className="grid place-items-center w-full h-full">
          <Link href="/" passHref>
            <a className="text-3xl sm:text-4-xl md:text-5xl border-b border-gray-400">
              Gallerie
            </a>
          </Link>
        </nav>
      </header>
      <div className="col-[2/3] row-[2/3] w-fit gap-24 justify-self-center flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 place-items-center">
        <div className="border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
          <Image src="/image-5.webp" fill alt="" className="object-cover" />
        </div>
        <div className="border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
          <Image src="/image-2.webp" fill alt="" className="object-cover" />
        </div>
        <div className="border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
          <Image src="/image-1.webp" fill alt="" className="object-cover" />
        </div>
        <div className="xl:col-[1/3] xl:row-[2/3] border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
          <Image src="/image-3.webp" fill alt="" className="object-cover" />
        </div>
        <div className="lg:col-[1/3] xl:row-[2/3] xl:col-[2/4] border-2 shadow-lg relative w-72 sm:w-96 h-96 hover:scale-105 duration-300 hover:border-indigo-500 hover:shadow-xl">
          <Image src="/image-4.webp" fill alt="" className="object-cover" />
        </div>
      </div>
      <Link
        href="https://www.booking.com/hotel/fr/bardelli-nathalie.fr.html"
        passHref
      >
        <a
          className="
                  col-[2/3] row-[3/4] place-self-center
                  text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-800 border border-gray-600 py-2 px-6
                  hover:scale-105 hover:shadow-lg duration-300 font-bold"
        >
          Détails et réservation
        </a>
      </Link>
    </section>
  );
}

export default Gallery;
