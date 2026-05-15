import { Link, useLocation } from 'react-router';

const NAV = [
  { to: '/', icon: 'home', label: 'Accueil' },
  { to: '/produits', icon: 'inventory_2', label: 'Produits' },
  { to: '/analyse', icon: 'search', label: 'Évaluer' },
  { to: '/contact', icon: 'mail', label: 'Contact' },
];

export function BottomNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center bg-white border-t border-gray-100 z-50 h-16 px-2">
      {NAV.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all ${
            isActive(item.to)
              ? 'text-[#1F4E79] bg-[#1F4E79]/5'
              : 'text-gray-500'
          }`}
        >
          <span className="material-symbols-outlined text-xl">{item.icon}</span>
          <span className="text-xs font-medium mt-0.5">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
