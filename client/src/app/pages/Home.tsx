import { Link } from 'react-router';
import { useEffect } from 'react';

const APPLICATIONS = [
  { icon: 'home_work', label: 'Chantiers résidentiels', desc: 'Portes, garages, fenêtres de sous-sol et entrées de terrain.' },
  { icon: 'account_balance', label: 'Infrastructures municipales', desc: 'Stations de pompage, tunnels, ouvrages de traitement des eaux.' },
  { icon: 'directions_car', label: 'Accès souterrains et rampes', desc: 'Stationnements intérieurs, rampes d\'accès et couloirs techniques.' },
  { icon: 'factory', label: 'Sites industriels', desc: 'Périmètres d\'usines, entrepôts et zones de stockage critiques.' },
  { icon: 'construction', label: 'Travaux temporaires', desc: 'Protection déployable pour la durée d\'une intervention ou d\'une saison.' },
  { icon: 'door_front', label: 'Ouvertures critiques', desc: 'Portes industrielles, baies de chargement, grandes ouvertures structurelles.' },
];

const WHY_GARRISON = [
  { num: '01', label: 'Installation rapide', desc: 'Déploiement en 10 à 30 minutes selon le système — sans outillage spécialisé ni génie civil.' },
  { num: '02', label: 'Solutions modulaires', desc: 'Hauteur et portée configurables par ouverture. Sections empilables jusqu\'à 3,6 m.' },
  { num: '03', label: 'Conception robuste', desc: 'Aluminium 6063-T6, fibre de verre honeycomb, joints EPDM et boulonnerie inox 316L.' },
  { num: '04', label: 'Adapté aux environnements exigeants', desc: 'FM Global Approved. NFIP Compliant. Validé pour charges hydrostatiques, UV et conditions sévères.' },
  { num: '05', label: 'Projets de toute envergure', desc: 'Du résidentiel à l\'industriel lourd — 14 systèmes Garrison couvrent chaque configuration.' },
];

export function Home() {
  useEffect(() => {
    document.title = 'Armadam — Systèmes de contrôle temporaire de l\'eau';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Distributeur officiel Garrison Flood Control au Québec. Systèmes de batardeaux pour environnements critiques — résidentiel, commercial, industriel. Conseil et soumission en 24h.');
  }, []);

  return (
    <main className="pt-24">

      {/* ── HERO — cinématographique, plein cadre ── */}
      <section className="relative bg-[#0D0D0D] text-white overflow-hidden" style={{ minHeight: 'calc(100vh - 96px)' }}>
        <div className="absolute inset-0">
          <img
            src="/images/bluefin.webp"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.45 }}
          />
          {/* Gradient plus dramatique — lisibilité gauche, image droite */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(105deg, #0D0D0D 45%, rgba(13,13,13,0.7) 65%, rgba(13,13,13,0.15) 100%)'
          }} />
          {/* Ligne de sol — detail industriel */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center py-32 lg:py-40">

          {/* Eyebrow — identité technique */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-[#C4862A]" />
            <span className="text-xs font-bold text-[#C4862A] font-['JetBrains_Mono'] uppercase tracking-[0.2em]">
              Distributeur officiel · Garrison Flood Control
            </span>
          </div>

          {/* H1 — typographie industrielle forte */}
          <h1 className="font-['Raleway'] leading-none mb-10 max-w-3xl">
            <span className="block text-2xl lg:text-3xl font-light text-white/50 tracking-wide mb-3">
              Solutions de contrôle temporaire de l'eau
            </span>
            <span className="block text-5xl lg:text-7xl font-black text-white tracking-tight">
              pour les
            </span>
            <span className="block text-5xl lg:text-7xl font-black tracking-tight" style={{ color: '#C4862A' }}>
              environnements
            </span>
            <span className="block text-5xl lg:text-7xl font-black text-white tracking-tight">
              critiques.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-white/60 mb-12 max-w-xl leading-relaxed font-light">
            Du chantier résidentiel aux infrastructures complexes, nos batardeaux assurent une gestion
            fiable et sécuritaire de l'eau dans les environnements les plus exigeants — là où la maîtrise
            de l'eau est essentielle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C4862A] hover:bg-[#D4962A] text-white px-8 py-4 font-bold font-['Raleway'] transition-all shadow-lg"
            >
              Demander une soumission
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white px-8 py-4 font-medium font-['Raleway'] transition-all border border-white/20 hover:border-white/40"
            >
              Parler à un expert
            </Link>
          </div>

          {/* Métriques techniques — strip bas de hero */}
          <div className="flex flex-wrap gap-10 mt-20 pt-8 border-t border-white/10">
            {[
              { val: '14', label: 'Systèmes Garrison' },
              { val: '3,6 m', label: 'Hauteur max. certifiée' },
              { val: '24 h', label: 'Réponse · Livraison rapide' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black font-['Raleway'] text-white">{s.val}</div>
                <div className="text-xs text-white/40 mt-1 font-['JetBrains_Mono'] uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS — contextes d'usage ── */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C4862A]" />
              <span className="text-xs font-bold text-[#C4862A] font-['JetBrains_Mono'] uppercase tracking-[0.2em]">
                Applications
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black font-['Raleway'] text-white leading-tight">
              Chaque environnement<br />a sa solution.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {APPLICATIONS.map((app) => (
              <div key={app.label} className="bg-[#111111] p-8 hover:bg-[#1A1A1A] transition-colors group">
                <span className="material-symbols-outlined text-2xl text-[#C4862A] mb-5 block">
                  {app.icon}
                </span>
                <div className="text-base font-bold font-['Raleway'] text-white mb-2 group-hover:text-[#C4862A] transition-colors">
                  {app.label}
                </div>
                <div className="text-sm text-white/40 leading-relaxed font-light">
                  {app.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF — asymétrique, image plein bord ── */}
      <section className="bg-[#0D0D0D] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">

          {/* Image — bleed gauche */}
          <div className="flex-1 relative min-h-80 lg:min-h-0 order-2 lg:order-1">
            <img
              src="/images/hammerhead.webp"
              alt="Système de batardeau Garrison HAMMERHEAD en installation"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.75 }}
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to right, transparent 60%, #0D0D0D 100%)'
            }} />
          </div>

          {/* Texte — droite */}
          <div className="flex-1 flex lg:items-center order-1 lg:order-2">
            <div className="w-full lg:max-w-[540px] px-6 lg:pl-16 lg:pr-8 py-20">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#C4862A]" />
                <span className="text-xs font-bold text-[#C4862A] font-['JetBrains_Mono'] uppercase tracking-[0.2em]">
                  Pourquoi Garrison
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black font-['Raleway'] text-white leading-tight mb-10">
                Ingénierie de terrain.<br />Pas seulement<br />de la vente.
              </h2>

              <div className="space-y-8">
                {WHY_GARRISON.map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <div className="text-xs font-bold font-['JetBrains_Mono'] text-[#C4862A] mt-0.5 w-6 flex-shrink-0 tracking-wider">
                      {item.num}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                      <div className="text-sm text-white/40 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/produits"
                className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-white/60 hover:text-[#C4862A] transition-colors font-['JetBrains_Mono'] uppercase tracking-wider"
              >
                Voir les 14 systèmes
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUITS EN VEDETTE ── */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#C4862A]" />
                <span className="text-xs font-bold text-[#C4862A] font-['JetBrains_Mono'] uppercase tracking-[0.2em]">
                  Sélection produits
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black font-['Raleway'] text-white">
                Nos batardeaux
              </h2>
            </div>
            <Link
              to="/produits"
              className="hidden md:flex items-center gap-2 text-sm text-white/40 hover:text-[#C4862A] hover:gap-3 transition-all font-medium font-['JetBrains_Mono'] uppercase tracking-wider"
            >
              Voir les 14 systèmes
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* HAMMERHEAD */}
            <Link to="/produits/hammerhead" className="group block bg-[#0D0D0D] hover:bg-[#161616] transition-colors overflow-hidden">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/images/hammerhead.webp"
                  alt="HAMMERHEAD — système de planches aluminium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ opacity: 0.85 }}
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0D0D0D 0%, transparent 50%)' }} />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 text-xs font-bold text-white/70 font-['JetBrains_Mono'] uppercase tracking-wider">
                    Ouvertures · Permanent
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-black font-['Raleway'] text-white">HAMMERHEAD</h3>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Planches aluminium 6063-T6 dans des poteaux en U fixés à la maçonnerie.
                  Joints SureGasket™, hauteur jusqu'à 3,6 m. Résidentiel et commercial.
                </p>
                <div className="flex items-center justify-between border-t border-white/8 pt-5">
                  <div>
                    <div className="text-xs text-white/30 font-['JetBrains_Mono'] uppercase tracking-wider mb-0.5">Prix</div>
                    <div className="text-sm font-bold font-['JetBrains_Mono'] text-white">Sur devis</div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#C4862A] font-semibold text-xs font-['JetBrains_Mono'] uppercase tracking-wider group-hover:gap-3 transition-all">
                    Détails
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* MAKO */}
            <Link to="/produits/mako" className="group block bg-[#0D0D0D] hover:bg-[#161616] transition-colors overflow-hidden">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src="/images/mako.webp"
                  alt="MAKO — barrière gonflable pressurisée"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ opacity: 0.85 }}
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0D0D0D 0%, transparent 50%)' }} />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 text-xs font-bold text-white/70 font-['JetBrains_Mono'] uppercase tracking-wider">
                    Ouvertures · Déployable
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-black font-['Raleway'] text-white">MAKO</h3>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Sections PVC drop-stitch gonflées sous pression dans l'ouverture, sans ancrage
                  maçonné. Sur mesure jusqu'à 108" — 2 chambres indépendantes.
                </p>
                <div className="flex items-center justify-between border-t border-white/8 pt-5">
                  <div>
                    <div className="text-xs text-white/30 font-['JetBrains_Mono'] uppercase tracking-wider mb-0.5">À partir de</div>
                    <div className="text-sm font-bold font-['JetBrains_Mono'] text-white">580 $ CAD</div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#C4862A] font-semibold text-xs font-['JetBrains_Mono'] uppercase tracking-wider group-hover:gap-3 transition-all">
                    Détails
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJETS TERRAIN À VENIR ── */}
      <section className="bg-[#0D0D0D] border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-white/20" />
                <span className="text-xs font-bold text-white/30 font-['JetBrains_Mono'] uppercase tracking-[0.2em]">
                  En développement
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black font-['Raleway'] text-white leading-tight mb-6">
                Projets et applications<br />terrain à venir.
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-md">
                Nous documentons actuellement nos premières installations et projets afin de présenter
                prochainement des cas d'usage réels, des applications terrain et des déploiements dans
                différents environnements.
              </p>
            </div>

            {/* Placeholders — grille sobre */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { label: 'Études de cas', icon: 'folder_open' },
                { label: 'Photos terrain', icon: 'photo_camera' },
                { label: 'Projets phares', icon: 'star' },
                { label: 'Témoignages', icon: 'format_quote' },
              ].map((item) => (
                <div key={item.label} className="border border-white/5 p-6 flex flex-col gap-3 opacity-40">
                  <span className="material-symbols-outlined text-xl text-white/40">{item.icon}</span>
                  <div className="text-xs font-['JetBrains_Mono'] uppercase tracking-wider text-white/40">
                    {item.label}
                  </div>
                  <div className="text-xs text-white/20">À venir</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A3A5C] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#C4862A]" />
            <span className="text-xs font-bold text-[#C4862A] font-['JetBrains_Mono'] uppercase tracking-[0.2em]">
              Contact
            </span>
            <div className="w-8 h-px bg-[#C4862A]" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-black font-['Raleway'] text-white mb-6 leading-tight">
            Parlons de votre projet.
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            Notre expertise à votre service — réponse sous 24 heures avec une recommandation
            adaptée à votre situation et à votre environnement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C4862A] hover:bg-[#D4962A] text-white px-10 py-4 font-bold font-['Raleway'] transition-all shadow-lg"
            >
              Demander une soumission
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <Link
              to="/analyse"
              className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white px-10 py-4 font-medium font-['Raleway'] transition-all border border-white/20 hover:border-white/40"
            >
              Évaluer mon projet
            </Link>
          </div>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </main>
  );
}
