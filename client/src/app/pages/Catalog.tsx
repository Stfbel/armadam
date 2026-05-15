import { useState } from 'react';

const products = [
  {
    id: 1, name: 'HAMMERHEAD', category: 'Ouvertures', type: 'Résidentiel & Commercial',
    shortDesc: 'Système de planches aluminium',
    description: 'Planches aluminium 6063-T6 insérées dans des poteaux en U fixés à la maçonnerie. Protection pour portes, fenêtres et garages. Certifié FEMA NFIP TB3.',
    price: 'Sur devis', features: ['Aluminium 6063-T6', "Jusqu'à 3.6 m", 'Certifié FEMA/NFIP', 'Sans outil'],
    image: '/images/hammerhead.png',
  },
  {
    id: 2, name: 'MAKO', category: 'Ouvertures', type: 'Résidentiel & Commercial',
    shortDesc: 'Barrière gonflable pressurisée',
    description: "Sections PVC drop-stitch gonflées à 12–15 PSI dans l'ouverture. Sur mesure jusqu'à 108\" de largeur — aucune modification structurelle. 2 chambres indépendantes.",
    price: 'À partir de 580 $ CAD', features: ['12–15 PSI', 'Sur mesure 108"', '2 chambres PVC', 'Sans ancrage'],
    image: '/images/mako.png',
  },
  {
    id: 3, name: 'YELLOWFIN', category: 'Ouvertures', type: 'Commercial',
    shortDesc: 'Panneaux composites muraux',
    description: "Panneaux fibre de verre + aluminium 6063-T6 + HDPE + inox 316L montés sur rails. Panneaux 36\"/48\" empilables jusqu'à 96\". Certifié FEMA TB3 + NFIP, portée 3.35 m.",
    price: 'Sur devis', features: ['Composite renforcé', 'Portée 3.35 m', 'Certifié FEMA TB3', '10 min/panneau'],
    image: '/images/yellowfin.png',
  },
  {
    id: 4, name: 'BLUEFIN', category: 'Périmètres', type: 'Commercial & Industriel',
    shortDesc: 'Barrière périmétrique modulaire',
    description: "Panneaux aluminium 6063-T6 + fibre de verre honeycomb, joints EPDM ½\", boulonnerie inox 316L. 73–78 kg/panneau, 10 min/panneau. Sections 3, 4, 6 et 8 pieds. Durée de vie 10+ ans.",
    price: 'Sur devis', features: ['Alu 6063-T6', '4 hauteurs', '10+ ans', 'Inox 316L'],
    image: '/images/bluefin.png',
  },
  {
    id: 5, name: 'MAYIM', category: 'Périmètres', type: 'Résidentiel & Commercial',
    shortDesc: "Barrières à déviation d'eau",
    description: "Panneaux interconnectés remplis d'eau créant des murs périmètriques. Hauteurs 20\", 30\" ou 40\" avec capacité de déviation active. Idéal pour sites temporaires ou changeants.",
    price: 'À partir de 13 200 $ CAD', features: ['Interconnectables', '3 hauteurs', 'Déviation active', 'Périmètre complet'],
    image: '/images/mayim.png',
  },
  {
    id: 6, name: 'STINGRAY', category: 'Périmètres', type: 'Résidentiel & Commercial',
    shortDesc: 'Barrière auto-déployante',
    description: "Barrière en V s'élevant automatiquement au contact de l'eau. Grille PVC + lest métallique + flotteurs mousse. Disponible en 20\", 30\" ou 48\". Aucune intervention humaine.",
    price: 'À partir de 950 $ CAD', features: ['Auto-déploiement', '3 hauteurs', 'Activé par eau', 'Zéro opérateur'],
    image: '/images/stingray.png',
  },
  {
    id: 7, name: 'OYSTER', category: 'Automatique', type: 'Commercial & Institutionnel',
    shortDesc: 'Porte auto-élévatrice hydrostatique',
    description: "Porte activée par pression hydrostatique pour rampes inclinées, garages et stations de transit. Hauteurs 24\", 36\" ou 48\". Installation permanente encastrée.",
    price: 'Sur devis', features: ['Hydrostatique', 'Rampes inclinées', '3 hauteurs', 'Permanent'],
    image: '/images/oyster.png',
  },
  {
    id: 8, name: 'GUPPY', category: 'Périmètres', type: 'Résidentiel',
    shortDesc: "Tubes remplissables à l'eau",
    description: "Tubes remplis avec boyau d'arrosage standard. Hauteurs 6\", 12\", longueurs 10 à 100 pieds. Certifié EN13501-B1. Réutilisable.",
    price: 'À partir de 120 $ CAD', features: ['Boyau standard', '6" ou 12"', 'EN13501-B1', 'Réutilisable'],
    image: '/images/guppy.png',
  },
  {
    id: 9, name: 'GUPPY MAX', category: 'Périmètres', type: 'Industriel',
    shortDesc: 'Barrière eau grande capacité',
    description: "Tube 3 chambres de 30 pieds à remplir via borne-incendie. Hauteur de protection 38\" (97 cm). Capacité 8 000 L / 8 000 kg par section.",
    price: '~3 100 $ CAD/section', features: ['97 cm hauteur', '30 pieds', 'Borne incendie', '8 000 kg/section'],
    image: '/images/guppy-max.png',
  },
  {
    id: 10, name: 'SERPENT', category: 'Périmètres', type: 'Industriel',
    shortDesc: 'Tubes gonflables à air',
    description: "Barrières gonflables à air (6 PSI) déployables en 8–18 min. Longueurs 15 et 30 pieds, connectables pour couvrir de grandes distances. Hauteur jusqu'à 40\".",
    price: 'À partir de 2 500 $ CAD', features: ['6 PSI', "Jusqu'à 40\"", 'Connectables', '8–18 min'],
    image: '/images/serpent.png',
  },
  {
    id: 11, name: 'MINNOW', category: 'Solutions rapides', type: 'Résidentiel & Commercial',
    shortDesc: 'Sacs polymère activés par eau',
    description: "Sacs contenant polymère hydrophile. À sec ~2 kg, gorgés ~22 kg. Activation automatique au contact de l'eau douce. MW1 (60×40×12 cm) ou MW2 (40×36×12 cm). Empilables.",
    price: 'À partir de 55 $ CAD', features: ['Polymère hydrophile', '~22 kg gorgé', 'Eau douce', 'Empilable'],
    image: '/images/minnow.png',
  },
  {
    id: 12, name: 'BELUGA', category: 'Solutions rapides', type: 'Commercial',
    shortDesc: 'Sacs remplissables grand format',
    description: "BG1 : sac unitaire 91×91×102 cm H. BG5 : accordéon 5 compartiments 4.5 m × 102 cm H. Résistance UV 2 200 h. Remplissage sable ou eau.",
    price: 'À partir de 40 $ CAD/BG1', features: ['BG1 ou BG5', '102 cm hauteur', 'UV 2 200 h', 'Sable ou eau'],
    image: '/images/beluga.png',
  },
  {
    id: 13, name: 'SANDBAGS', category: 'Solutions rapides', type: 'Résidentiel & Commercial',
    shortDesc: 'Sacs de sable polypropylène',
    description: "Sacs polypropylène 14\"×26\" avec protection UV intégrée. 35–40 lbs une fois remplis. Solution universelle disponible à la palette.",
    price: 'Sur devis / palette', features: ['Polypropylène', '14×26 pouces', 'Protection UV', '35–40 lbs'],
    image: '/images/sandbags.png',
  },
  {
    id: 14, name: 'SEA SPONGE', category: 'Équipement', type: 'Commercial & Industriel',
    shortDesc: 'Pompe de drainage submersible',
    description: "Pompe 2/3 HP éliminant l'eau jusqu'à 1 mm de profondeur. Débit 50–170 L/min, 110V/6.1A, carcasse EPR. 13 kg, portable. Essentielle en post-intervention.",
    price: 'Sur devis', features: ['2/3 HP', '50–170 L/min', 'Drain 1 mm', '13 kg'],
    image: '/images/sea-sponge.png',
  },
];

export function Catalog() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const filters = ['Tous', 'Ouvertures', 'Périmètres', 'Automatique', 'Solutions rapides', 'Équipement'];
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
              Distributeur officiel au Québec. Chaque système est certifié FEMA/NFIP,
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
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
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
                    <a href="/analyse" className="flex items-center gap-1 text-[#1F4E79] hover:gap-2 transition-all font-semibold text-sm">
                      Évaluer
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
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
              { icon: 'local_shipping', title: 'Livraison Québec', desc: 'Distributeur officiel au Québec. Stock local disponible, livraison rapide partout dans la province.' },
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
          <a href="/analyse" className="inline-flex items-center gap-2 bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all shadow-lg">
            Évaluer mon risque
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </main>
  );
}
