import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-75 transition-opacity">
            <svg viewBox="0 0 560 140" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="56,8 4,112 112,112 556,112" stroke="#555557" strokeWidth="10" strokeLinejoin="miter" strokeLinecap="square"/>
              <text x="122" y="100" fontFamily="Raleway, Arial Black, sans-serif" fontWeight="900" fontSize="88" letterSpacing="-1" fill="#1C3C72">RMADAM</text>
              <text x="160" y="132" fontFamily="Raleway, Arial, sans-serif" fontWeight="700" fontSize="17" letterSpacing="9" fill="#1C3C72">BATARDEAUX</text>
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
