function Host() {
  return (
    <section id="host" className="grid px-6 gap-y-16 sm:px-12 md:px-20">
      <header className="col-[2/3] row-[1/2]">
        <nav className="grid place-items-center w-full h-full">
          <h2 className="text-3xl sm:text-4-xl md:text-5xl border-b border-gray-400 text-center">
            Laissez vous guider par vos hôtes
          </h2>
        </nav>
      </header>
      <div className="font-sans col-[2/3] row-[2/3] w-fit gap-24 justify-self-center grid lg:grid-cols-2 xl:grid-cols-3">
        <figure className="rounded-md p-8 shadow-md ring-1 ring-indigo-900/5 border-indigo-100 border">
          <blockquote>
            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”'] ">
              Maison au top ! Calme, endroit propice au repos et au dépaysement.
              Propriétaires très accueillants et discrets. Petites attentions
              dès l’ arrivée et durant le séjour qui font vraiment plaisir. A
              refaire absolument! MERCI !
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center">
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                Didier
              </div>
              <div className="mt-1 text-sm text-slate-600">Belgique</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-md p-8 shadow-md ring-1 ring-indigo-900/5 border-indigo-100 border">
          <blockquote>
            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”'] ">
              Nous avons été reçu très chaleureusement par les propriétaires.
              Une maison au calme, très agréable, fonctionnelle, nous nous
              sommes sentis comme chez nous. Encore un grand merci aux
              propriétaires pour leur bienveillance.
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center">
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                Laura
              </div>
              <div className="mt-1 text-sm text-slate-600">France</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-md p-8 shadow-md ring-1 ring-indigo-900/5 border-indigo-100 border">
          <blockquote>
            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”'] ">
              Nous avons beaucoup aimé la Maison de la Mascotte, sa terrasse et
              sa piscine privative. La maison était très propre avec tous les
              équipements nécessaires à des vacances, notamment un barbecue. La
              maison est bien située pour visiter la Provence, Alpilles, Arles,
              Avignon et la Camargue. La petite ville de Graveson est à 5 mins
              en voiture et permet de faire les courses. Par ailleurs, nous
              avons beaucoup apprécié la gentillesse de nos hôtes. Nous
              reviendrons avec plaisir!
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center">
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                Julie
              </div>
              <div className="mt-1 text-sm text-slate-600">France</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-md p-8 shadow-md ring-1 ring-indigo-900/5 border-indigo-100 border">
          <blockquote>
            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”'] ">
              La gentillesse et discrétion de l&apos;hôte , l&apos;environnement
              est splendide pour des vacances reposantes Piscine et extérieur
              bien entretenus. Très belle maison confortable et décorée avec
              goût. Emplacement idéal pour passer des vacances en familles,
              pleins de parcs à thèmes à faire. Commodité
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center">
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                Odette
              </div>
              <div className="mt-1 text-sm text-slate-600">Belgique</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-md p-8 shadow-md ring-1 ring-indigo-900/5 border-indigo-100 border">
          <blockquote>
            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”'] ">
              Le calme du lieu, la gentillesse et la discrétion des
              propriétaires, rien à redire excellent séjour.
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center">
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                Philippe
              </div>
              <div className="mt-1 text-sm text-slate-600">France</div>
            </div>
          </figcaption>
        </figure>
        <figure className="rounded-md p-8 shadow-md ring-1 ring-indigo-900/5 border-indigo-100 border">
          <blockquote>
            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”'] ">
              Tout était en très bon état et bien équipé. Machine à café,
              lave-vaisselle, lave-linge, plaques à induction, four,
              réfrigérateur et congélateur, etc. Draps et serviettes à changer,
              tout y est. L&apos;emplacement est parfait pour les excursions et
              la tranquillité absolue et la piscine à usage privé sont un rêve.
              Les hôtes vivent dans la maison voisine mais vous avez une
              intimité totale. Hôtes super sympas Merci à Nathalie et Franck
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center">
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                Sabine
              </div>
              <div className="mt-1 text-sm text-slate-600">Allemagne</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Host;
