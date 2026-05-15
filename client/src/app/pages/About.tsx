import { useNavigate } from 'react-router';

const VALUES = [
  {
    icon: 'verified_user',
    title: 'Certification avant tout',
    body: 'Nous ne distribuons que des systèmes certifiés FEMA/NFIP. Chaque produit Garrison est testé et homologué — pas de compromis sur la protection.',
  },
  {
    icon: 'engineering',
    title: 'Expertise technique',
    body: "Notre équipe maîtrise les normes de floodproofing à sec, les calculs de pression hydrostatique et les contraintes d'installation pour chaque type de bâtiment.",
  },
  {
    icon: 'local_shipping',
    title: 'Stock local au Québec',
    body: "En tant que distributeur officiel, nous maintenons un inventaire au Québec. Pas de délai d'importation — livraison rapide partout dans la province.",
  },
  {
    icon: 'support_agent',
    title: 'Accompagnement complet',
    body: "De l'évaluation du risque à l'installation, nos experts vous guident à chaque étape. Devis personnalisé, formation d'équipe, support post-livraison.",
  },
];

const CERTIFICATIONS = [
  { label: 'FEMA NFIP', sub: 'Bulletin technique 3' },
  { label: 'FM Global', sub: 'Flood barrier approved' },
  { label: 'EN 13501', sub: 'Résistance au feu B1' },
  { label: 'ASTM E1886', sub: 'Impact resistance' },
];

const STATS = [
  { val: '5 000+', label: 'Projets Garrison dans le monde' },
  { val: '14', label: 'Systèmes disponibles' },
  { val: '24 h', label: 'Délai de réponse' },
  { val: '100 %', label: 'Certifié FEMA/NFIP' },
];

export function About() {
  const navigate = useNavigate();

  return (
    <main className="pt-24 pb-24 md:pb-8">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1F4E79] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-xs text-gray-400 mb-3 font-['JetBrains_Mono'] tracking-widest uppercase">
            À propos
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold font-['Raleway'] mb-6 leading-tight">
            La référence québécoise<br />en protection anti-inondation
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Armadam est le distributeur officiel Garrison Flood Control au Québec —
            le fabricant américain leader mondial en systèmes de batardeaux certifiés FEMA/NFIP.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold font-['Raleway'] text-[#1F4E79] mb-2">{s.val}</div>
                <div className="text-sm text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">
                Notre mission
              </div>
              <h2 className="text-3xl font-bold font-['Raleway'] text-gray-900 mb-5">
                Rendre la protection anti-inondation accessible et fiable
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Au Québec, les inondations coûtent des centaines de millions de dollars chaque année.
                Des résidences, commerces et infrastructures critiques sont touchés — souvent faute
                de protection adéquate ou d'information sur les solutions disponibles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Armadam existe pour changer ça. En tant que distributeur officiel Garrison,
                nous apportons des systèmes éprouvés — utilisés dans plus de 5 000 projets
                à travers l'Amérique du Nord — directement aux propriétaires et gestionnaires
                d'immeubles québécois.
              </p>
              <button
                onClick={() => navigate('/analyse')}
                className="inline-flex items-center gap-2 bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-6 py-3 rounded-lg font-bold font-['Raleway'] transition-all"
              >
                Évaluer mon risque
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
            <div className="bg-[#111111] rounded-2xl p-8 text-white">
              <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-6">
                Partenaire officiel
              </div>
              <div className="text-2xl font-bold font-['Raleway'] mb-3">Garrison Flood Control</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Fondé aux États-Unis, Garrison est l'un des plus grands fabricants mondiaux de
                systèmes anti-inondation. Leurs produits protègent des aéroports, hôpitaux,
                infrastructures gouvernementales et résidences dans plus de 40 pays.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {CERTIFICATIONS.map((c, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                    <div className="font-bold font-['JetBrains_Mono'] text-sm text-white">{c.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">
              Nos engagements
            </div>
            <h2 className="text-3xl font-bold font-['Raleway'] text-gray-900">
              Pourquoi choisir Armadam
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F4E79]/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1F4E79] text-2xl">{v.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold font-['Raleway'] text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">
              Notre approche
            </div>
            <h2 className="text-3xl font-bold font-['Raleway'] text-gray-900">
              Du risque à la protection en 4 étapes
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Analyse du risque', body: 'Évaluation de la zone de crue, de la profondeur estimée et des exigences FEMA applicables à votre secteur.' },
              { n: '02', title: 'Sélection du système', body: 'Choix du produit Garrison adapté selon le type de structure, la profondeur de crue et les contraintes d\'installation.' },
              { n: '03', title: 'Devis & livraison', body: 'Soumission détaillée avec délais. Livraison depuis notre stock québécois — pas de délai d\'importation.' },
              { n: '04', title: 'Support & formation', body: 'Instructions d\'installation, formation de l\'équipe sur site, et support technique post-livraison.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold font-['Raleway'] text-gray-100 mb-3 leading-none select-none">{step.n}</div>
                <h3 className="font-bold font-['Raleway'] text-gray-900 text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F4E79] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-['Raleway'] text-white mb-4">
            Un projet de protection ?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Nos experts évaluent votre situation et vous recommandent le bon système Garrison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/analyse')}
              className="bg-white text-[#1F4E79] hover:bg-gray-50 px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all shadow-lg"
            >
              Évaluer mon risque
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all border border-white/20"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
