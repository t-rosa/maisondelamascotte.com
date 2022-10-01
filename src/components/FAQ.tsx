/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const faqs = [
    {
        question: "Quel est le tarif d'un séjour ?",
        answer: "Les tarifs fixés par l'établissement Maison de la Mascotte peuvent varier en fonction de votre séjour (par ex. les dates que vous avez sélectionnées, les conditions de l'hôtel, etc.). Indiquez vos dates pour voir les tarifs.",
    },
    {
        question: "Quels sont les horaires d'arrivée et de départ ?",
        answer: "L'enregistrement à l'établissement Maison de la Mascotte se fait à partir de 16h00 et le départ est possible jusqu'à 11h00.",
    },
    {
        question: "La piscine du gîte est privée ?",
        answer: "Oui ! La piscine est privée, entièrement dédiée au(x) locataire(s).",
    },
    {
        question: "Combien de chambres possède le gîte ?",
        answer: "La maison possède une chambre avec un lit deux place, un canapé-lit deux places est aussi mis a disposition.",
    },
    {
        question: "Combien de personnes peuvent séjourner dans la maison ?",
        answer: "La maison peut accueillir jusqu'à quatre personnes.",
    },
];

function FAQ() {
    return (
        <section id="faq" className="mt-12 border-y bg-zinc-100 font-sans dark:bg-zinc-800 ">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                    <h2 className="text-center font-['allura'] text-3xl font-bold tracking-tight sm:text-4xl">Des questions ?</h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400 dark:text-gray-200">
                                                <span className="font-medium text-gray-900 dark:text-gray-100">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <ChevronDownIcon
                                                        className={clsx(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform")}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500 dark:text-gray-400">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
export default FAQ;
