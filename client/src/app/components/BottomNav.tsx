import { Link, useLocation } from 'react-router';

export function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center bg-white border-t border-gray-100 z-50 h-16 px-2">
      <Link
        to="/"
        className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all ${
          isActive('/')
            ? 'text-primary bg-primary/5'
            : 'text-gray-500'
        }`}
      >
        <span className="material-symbols-outlined text-xl">home</span>
        <span className="text-xs font-medium mt-0.5">Accueil</span>
      </Link>

      <Link
        to="/produits"
        className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all ${
          isActive('/produits')
            ? 'text-primary bg-primary/5'
            : 'text-gray-500'
        }`}
      >
        <span className="material-symbols-outlined text-xl">inventory_2</span>
        <span className="text-xs font-medium mt-0.5">Produits</span>
      </Link>

      <Link
        to="/analyse"
        className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all ${
          isActive('/analyse')
            ? 'text-primary bg-primary/5'
            : 'text-gray-500'
        }`}
      >
        <span className="material-symbols-outlined text-xl">search</span>
        <span className="text-xs font-medium mt-0.5">Évaluer</span>
      </Link>
    </nav>
  );
}
