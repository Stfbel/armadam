import { Link } from 'react-router';

const LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Produits' },
  { to: '/analyse', label: 'Évaluateur de projet' },
  { to: '/apropos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="hidden md:block bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="font-['Raleway'] font-black text-xl text-white mb-3 tracking-tight">ARMADAM</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Expert en systèmes de batardeaux Garrison. Conseil, sélection et livraison pour vos projets résidentiels, commerciaux et industriels.
            </p>
            <a
              href="mailto:info@armadam.com"
              className="text-sm text-[#2B6CB0] hover:text-white transition-colors font-['JetBrains_Mono']"
            >
              info@armadam.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-bold text-gray-500 font-['JetBrains_Mono'] uppercase tracking-widest mb-5">
              Navigation
            </div>
            <nav className="space-y-3">
              {LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Garrison */}
          <div>
            <div className="text-xs font-bold text-gray-500 font-['JetBrains_Mono'] uppercase tracking-widest mb-5">
              Garrison Flood Control
            </div>
            <div className="space-y-3">
              {['FM Global Approved', 'NFIP Compliant', 'EN 13501-B1', 'Made in USA'].map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="material-symbols-outlined text-[#2B6CB0] text-base">check_circle</span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Armadam. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-600 font-['JetBrains_Mono']">
            Distributeur officiel Garrison Flood Control
          </p>
        </div>
      </div>
    </footer>
  );
}
