import { useState } from 'react';

const PRODUCTS = [
  'Conseils généraux', 'HAMMERHEAD', 'MAKO', 'YELLOWFIN',
  'BLUEFIN', 'MAYIM', 'STINGRAY', 'OYSTER',
  'GUPPY', 'GUPPY MAX', 'SERPENT', 'MINNOW',
  'BELUGA', 'SANDBAGS', 'SEA SPONGE',
];

interface FormState {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  produit: string;
  type: string;
  urgence: string;
  message: string;
  date: string;
}

const EMPTY: FormState = {
  prenom: '', nom: '', email: '', telephone: '',
  adresse: '', produit: 'Conseils généraux',
  type: 'résidentiel', urgence: 'non', message: '', date: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [ref, setRef] = useState('');

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          adresse: form.adresse,
          produit: form.produit,
          type: form.type,
          urgence: form.urgence === 'oui',
          dimensions: form.message,
          date: form.date || new Date().toISOString().split('T')[0],
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setRef(data.ref);
        setStatus('success');
        setForm(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full h-11 px-4 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent bg-white transition-all';
  const labelCls = 'block text-xs font-bold text-gray-700 mb-1.5 font-["JetBrains_Mono"] uppercase tracking-wider';

  return (
    <main className="pt-24 pb-24 md:pb-8">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1F4E79] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-xs text-gray-400 mb-3 font-['JetBrains_Mono'] tracking-widest uppercase">
            Contact
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-['Raleway'] mb-4 leading-tight">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Soumettez votre demande et un expert Armadam vous répond sous 24 heures
            avec une recommandation et un devis personnalisé.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Form */}
            <div className="md:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
                  <span className="material-symbols-outlined text-7xl text-green-500 mb-4 block">check_circle</span>
                  <h2 className="text-2xl font-bold font-['Raleway'] text-gray-900 mb-2">
                    Demande reçue
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Votre référence est <span className="font-bold font-['JetBrains_Mono'] text-[#1F4E79]">#{ref}</span>
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    Un expert Armadam vous contacte dans les 24 heures ouvrables.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-[#1F4E79] hover:bg-[#2B6CB0] text-white rounded-lg font-bold font-['Raleway'] transition-all"
                  >
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold font-['Raleway'] text-gray-900 mb-6">
                    Demande de devis / information
                  </h2>

                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className={labelCls}>Prénom *</label>
                      <input
                        type="text"
                        required
                        value={form.prenom}
                        onChange={set('prenom')}
                        placeholder="Jean"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Nom *</label>
                      <input
                        type="text"
                        required
                        value={form.nom}
                        onChange={set('nom')}
                        placeholder="Tremblay"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className={labelCls}>Courriel *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder="jean@exemple.ca"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Téléphone</label>
                      <input
                        type="tel"
                        value={form.telephone}
                        onChange={set('telephone')}
                        placeholder="514 000-0000"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-5">
                    <label className={labelCls}>Adresse de la propriété</label>
                    <input
                      type="text"
                      value={form.adresse}
                      onChange={set('adresse')}
                      placeholder="123 rue des Érables, Laval, QC"
                      className={inputCls}
                    />
                  </div>

                  {/* Product + type */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className={labelCls}>Produit d'intérêt</label>
                      <select value={form.produit} onChange={set('produit')} className={inputCls}>
                        {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Type de projet</label>
                      <select value={form.type} onChange={set('type')} className={inputCls}>
                        <option value="résidentiel">Résidentiel</option>
                        <option value="commercial">Commercial</option>
                        <option value="industriel">Industriel</option>
                        <option value="institutionnel">Institutionnel</option>
                        <option value="municipal">Municipal / Infrastructure</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgence + date */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className={labelCls}>Urgence</label>
                      <select value={form.urgence} onChange={set('urgence')} className={inputCls}>
                        <option value="non">Non — planification normale</option>
                        <option value="oui">Oui — crue imminente</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Date souhaitée</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={set('date')}
                        min={new Date().toISOString().split('T')[0]}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label className={labelCls}>Détails du projet</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Décrivez votre situation : type d'ouverture, dimensions approximatives, risque actuel, questions..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F4E79] focus:border-transparent bg-white transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mb-4 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      Une erreur est survenue. Veuillez réessayer ou nous écrire directement.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-[#1F4E79] hover:bg-[#2B6CB0] disabled:opacity-60 text-white rounded-lg font-bold font-['Raleway'] transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer la demande
                        <span className="material-symbols-outlined text-xl">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Response time */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="material-symbols-outlined text-[#1F4E79] text-3xl mb-3 block">schedule</span>
                <h3 className="font-bold font-['Raleway'] text-gray-900 mb-1">Réponse en 24 h</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Nos experts répondent à toutes les demandes le jour ouvrable suivant.
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="material-symbols-outlined text-[#1F4E79] text-3xl mb-3 block">mail</span>
                <h3 className="font-bold font-['Raleway'] text-gray-900 mb-1">Courriel direct</h3>
                <a
                  href="mailto:info@armadam.ca"
                  className="text-sm text-[#1F4E79] hover:text-[#2B6CB0] font-['JetBrains_Mono'] transition-colors"
                >
                  info@armadam.ca
                </a>
              </div>

              {/* Region */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="material-symbols-outlined text-[#1F4E79] text-3xl mb-3 block">location_on</span>
                <h3 className="font-bold font-['Raleway'] text-gray-900 mb-1">Service Québec</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Distributeur officiel Garrison Flood Control pour l'ensemble du Québec.
                  Livraison partout dans la province.
                </p>
              </div>

              {/* Certifications */}
              <div className="bg-[#111111] rounded-xl p-6 text-white">
                <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
                  Certifications produits
                </div>
                {['FEMA NFIP TB3', 'FM Global approved', 'EN 13501-B1', 'Made in USA'].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300 mb-2 last:mb-0">
                    <span className="material-symbols-outlined text-[#2B6CB0] text-base">check_circle</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
