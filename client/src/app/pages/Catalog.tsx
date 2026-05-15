import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { products } from '../data/products';

export function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const filters = ['Tous', 'Ouvertures', 'Périmètres', 'Automatique', 'Solutions rapides', 'Équipement'];
  useEffect(() => {
    document.title = 'Catalogue — Batardeaux Garrison Flood Control | Armadam';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      '14 systèmes de batardeaux certifiés FEMA/NFIP — ouvertures, périmètres, solutions automatiques et rapides. Distributeur officiel Garrison Flood Control au Canada.');
  }, []);
  const filteredProducts = activeFilter === 'Tous'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <main className="pt-24 pb-24 md:pb-8">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <div className="text-xs text-gray-500 mb-3 font-['JetBrains_Mono'] uppercase tracking-widest">
              Catalogue — 14 produits Garrison
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-['Raleway'] text-gray-900 mb-4">
              Batardeaux Garrison Flood Control
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Distributeur officiel au Canada. Chaque système est certifié FEMA/NFIP,
              fabriqué aux États-Unis, livré depuis notre stock local.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky filters */}
      <section className="bg-white border-b sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                  activeFilter === filter
                    ? 'bg-[#1F4E79] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/produits/${product.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group block">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1 font-['JetBrains_Mono']">{product.type}</div>
                    <h3 className="text-2xl font-bold font-['Raleway'] text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.shortDesc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded font-['JetBrains_Mono']">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">À partir de</div>
                      <div className="text-base font-bold font-['JetBrains_Mono'] text-gray-900">{product.price}</div>
                    </div>
                    <span className="flex items-center gap-1 text-[#1F4E79] group-hover:gap-2 transition-all font-semibold text-sm">
                      Voir le produit
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Garrison */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-['Raleway'] mb-12">Pourquoi Garrison ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'verified_user', title: 'Certifié FEMA/NFIP', desc: 'Systèmes conformes aux normes FM Global et FEMA. Certifications NFIP Bulletin technique 3.' },
              { icon: 'local_shipping', title: 'Livraison Canada', desc: 'Distributeur officiel au Canada. Stock local disponible, livraison rapide partout au Canada.' },
              { icon: 'engineering', title: 'Support technique', desc: 'Conseils professionnels pour chaque projet. Expertise en protection contre les inondations.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F4E79]/30 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#2B6CB0] text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 font-['Raleway']">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-['Raleway'] text-gray-900 mb-4">
            Quel batardeau pour votre projet ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Notre évaluateur vous guide en 3 questions vers le bon système Garrison.
          </p>
          <Link to="/analyse" className="inline-flex items-center gap-2 bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all shadow-lg">
            Évaluer mon risque
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
