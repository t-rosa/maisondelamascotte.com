import Link from "next/link";

function Footer() {
  return (
    <footer className="flex px-12 justify-between border-t py-6 mt-12 font-sans">
      <div className="flex gap-3">
        <Link passHref href="#">
          <a className="hover:text-indigo-800 duration-100">Accueil</a>
        </Link>
        <Link passHref href="#gallery">
          <a className="hover:text-indigo-800 duration-100">Gallerie</a>
        </Link>
        <Link passHref href="#visit">
          <a className="hover:text-indigo-800 duration-100">Alentours</a>
        </Link>
        <Link passHref href="#host">
          <a className="hover:text-indigo-800 duration-100">Commentaires</a>
        </Link>
      </div>
      <div>
        <h3>&copy; 2022 Toma Rosa. Tous droits réservés</h3>
      </div>
    </footer>
  );
}

export default Footer;
