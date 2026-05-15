import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity gap-3">
            <svg width="32" height="32" viewBox="0 0 80 80">
              <polygon points="2,76 14,76 40,4 37,4" fill="#111111"/>
              <polygon points="66,76 78,76 43,4 40,4" fill="#111111"/>
              <rect x="37" y="2" width="6" height="4" fill="#111111"/>
              <rect x="14" y="49" width="52" height="11" fill="#1F4E79"/>
            </svg>
            <span className="font-['Raleway'] font-black text-xl text-[#111111] tracking-tight">
              ARMA<em className="not-italic text-[#1F4E79]">DAM</em>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            <Link to="/produits" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Produits
            </Link>
            <Link to="/analyse" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Évaluateur de projet
            </Link>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
              À propos
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link to="/analyse">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md">
                Évaluer un projet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
