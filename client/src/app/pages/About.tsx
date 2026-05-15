import { useNavigate } from 'react-router';
import { useEffect } from 'react';

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
    title: 'Stock local au Canada',
    body: "En tant que distributeur officiel, nous maintenons un inventaire au Canada. Pas de délai d'importation — livraison rapide partout au Canada.",
  },
  {
    icon: 'support_agent',
    title: 'Accompagnement 360°',
    body: "De l'analyse de risque à l'installation, nos experts vous guident à chaque étape. Réponse garantie sous 24 heures ouvrables.",
  },
];

const STEPS = [
  { n: '01', title: 'Analyse du projet', body: 'Vous décrivez votre situation — type de bâtiment, ouvertures à protéger, niveau de risque estimé.' },
  { n: '02', title: 'Recommandation', body: "Notre évaluateur ou un expert identifie le système Garrison adapté à votre cas spécifique." },
  { n: '03', title: 'Devis personnalisé', body: 'Vous recevez un devis détaillé avec les spécifications, le prix et le délai de livraison.' },
  { n: '04', title: 'Livraison & support', body: "Le produit est livré depuis notre stock québécois. Support technique inclus pour l'installation." },
];

export function About() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'À propos — Distributeur officiel Garrison | Armadam';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'ARMADAM est le distributeur officiel Garrison Flood Control pour le Canada. Expertise en floodproofing, stock local, support francophone et réponse sous 24 heures.');
  }, []);

  return (
    <main className="pt-24 pb-24 md:pb-8">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1F4E79] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-xs text-gray-400 mb-3 font-['JetBrains_Mono'] tracking-widest uppercase">
            À propos
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-['Raleway'] mb-6 leading-tight max-w-3xl">
            Le spécialiste canadien en protection contre les inondations
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            ARMADAM est le distributeur officiel Garrison Flood Control pour l'ensemble du Canada.
            Notre mission : rendre accessible la meilleure protection certifiée FEMA pour tous les types de projets.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '14', label: 'Produits certifiés' },
              { val: 'CAN', label: 'Distribution nationale' },
              { val: '24 h', label: 'Délai de réponse' },
              { val: '100%', label: 'Produits FEMA/NFIP' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold font-['Raleway'] text-[#1F4E79] mb-1">{s.val}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garrison partnership */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-3">
                Partenariat officiel
              </div>
              <h2 className="text-3xl font-bold font-['Raleway'] text-gray-900 mb-4">
                Garrison Flood Control
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Garrison Flood Control est le fabricant américain de référence pour les systèmes
                de batardeaux certifiés FEMA. Leurs produits protègent des centaines d'installations
                critiques — hôpitaux, stations de transit, installations industrielles — aux États-Unis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                En tant que distributeur exclusif au Canada, ARMADAM offre l'accès à toute la gamme
                Garrison avec stock local, support francophone et expertise réglementaire québécoise.
              </p>
            </div>
            <div className="bg-[#111111] rounded-2xl p-8 text-white">
              <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-6">
                Certifications produits
              </div>
              {[
                { icon: 'verified_user', label: 'FEMA NFIP Bulletin Technique 3' },
                { icon: 'check_circle', label: 'FM Global Approved' },
                { icon: 'check_circle', label: 'EN 13501-B1' },
                { icon: 'factory', label: 'Made in USA' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
                  <span className="material-symbols-outlined text-[#2B6CB0] text-xl">{c.icon}</span>
                  <span className="text-gray-300 text-sm">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-['Raleway'] text-gray-900 mb-10">Nos valeurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {VALUES.map((v, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F4E79]/8 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1F4E79] text-2xl">{v.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg font-['Raleway'] text-gray-900 mb-2">{v.title}</h3>
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
          <h2 className="text-3xl font-bold font-['Raleway'] text-gray-900 mb-10">Notre processus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-xs font-['JetBrains_Mono'] text-[#1F4E79] mb-3">{s.n}</div>
                <h3 className="font-bold text-lg font-['Raleway'] text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F4E79] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-['Raleway'] text-white mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Un expert Armadam répond sous 24 heures avec une recommandation et un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#1F4E79] hover:bg-gray-50 px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all"
            >
              Nous contacter
            </button>
            <button
              onClick={() => navigate('/analyse')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all border border-white/20"
            >
              Évaluer mon projet
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
