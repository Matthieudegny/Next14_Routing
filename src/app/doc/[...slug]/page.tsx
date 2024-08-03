// Le dossier doc/[...slug] dans Next.js utilise la fonctionnalité de routes dynamiques et de routes catch-all. Voici une explication de ce que cela signifie et comment cela fonctionne.

// Routes Dynamiques et Catch-All
// Routes Dynamiques : Elles permettent de créer des pages qui peuvent capturer des segments de l'URL de manière dynamique.

// Exemple : Si vous avez un fichier pages/blog/[id].js, il peut capturer des chemins comme /blog/1, /blog/2, etc.
// Routes Catch-All : Elles permettent de capturer plusieurs segments de l'URL dans une seule page.

// Exemple : Si vous avez un fichier pages/doc/[...slug].js, il peut capturer des chemins comme /doc/a, /doc/a/b, /doc/a/b/c, etc.
// Signification de [...slug]
// Le fichier pages/doc/[...slug].js est une route catch-all.
// Cela signifie que toute URL commençant par /doc/ sera capturée par ce fichier.
// Le paramètre slug sera un tableau contenant tous les segments de l'URL après /doc/.
// Exemple de Fonctionnement
// Supposons que vous avez le fichier suivant : pages/doc/[...slug].js.

// URL Capturées
// /doc/a -> slug sera ['a']
// /doc/a/b -> slug sera ['a', 'b']
// /doc/a/b/c -> slug sera ['a', 'b', 'c']

export default function Doc({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
