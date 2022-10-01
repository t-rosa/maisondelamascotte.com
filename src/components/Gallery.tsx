import { motion, AnimatePresence } from "framer-motion";
import * as Icon from "@heroicons/react/24/outline";
import Image from "next/future/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        src: "/image-1.webp",
        alt: "Extérieur",
    },
    {
        id: 2,
        src: "/image-2.webp",
        alt: "Vue piscine 1",
    },
    {
        id: 4,
        src: "/image-3.webp",
        alt: "Vue piscine 2",
    },
    {
        id: 5,
        src: "/image-4.webp",
        alt: "Façade",
    },
    {
        id: 6,
        src: "/image-5.webp",
        alt: "Salon",
    },
    {
        id: 7,
        src: "/image-6.webp",
        alt: "Cuisine",
    },
    {
        id: 8,
        src: "/image-7.webp",
        alt: "Chambre",
    },
];

function Gallery() {
    const [imageId, setImageId] = useState(1);
    const [tuple, setTuple] = useState([1, imageId]);

    if (tuple[1] !== imageId && tuple[1]) {
        setTuple([tuple[1], imageId]);
    }

    const prev = tuple[0] !== undefined && tuple[0];
    const direction = imageId > prev ? "next" : "previous";

    function next() {
        setImageId(imageId + 1);
    }

    function previous() {
        setImageId(imageId - 1);
    }

    const variants = {
        enter: (direction: string) => ({
            x: direction === "next" ? "100%" : "-100%",
        }),
        center: { x: 0 },
        exit: (direction: string) => ({
            x: direction === "next" ? "-100%" : "100%",
        }),
    };

    return (
        <section id="gallery" className="grid h-full grid-rows-[5rem_auto] gap-y-14 px-3 pb-14 sm:px-10 md:px-14 lg:px-20">
            <header className="flex items-center justify-center">
                <h2 className="sm:text-4-xl border-b border-gray-400 text-3xl md:text-5xl">Galerie</h2>
            </header>
            <div className="relative grid aspect-square w-[400px] place-items-center place-self-center overflow-hidden border-2 border-indigo-300 bg-zinc-800 sm:w-[550px] md:aspect-video md:w-[700px] lg:w-[900px]">
                <button disabled={imageId === 1} onClick={previous} className="absolute left-0 z-10 h-full bg-gray-300 bg-opacity-20">
                    <Icon.ChevronLeftIcon className="h-10 w-10 text-white sm:h-16 sm:w-16 md:h-20 md:w-20" strokeWidth={1} />
                </button>
                <AnimatePresence custom={direction}>
                    <motion.img
                        key={imageId}
                        variants={variants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        // transition={{ duration: 1 }}
                        src={`/image-${imageId}.webp`}
                        className="absolute aspect-square object-cover md:aspect-video"
                        alt={`Image n°${imageId}`}
                    />
                </AnimatePresence>
                <button
                    disabled={imageId === images.length}
                    onClick={next}
                    className="absolute right-0 z-10 h-full bg-gray-300 bg-opacity-20 text-white"
                >
                    <Icon.ChevronRightIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" strokeWidth={1} />
                </button>
            </div>
        </section>
    );
}

export default Gallery;
