import Link from "next/link";

function Footer() {
  return (
    <footer className="font-sans grid place-items-center border-t py-12 gap-3">
      <Link passHref href="#">
        <a className="hover:text-indigo-800 duration-100">Accueil</a>
      </Link>
      <Link passHref href="#gallery">
        <a className="hover:text-indigo-800 duration-100">Galerie</a>
      </Link>
      <Link passHref href="#visit">
        <a className="hover:text-indigo-800 duration-100">Alentours</a>
      </Link>
      <Link passHref href="#host">
        <a className="hover:text-indigo-800 duration-100">Commentaires</a>
      </Link>
      <Link passHref href="#faq">
        <a className="hover:text-indigo-800 duration-100">FAQ</a>
      </Link>
      <Link passHref href="#contact">
        <a className="hover:text-indigo-800 duration-100">Contact</a>
      </Link>
      <h3 className="mt-3">&copy; 2022 Toma Rosa. Tous droits réservés</h3>
    </footer>
  );
}

export default Footer;
