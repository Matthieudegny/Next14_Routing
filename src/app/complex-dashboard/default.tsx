// difference default et not found

// Fichier default.tsx :

// Usage principal : Routes dynamiques et optionnelles.
// Contexte spécifique : Utilisé dans les segments de route dynamiques, notamment avec [...slug] (catch-all routes) ou [[...slug]] (optional catch-all routes).
// Fonction : Fournit un contenu par défaut lorsqu'aucun paramètre spécifique n'est fourni dans une route dynamique.
// N'est pas lié à la gestion des erreurs 404.

// Fichier not-found.tsx :

// Usage principal : Gestion des erreurs 404 (ressource non trouvée).
// Contexte général : Peut être utilisé dans n'importe quel segment de route, dynamique ou statique.
// Fonction : S'affiche lorsqu'une ressource spécifique n'est pas trouvée ou lorsque la fonction notFound() est explicitement appelée.
// Est spécifiquement lié à la gestion des erreurs 404.

// Différences clés :

// Contexte d'utilisation :

// default est spécifique aux routes dynamiques.
// not-found peut être utilisé partout, y compris dans les routes statiques.

// Cas d'usage :

// default fournit un contenu "par défaut" pour une route dynamique sans paramètres.
// not-found gère spécifiquement les cas où une ressource n'existe pas.

// Comportement :

// default ne change pas le code de statut HTTP.
// not-found envoie généralement un statut HTTP 404.

export default function DefaultComplexDashboardPage() {
  return <div>Complex Dashboard</div>;
}
