// Utilisation du layout vs page :

// Le layout est idéal pour définir une structure commune qui s'applique à plusieurs pages ou composants.
// La page (page.tsx) est généralement utilisée pour le contenu spécifique à une route particulière.

// Avantages de l'utilisation du layout :

// Réutilisation : Le layout permet de définir une structure commune réutilisable.
// Chargement parallèle : Les composants définis dans les dossiers @ peuvent être chargés en parallèle, améliorant potentiellement les performances.
// Séparation des préoccupations : Chaque composant peut être défini et géré séparément.

// Quand utiliser le layout :

// Pour des éléments d'interface utilisateur partagés entre plusieurs pages (comme des menus, des en-têtes, des pieds de page).
// Pour organiser des composants qui doivent être chargés indépendamment.

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      <h1>{children}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
