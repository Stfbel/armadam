import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const hammerheadImage = '/images/hammerhead.webp';
const makoImage = '/images/mako.webp';

export function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Armadam — Batardeaux Garrison Flood Control au Canada';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'ARMADAM est le distributeur officiel Garrison Flood Control au Canada. Batardeaux certifiés FEMA/NFIP pour projets résidentiels, commerciaux et industriels. Devis en 24h.');
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#111111] via-[#1F4E79] to-[#2B4C80] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bluefin.webp')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#1F4E79]/75 to-[#2B4C80]/55"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Expert en solutions batardeaux</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold font-['Raleway'] mb-6 leading-tight">
              Votre solution en batardeaux pour tous vos projets
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              ARMADAM fournit des systèmes de batardeaux professionnels pour projets résidentiels,
              commerciaux et industriels. Expertise, qualité et livraison rapide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/produits')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Voir nos batardeaux
              </button>
              <button
                onClick={() => navigate('/analyse')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20"
              >
                Évaluer mon projet
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold font-['Raleway']">14</div>
                <div className="text-sm text-gray-400 mt-1">Produits certifiés</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-['Raleway']">CA</div>
                <div className="text-sm text-gray-400 mt-1">Distributeur officiel</div>
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
              Un processus simple pour équiper vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Évaluation de projet',
                description: 'Analysez vos besoins en batardeaux selon le type de projet résidentiel ou commercial'
              },
              {
                step: '2',
                title: 'Sélection du système',
                description: 'Choisissez parmi notre gamme de batardeaux adaptés à vos spécifications'
              },
              {
                step: '3',
                title: 'Livraison & Support',
                description: 'Livraison rapide partout au Canada avec support technique professionnel'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold font-['Raleway'] text-primary">{item.step}</span>
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
            <button
              onClick={() => navigate('/produits')}
              className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
            >
              Voir tout le catalogue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                <img
                  src={hammerheadImage}
                  alt="HAMMERHEAD - Système de planches aluminium"
                  className="w-full h-full object-cover"
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
                  Batardeaux en aluminium pour ouvertures résidentielles et commerciales.
                  Système modulaire certifié, installation rapide, hauteur jusqu'à 91 cm.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">À partir de</span>
                    <div className="text-xl font-bold text-gray-900">Sur devis</div>
                  </div>
                  <button
                    onClick={() => navigate('/produits/hammerhead')}
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                  >
                    En savoir plus
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                <img
                  src={makoImage}
                  alt="MAKO - Barrière gonflable pressurisée"
                  className="w-full h-full object-cover"
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
                  Batardeaux modulaires pour projets de grande envergure. Système flexible
                  en PEHD, idéal pour chantiers et installations temporaires.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">À partir de</span>
                    <div className="text-xl font-bold text-gray-900">580 $ CAD</div>
                  </div>
                  <button
                    onClick={() => navigate('/produits/mako')}
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                  >
                    En savoir plus
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-['Raleway'] text-white mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Contactez nos experts pour discuter de vos besoins en batardeaux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/analyse')}
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
            >
              Évaluer mon projet
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20"
            >
              Parler à un expert
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Padding */}
      <div className="h-20 md:h-0"></div>
    </main>
  );
}
