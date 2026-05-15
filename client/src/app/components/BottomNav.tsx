import { Link, useLocation } from 'react-router';

const NAV = [
  { to: '/', icon: 'home', label: 'Accueil' },
  { to: '/produits', icon: 'inventory_2', label: 'Produits' },
  { to: '/analyse', icon: 'search', label: 'Évaluer' },
  { to: '/apropos', icon: 'info', label: 'À propos' },
  { to: '/contact', icon: 'mail', label: 'Contact' },
];

export function BottomNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center bg-white border-t border-gray-100 z-50 h-16 px-1">
      {NAV.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-lg transition-all ${
            isActive(item.to)
              ? 'text-[#1F4E79] bg-[#1F4E79]/5'
              : 'text-gray-500'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
          <span className="text-[10px] font-medium mt-0.5 leading-none">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
