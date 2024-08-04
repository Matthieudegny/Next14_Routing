// Composant d'erreur dans Next.js :
// Le fichier error.tsx que vous avez créé est un composant d'erreur spécial dans Next.js. Il est automatiquement utilisé pour gérer les erreurs qui se produisent dans le rendu des composants enfants.
// Props automatiquement injectées :
// Next.js injecte automatiquement deux props dans ce composant d'erreur :

// error : l'objet Error qui a été levé
// reset : une fonction fournie par Next.js

// Fonction reset :
// La fonction reset est effectivement une méthode propre à Next.js. Elle est conçue pour tenter de re-rendre le segment de l'application qui a échoué. C'est essentiellement une façon de donner à l'utilisateur la possibilité de réessayer après une erreur.

"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
