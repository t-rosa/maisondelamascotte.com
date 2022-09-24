/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const faqs = [
  {
    question:
      "Quel est le tarif d'un séjour à l'établissement Maison de la Mascotte ?",
    answer:
      "Les tarifs fixés par l'établissement Maison de la Mascotte peuvent varier en fonction de votre séjour (par ex. les dates que vous avez sélectionnées, les conditions de l'hôtel, etc.). Indiquez vos dates pour voir les tarifs.",
  },
  // More questions...
];

function FAQ() {
  return (
    <div className="bg-gray-50 mt-12 font-sans">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="font-['allura'] text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquemment posées
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={clsx(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
