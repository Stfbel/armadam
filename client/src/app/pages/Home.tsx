import { Link } from 'react-router';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    document.title = 'Armadam — Expert en batardeaux';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Plusieurs années d\'expertise en systèmes de batardeaux. Armadam conseille et équipe vos projets résidentiels, commerciaux et industriels avec les systèmes Garrison. Devis en 24h.');
  }, []);

  return (
    <main className="pt-24">

      {/* ── HERO ── image visible à droite, texte lisible à gauche */}
      <section className="relative bg-[#111111] text-white overflow-hidden min-h-[640px] flex items-center">
        {/* Photo à 55% — gradient de gauche vers transparent à droite */}
        <div className="absolute inset-0">
          <img
            src="/images/bluefin.webp"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">

            {/* Label technique */}
            <div className="text-xs font-bold text-[#2B6CB0] font-['JetBrains_Mono'] uppercase tracking-widest mb-8">
              Distributeur officiel · Garrison Flood Control
            </div>

            {/* H1 — 3 niveaux de poids */}
            <h1 className="font-['Raleway'] mb-8 leading-none">
              <span className="block text-4xl lg:text-5xl font-light text-white/50 tracking-normal">
                L'expertise
              </span>
              <span className="block text-6xl lg:text-8xl font-black text-white tracking-tighter -mt-1">
                BATARDEAUX
              </span>
              <span className="block text-3xl lg:text-4xl font-normal text-white/60 tracking-wide mt-2">
                pour vos projets
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
              Résidentiel, commercial ou industriel — ARMADAM conseille, sélectionne
              et livre le bon système Garrison pour chaque situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produits"
                className="bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all shadow-lg text-center"
              >
                Voir nos batardeaux
              </Link>
              <Link
                to="/analyse"
                className="bg-white/8 hover:bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all border border-white/15 text-center"
              >
                Évaluer mon projet
              </Link>
            </div>

            {/* Stats — JetBrains Mono labels */}
            <div className="flex gap-10 mt-16 pt-8 border-t border-white/10">
              {[
                { val: '14', label: 'Systèmes' },
                { val: '20 ans', label: "D'expertise" },
                { val: '24 h', label: 'Réponse · Livraison rapide' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black font-['Raleway'] text-white">{s.val}</div>
                  <div className="text-xs text-gray-500 mt-1 font-['JetBrains_Mono'] uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF — section asymétrique, image plein bord ── */}
      <section className="bg-[#111111] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[500px]">

          {/* Gauche : texte aligné vers le centre */}
          <div className="flex-1 flex lg:justify-end">
            <div className="w-full lg:max-w-[580px] px-6 lg:pl-8 lg:pr-16 py-20 flex flex-col justify-center">
              <div className="text-xs font-bold text-[#2B6CB0] font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
                Notre position
              </div>
              <h2 className="text-4xl lg:text-5xl font-black font-['Raleway'] text-white leading-tight mb-6">
                Pas seulement<br />l'inondation.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Du chantier résidentiel aux infrastructures complexes, nos batardeaux assurent
                une gestion fiable et sécuritaire de l'eau dans les environnements les plus
                exigeants, là où la maîtrise de l'eau est essentielle.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Analyse de projet incluse — pas seulement la vente',
                  'Sélection parmi 14 systèmes Garrison selon votre cas',
                  'Réponse technique sous 24 h, chaque fois',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#2B6CB0] text-lg flex-shrink-0 mt-0.5">check_circle</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/apropos"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2B6CB0] hover:text-white transition-colors"
              >
                Notre approche
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Droite : image qui saigne jusqu'au bord du viewport */}
          <div className="flex-1 relative min-h-72 lg:min-h-0">
            <img
              src="/images/hammerhead.webp"
              alt="Système de batardeau Garrison HAMMERHEAD"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── QUIZ TEASER — présence interactive en homepage ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-xs font-bold text-[#1F4E79] font-['JetBrains_Mono'] uppercase tracking-widest mb-3">
              Évaluateur de projet
            </div>
            <h2 className="text-3xl lg:text-4xl font-black font-['Raleway'] text-gray-900">
              Quel système pour votre situation ?
            </h2>
            <p className="text-gray-500 mt-2 font-['JetBrains_Mono'] text-sm">
              3 questions · Recommandation immédiate · Gratuit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: 'door_front', label: 'Une ouverture', sub: 'Porte, garage, fenêtre de sous-sol' },
              { icon: 'fence', label: 'Un périmètre', sub: 'Autour du bâtiment ou du terrain' },
              { icon: 'emergency', label: 'Urgence', sub: 'Crue imminente ou en cours' },
            ].map((item) => (
              <Link
                key={item.label}
                to="/analyse"
                className="group flex flex-col gap-4 p-6 bg-gray-50 border border-gray-200 hover:border-[#1F4E79] hover:bg-[#1F4E79] rounded-xl transition-all"
              >
                <span className="material-symbols-outlined text-3xl text-[#1F4E79] group-hover:text-white transition-colors">
                  {item.icon}
                </span>
                <div>
                  <div className="font-bold font-['Raleway'] text-gray-900 group-hover:text-white transition-colors mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-white/70 transition-colors leading-snug">
                    {item.sub}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-[#1F4E79] group-hover:text-white/80 transition-colors mt-auto">
                  Évaluer
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUITS EN VEDETTE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs font-bold text-[#1F4E79] font-['JetBrains_Mono'] uppercase tracking-widest mb-3">
                Sélection produits
              </div>
              <h2 className="text-3xl lg:text-4xl font-black font-['Raleway'] text-gray-900">
                Nos batardeaux
              </h2>
            </div>
            <Link
              to="/produits"
              className="hidden md:flex items-center gap-2 text-sm text-[#1F4E79] hover:gap-3 transition-all font-medium font-['JetBrains_Mono']"
            >
              Voir les 14 systèmes
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/produits/hammerhead" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all block">
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                <img
                  src="/images/hammerhead.webp"
                  alt="HAMMERHEAD — système de planches aluminium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 font-['JetBrains_Mono'] uppercase tracking-wider">
                    Ouvertures
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black font-['Raleway'] mb-2">HAMMERHEAD</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Planches aluminium 6063-T6 dans des poteaux en U fixés à la maçonnerie.
                  Joints SureGasket™, hauteur jusqu'à 3.6 m — résidentiel et commercial.
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-wider mb-0.5">Prix</div>
                    <div className="text-base font-bold font-['JetBrains_Mono'] text-gray-900">Sur devis</div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#1F4E79] font-semibold text-sm group-hover:gap-2.5 transition-all">
                    En savoir plus
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/produits/mako" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all block">
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                <img
                  src="/images/mako.webp"
                  alt="MAKO — barrière gonflable pressurisée"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 font-['JetBrains_Mono'] uppercase tracking-wider">
                    Ouvertures
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black font-['Raleway'] mb-2">MAKO</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Sections PVC drop-stitch gonflées sous pression dans l'ouverture, sans ancrage.
                  Sur mesure jusqu'à 108" — 2 chambres indépendantes.
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-wider mb-0.5">À partir de</div>
                    <div className="text-base font-bold font-['JetBrains_Mono'] text-gray-900">580 $ CAD</div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#1F4E79] font-semibold text-sm group-hover:gap-2.5 transition-all">
                    En savoir plus
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#1F4E79]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black font-['Raleway'] text-white mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Notre expertise à votre service — réponse sous 24 heures avec une recommandation
            adaptée à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/analyse"
              className="bg-white text-[#1F4E79] hover:bg-gray-50 px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all shadow-lg text-center"
            >
              Évaluer mon projet
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all border border-white/20 text-center"
            >
              Parler à un expert
            </Link>
          </div>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </main>
  );
}
