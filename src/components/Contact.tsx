import Link from "next/link";
import Image from "next/future/image";

function Contact() {
  return (
    <section
      id="visit"
      className="grid grid-rows-[5rem_auto_5rem] grid-cols-[1rem_auto_1rem] sm:grid-rows-[5rem_auto_5rem] sm:grid-cols-[5rem_auto_5rem] pt-6"
    >
      <header className="col-[2/3] row-[1/2] ">
        <nav className="grid place-items-center w-full h-full">
          <h2 className="text-3xl sm:text-4-xl md:text-5xl border-b border-gray-400">
            Contact
          </h2>
        </nav>
      </header>
      <div className="col-[2/3] row-[2/3] w-fit gap-24 justify-self-center flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 place-items-center"></div>
    </section>
  );
}

export default Contact;
