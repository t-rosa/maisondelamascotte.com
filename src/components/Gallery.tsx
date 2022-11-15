import { motion } from "framer-motion";
import * as Icon from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

import image1 from "../assets/gallery/image-1.webp";
import image2 from "../assets/gallery/image-2.webp";
import image3 from "../assets/gallery/image-3.webp";
import image4 from "../assets/gallery/image-4.webp";
import image5 from "../assets/gallery/image-5.webp";
import image6 from "../assets/gallery/image-6.webp";
import image7 from "../assets/gallery/image-7.webp";

const images = [
  {
    id: 1,
    src: image1,
    alt: "Extérieur",
  },
  {
    id: 2,
    src: image2,
    alt: "Vue piscine 1",
  },
  {
    id: 4,
    src: image3,
    alt: "/image-3.webp",
  },
  {
    id: 5,
    src: image4,
    alt: "/image-4.webp",
  },
  {
    id: 6,
    src: image5,
    alt: "/image-5.webp",
  },
  {
    id: 7,
    src: image6,
    alt: "/image-6.webp",
  },
  {
    id: 8,
    src: image7,
    alt: "/image-7.webp",
  },
];

function Gallery() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex(index + 1);
  }

  function previous() {
    setIndex(index - 1);
  }

  return (
    <section
      id="gallery"
      className="grid h-full grid-rows-[5rem_auto] gap-y-14 px-3 pt-20 pb-14 sm:px-10 md:px-14 lg:px-20"
    >
      <header className="flex items-center justify-center">
        <h2 className="sm:text-4-xl border-b border-gray-400 text-3xl md:text-5xl">
          Galerie
        </h2>
      </header>
      <div className="relative grid aspect-square w-[300px] place-items-center place-self-center overflow-hidden border-2 border-indigo-300 bg-zinc-800 sm:w-[550px] md:aspect-video md:w-[600px] lg:w-[900px]">
        <button
          disabled={index === 1}
          onClick={previous}
          className="absolute left-0 z-10 h-full bg-gray-300 bg-opacity-20"
        >
          <Icon.ChevronLeftIcon
            className="h-10 w-10 text-white sm:h-16 sm:w-16 md:h-20 md:w-20"
            strokeWidth={1}
          />
        </button>
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              className="aspect-[3/3] md:aspect-[3/2] object-cover"
              alt={image.alt}
              placeholder="blur"
            />
          ))}
        </motion.div>
        <button
          disabled={index === images.length - 1}
          onClick={next}
          className="absolute right-0 z-10 h-full bg-gray-300 bg-opacity-20 text-white"
        >
          <Icon.ChevronRightIcon
            className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20"
            strokeWidth={1}
          />
        </button>
      </div>
    </section>
  );
}

export default Gallery;
