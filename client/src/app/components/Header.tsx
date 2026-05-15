import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 560 145" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Triangle — △ */}
              <polygon points="66,8 10,110 122,110" stroke="#444447" strokeWidth="9" fill="none" strokeLinejoin="miter"/>
              {/* Ligne de base */}
              <line x1="10" y1="110" x2="552" y2="110" stroke="#444447" strokeWidth="9" strokeLinecap="square"/>
              {/* RMADAM */}
              <text x="132" y="101" fontFamily="Raleway, Arial Black, sans-serif" fontWeight="900" fontSize="88" letterSpacing="-1" fill="#1F4E79">RMADAM</text>
              {/* BATARDEAUX */}
              <text x="168" y="133" fontFamily="Raleway, Arial, sans-serif" fontWeight="700" fontSize="15" letterSpacing="9" fill="#1F4E79">BATARDEAUX</text>
            </svg>
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
            <Link to="/apropos" className="text-gray-700 hover:text-primary transition-colors font-medium">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA + Phone */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@armadam.com"
              className="hidden lg:flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#1F4E79] transition-colors font-['JetBrains_Mono']"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              info@armadam.com
            </a>
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
