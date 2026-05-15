import { Link, useLocation } from 'react-router';

const NAV = [
  { to: '/', label: 'Accueil', exact: true },
  { to: '/produits', label: 'Produits', exact: false },
  { to: '/analyse', label: 'Évaluateur de projet', exact: false },
  { to: '/apropos', label: 'À propos', exact: false },
  { to: '/contact', label: 'Contact', exact: false },
];

export function Header() {
  const location = useLocation();

  const isActive = (to: string, exact: boolean) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="Armadam Batardeaux"
              className="h-11 md:h-14 w-auto block object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors font-medium text-sm ${
                  isActive(item.to, item.exact)
                    ? 'text-[#1F4E79] border-b-2 border-[#1F4E79] pb-0.5'
                    : 'text-gray-700 hover:text-[#1F4E79]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Email */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@armadam.com"
              className="hidden lg:flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#1F4E79] transition-colors font-['JetBrains_Mono']"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              info@armadam.com
            </a>
            <Link
              to="/analyse"
              className="bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
            >
              Évaluer un projet
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
