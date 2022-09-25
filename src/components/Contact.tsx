import { useForm } from "react-hook-form";
import useContact, { ContactFormData } from "../hooks/useContact";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    firstName: yup.string().required().max(50),
    lastName: yup.string().required().max(50),
    email: yup.string().email().required(),
    phone: yup.string().required().length(10),
    message: yup.string().required().max(500),
  })
  .required();

function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });
  const { mutate } = useContact(reset);

  return (
    <section
      id="contact"
      className="font-sans overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4-xl md:text-5xl  sm:text-4xl font-['allura'] border-b ">
            Contact
          </h2>
        </div>
        <div className="mt-12">
          <form
            onSubmit={handleSubmit((contactFormData) =>
              mutate(contactFormData)
            )}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Prénom
              </label>
              <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-400">
                <input
                  {...register("firstName")}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="block w-full border-0 border-b dark:bg-zinc-800 border-transparent py-3 px-4 bg-gray-50 focus:border-indigo-400 focus:ring-0 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nom
              </label>
              <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-400">
                <input
                  {...register("lastName")}
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="given-name"
                  className="block w-full border-0 border-b dark:bg-zinc-800 border-transparent py-3 px-4 bg-gray-50 focus:border-indigo-400 focus:ring-0 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-400">
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full border-0 border-b dark:bg-zinc-800 border-transparent py-3 px-4 bg-gray-50 focus:border-indigo-400 focus:ring-0 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Téléphone
              </label>
              <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-400">
                <input
                  {...register("phone")}
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full border-0 border-b dark:bg-zinc-800 dark:placeholder:text-gray-400 border-transparent py-3 px-4 bg-gray-50 focus:border-indigo-400 focus:ring-0 sm:text-sm"
                  placeholder="+33 6 12 34 56 67"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-400">
                <textarea
                  {...register("message")}
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full border-0 border-b dark:bg-zinc-800 border-transparent py-3 px-4 bg-gray-50 focus:border-indigo-400 focus:ring-0 sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="dark:bg-indigo-700 dark:hover:bg-indigo-900 inline-flex w-full items-center duration-150 justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
