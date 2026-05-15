import { Link } from 'react-router';
import { useEffect } from 'react';

export function NotFound() {
  useEffect(() => { document.title = 'Page introuvable — Armadam'; }, []);

  return (
    <main className="pt-24 pb-24 md:pb-8 min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-6">404</div>
        <h1 className="text-5xl font-bold font-['Raleway'] text-gray-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Cette page n'existe pas ou a été déplacée.
          Retournez à l'accueil ou consultez notre catalogue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all shadow-sm text-center"
          >
            Retour à l'accueil
          </Link>
          <Link
            to="/produits"
            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all border border-gray-200 shadow-sm text-center"
          >
            Voir les produits
          </Link>
        </div>
      </div>
    </main>
  );
}
