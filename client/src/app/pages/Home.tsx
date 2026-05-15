import { Link } from 'react-router';
import { useEffect } from 'react';

const hammerheadImage = '/images/hammerhead.webp';
const makoImage = '/images/mako.webp';

export function Home() {
  useEffect(() => {
    document.title = 'Armadam — Expert en batardeaux';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Plusieurs années d\'expertise en systèmes de batardeaux. Armadam conseille et équipe vos projets résidentiels, commerciaux et industriels avec les systèmes Garrison. Devis en 24h.');
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#111111] via-[#1F4E79] to-[#2B6CB0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bluefin.webp')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#1F4E79]/75 to-[#2B6CB0]/55"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Plusieurs années d'expertise en batardeaux</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold font-['Raleway'] mb-6 leading-tight">
              L'expertise batardeaux pour tous vos projets
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Résidentiel, commercial ou industriel — ARMADAM conseille, sélectionne et livre
              le bon système Garrison pour chaque situation. Réponse en 24 h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produits"
                className="bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-center"
              >
                Voir nos batardeaux
              </Link>
              <Link
                to="/analyse"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20 text-center"
              >
                Évaluer mon projet
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold font-['Raleway']">14</div>
                <div className="text-sm text-gray-400 mt-1">Systèmes Garrison</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-['Raleway']">Expert</div>
                <div className="text-sm text-gray-400 mt-1">Conseil en batardeaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-['Raleway']">24 h</div>
                <div className="text-sm text-gray-400 mt-1">Délai de réponse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Raleway'] text-gray-900 mb-4">
              Notre approche
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre expertise au service de votre projet, de l'analyse à la livraison
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Évaluation de projet',
                description: 'Décrivez votre situation — type de bâtiment, ouvertures à protéger, niveau de risque estimé.'
              },
              {
                step: '2',
                title: 'Recommandation',
                description: 'Notre évaluateur ou un expert identifie le système Garrison adapté à votre cas.'
              },
              {
                step: '3',
                title: 'Livraison & Support',
                description: 'Livraison rapide depuis notre stock local avec support technique professionnel inclus.'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1F4E79]/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold font-['Raleway'] text-[#1F4E79]">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-['Raleway'] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold font-['Raleway'] text-gray-900 mb-4">
                Nos batardeaux
              </h2>
              <p className="text-xl text-gray-600">
                Solutions professionnelles pour tous types de projets
              </p>
            </div>
            <Link
              to="/produits"
              className="hidden md:flex items-center gap-2 text-[#1F4E79] hover:gap-3 transition-all font-semibold"
            >
              Voir tout le catalogue
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Card 1 */}
            <Link to="/produits/hammerhead" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow block">
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                <img
                  src={hammerheadImage}
                  alt="HAMMERHEAD - Système de planches aluminium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Ouvertures
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-['Raleway'] mb-2">HAMMERHEAD</h3>
                <p className="text-gray-600 mb-6">
                  Planches aluminium 6063-T6 dans des poteaux en U fixés à la maçonnerie.
                  Joints SureGasket™, hauteur jusqu'à 3.6 m — résidentiel et commercial.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Prix</span>
                    <div className="text-xl font-bold text-gray-900">Sur devis</div>
                  </div>
                  <span className="flex items-center gap-2 text-[#1F4E79] font-semibold">
                    En savoir plus
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Product Card 2 */}
            <Link to="/produits/mako" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow block">
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                <img
                  src={makoImage}
                  alt="MAKO - Barrière gonflable pressurisée"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Ouvertures
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-['Raleway'] mb-2">MAKO</h3>
                <p className="text-gray-600 mb-6">
                  Sections PVC drop-stitch gonflées sous pression dans l'ouverture, sans ancrage.
                  Sur mesure jusqu'à 108" — 2 chambres indépendantes.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">À partir de</span>
                    <div className="text-xl font-bold text-gray-900">580 $ CAD</div>
                  </div>
                  <span className="flex items-center gap-2 text-[#1F4E79] font-semibold">
                    En savoir plus
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F4E79]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-['Raleway'] text-white mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Notre expertise à votre service — réponse sous 24 heures avec une recommandation adaptée à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/analyse"
              className="bg-white text-[#1F4E79] hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg text-center"
            >
              Évaluer mon projet
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20 text-center"
            >
              Parler à un expert
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Padding */}
      <div className="h-20 md:h-0"></div>
    </main>
  );
}
