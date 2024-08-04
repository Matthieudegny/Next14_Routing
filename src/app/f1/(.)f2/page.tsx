// Les routes interceptées (intercepted routes) dans Next.js sont une fonctionnalité puissante qui permet d'afficher le contenu d'une route tout en conservant le contexte de la route actuelle. C'est particulièrement utile pour créer des expériences utilisateur fluides, comme des modales ou des overlays.
// Voici un exemple simple pour illustrer ce concept :
// Imaginons un site de galerie photo avec une liste de photos et la possibilité de voir chaque photo en détail sans quitter la page de la galerie.
// Structure de fichiers :
// Copy/app
//   /gallery
//     page.tsx
//     /(..)photo
//       /[id]
//         page.tsx
//   /photo
//     /[id]
//       page.tsx
// Explication :

// /gallery/page.tsx : C'est la page principale de la galerie qui affiche une liste de photos.
// /photo/[id]/page.tsx : C'est la page de détail d'une photo individuelle.
// /gallery/(..)photo/[id]/page.tsx : C'est la route interceptée. Le (..) indique qu'elle interceptera les navigations vers /photo/[id] lorsqu'on est dans /gallery.

// /(.)f2 (votre exemple) :

// Le (.) signifie "intercepter au même niveau".
// Cette notation est utilisée pour intercepter les routes au même niveau dans l'arborescence des routes.

// /(..)test (mon exemple) :

// Le (..) signifie "intercepter au niveau parent".
// Cette notation est utilisée pour intercepter les routes à partir du niveau parent dans l'arborescence.

export default function InterceptedF2() {
  return <h1>(.) Intercepted F2 page</h1>;
}
