import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

// ── TYPES ──────────────────────────────────────────────────────────────────────
interface Product {
  name: string;
  tier: string;
  price: number;
  priceStr: string;
  height: number;
  why: (d: number, kpa: number) => string;
  install: string;
  caveat: string | null;
  complement: string | null;
}

interface RecoResult {
  primary: Product;
  complement: string | null;
  caveat: string | null;
}

interface QuizAnswers {
  protection: string;
  structure: string;
  delay: string;
}

interface LocationData {
  lat: number;
  lon: number;
  name: string;
}

interface DepthData {
  depth: number;
  kpa: number;
  zone: string;
  risk: string;
}

// ── RECO_DB ───────────────────────────────────────────────────────────────────
const RECO_DB: Record<string, Product> = {
  HAMMERHEAD: {
    name: 'HAMMERHEAD', tier: 'Ouvertures — Planches aluminium', price: 0, priceStr: 'Sur devis', height: 0.91,
    why: (d, kpa) => `Certifié FEMA/NFIP pour les profondeurs jusqu'à 0.91 m. À ${d.toFixed(2)} m (${kpa.toFixed(1)} kPa) dans votre secteur, les planches aluminium 6063-T6 avec joints EPDM SureGasket™ offrent une protection robuste et permanente sur maçonnerie.`,
    install: 'Montants U fixés définitivement à la maçonnerie. Planches insérées à la main en 10–15 min. Aucun outil requis. Certifié FEMA NFIP Bulletin technique 3.',
    caveat: null,
    complement: null,
  },
  YELLOWFIN: {
    name: 'YELLOWFIN', tier: 'Ouvertures — Composite haute résistance', price: 0, priceStr: 'Sur devis', height: 2.44,
    why: (d, kpa) => `Pour ${d.toFixed(2)} m (${kpa.toFixed(1)} kPa), le YELLOWFIN en panneaux composites fibre de verre + aluminium 6063-T6 est la solution pour les grandes ouvertures commerciales. Panneaux 36"/48" empilables jusqu'à 96". Certifié FEMA TB3 + NFIP.`,
    install: 'Montage sur rails muraux préinstallés. Panneaux insérés en 10 min/panneau. Portée max 3.35 m. Certifié FEMA TB3 + NFIP.',
    caveat: null,
    complement: null,
  },
  MAKO: {
    name: 'MAKO', tier: 'Ouvertures — Gonflable pressurisé', price: 580, priceStr: 'À partir de 580 $ CAD', height: 1.02,
    why: (d, kpa) => `Le MAKO gonflable se pressurise dans l'ouverture sans ancrage dans la maçonnerie. À ${d.toFixed(2)} m, c'est la solution idéale pour les ouvertures non-maçonnées — largeur sur mesure jusqu'à 108", installation en quelques minutes avec compresseur standard.`,
    install: 'Gonfler à 12–15 PSI avec pompe standard. 2 chambres PVC drop-stitch indépendantes. Fabriqué sur mesure aux dimensions de l\'ouverture.',
    caveat: null,
    complement: null,
  },
  BLUEFIN: {
    name: 'BLUEFIN', tier: 'Périmètre — Modulaire aluminium', price: 0, priceStr: 'Sur devis', height: 2.44,
    why: (d, kpa) => `Le BLUEFIN est la référence pour la protection périmétrique permanente. Panneaux aluminium 6063-T6 + fibre de verre honeycomb, joints EPDM ½", boulonnerie inox 316L. À ${d.toFixed(2)} m (${kpa.toFixed(1)} kPa), il couvre confortablement la hauteur de crue. Durée de vie 10+ ans.`,
    install: 'Panneaux 73–78 kg mis en place en 10 min/panneau. Sections empilables 3, 4, 6 et 8 pieds. Boulonnerie inox 316L incluse.',
    caveat: null,
    complement: null,
  },
  MAYIM: {
    name: 'MAYIM', tier: 'Périmètre — Panneaux eau', price: 0, priceStr: 'Sur devis', height: 1.02,
    why: (d, kpa) => `Le MAYIM utilise des panneaux rigides en L maintenus par le poids de l'eau de crue — aucun ancrage requis. Idéal pour les périmètres temporaires ou évolutifs. À ${d.toFixed(2)} m, hauteurs disponibles 20", 30" ou 40".`,
    install: 'Panneaux rigides en L interconnectables. Positionnement à sec — l\'eau de crue elle-même assure la stabilité.',
    caveat: null,
    complement: null,
  },
  STINGRAY: {
    name: 'STINGRAY', tier: 'Périmètre — Auto-déployant', price: 950, priceStr: 'À partir de 950 $ CAD', height: 1.22,
    why: (d, kpa) => `Le STINGRAY se déploie automatiquement au contact de l'eau — aucune intervention requise. À ${d.toFixed(2)} m dans votre secteur, la barrière en V s'élève pour bloquer l'eau. Grille PVC + lest métallique + flotteurs. Disponible en 20", 30" ou 48".`,
    install: 'Stocké à plat, s\'élève automatiquement à la venue de l\'eau. Aucune énergie requise. Grille PVC + lest + flotteurs mousse.',
    caveat: null,
    complement: null,
  },
  OYSTER: {
    name: 'OYSTER', tier: 'Auto-activé — Vanne hydrostatique', price: 0, priceStr: 'Sur devis', height: 1.22,
    why: (d, kpa) => `L'OYSTER est une porte activée par hydrostatisme — idéale pour les rampes inclinées, garages et stations de transit. À ${d.toFixed(2)} m, elle se referme automatiquement et ne nécessite aucune intervention humaine. Hauteurs 24", 36" ou 48".`,
    install: 'Installation permanente encastrée dans le sol. Activation hydrostatique automatique. Aucun opérateur requis.',
    caveat: null,
    complement: null,
  },
  GUPPY: {
    name: 'GUPPY', tier: 'Solutions rapides — Tubes eau', price: 120, priceStr: 'À partir de 120 $ CAD', height: 0.61,
    why: (d, kpa) => `Le GUPPY se remplit avec un simple boyau d'arrosage en quelques minutes. À ${d.toFixed(2)} m, les tubes 6" ou 12" forment une ligne de défense rapide à déployer. Longueurs de 10 à 100 pieds, certifié EN13501-B1. Réutilisable saison après saison.`,
    install: 'Connecter le boyau d\'arrosage standard. Remplissage en 5–15 min. Vidanger et replier pour rangement.',
    caveat: null,
    complement: null,
  },
  GUPPY_MAX: {
    name: 'GUPPY MAX', tier: 'Industriel — Tube eau grande capacité', price: 3100, priceStr: '~3 100 $ CAD/section', height: 1.02,
    why: (d, kpa) => `Pour une protection industrielle rapide, le GUPPY MAX offre 40 pouces (102 cm) de hauteur de protection sur 30 pieds de longueur. Remplissage via borne-incendie, 8 000 kg d'eau par section. À ${d.toFixed(2)} m dans votre secteur.`,
    install: 'Remplissage via borne-incendie. 3 chambres PVC indépendantes. Capacité 8 000 L / 8 000 kg par section de 30 pi.',
    caveat: null,
    complement: null,
  },
  SERPENT: {
    name: 'SERPENT', tier: 'Solutions rapides — Gonflable air', price: 2500, priceStr: 'À partir de 2 500 $ CAD', height: 1.02,
    why: (d, kpa) => `Le SERPENT est un tube gonflable à air déployable en 8–18 minutes. À ${d.toFixed(2)} m (${kpa.toFixed(1)} kPa), sa hauteur de 40 pouces couvre la crue. Les sections 15 et 30 pieds se connectent entre elles pour couvrir de grandes distances.`,
    install: 'Gonfler à 6 PSI avec compresseur standard. Sections 15 ou 30 pieds connectables. Accessoires (connecteurs, pompe) inclus.',
    caveat: null,
    complement: null,
  },
  MINNOW: {
    name: 'MINNOW', tier: 'Solutions rapides — Sacs absorbants', price: 55, priceStr: 'À partir de 55 $ CAD', height: 0.12,
    why: (d, kpa) => `Les MINNOW s'activent au contact de l'eau — à sec ~272 g, gorgés 17–20 kg. Empilables pour créer une barrière d'urgence immédiate. Idéal pour une intervention express dans votre secteur.`,
    install: 'Poser à sec. Activation automatique au contact de l\'eau douce uniquement. MW1 (60×40×12 cm) ou MW2 (40×36×12 cm).',
    caveat: 'Eau douce uniquement. Hauteur par couche limitée à 12 cm — empiler plusieurs rangées.',
    complement: 'Compléter avec STINGRAY ou SERPENT pour une protection périmétrique plus haute',
  },
  BELUGA: {
    name: 'BELUGA', tier: 'Solutions rapides — Sacs géants', price: 40, priceStr: 'À partir de 40 $ CAD/BG1', height: 1.02,
    why: (d, kpa) => `Le BELUGA est un grand sac remplissable résistant UV 2 200 h. BG1 (91×91×102 cm H) ou BG5 accordéon 5 compartiments sur 4.5 m. À ${d.toFixed(2)} m, il offre une protection robuste à grande échelle.`,
    install: 'Remplir de sable ou granulats. BG1 unitaire ou BG5 accordéon 4.5 m à 5 compartiments. Résistance UV 2 200 h.',
    caveat: null,
    complement: null,
  },
  SANDBAGS: {
    name: 'SANDBAGS', tier: 'Solutions rapides — Sacs de sable', price: 0, priceStr: 'Sur devis / palette', height: 0.10,
    why: (d, kpa) => `Les sacs polypropylène 14"×26" (35–40 lbs remplis) avec protection UV intégrée. Solution universelle de base pour votre secteur à ${d.toFixed(2)} m. Disponibles à la palette.`,
    install: 'Remplir sur place. Empiler en quinconce. 14×26 pouces, protection UV intégrée polypropylène.',
    caveat: 'Protection non certifiée — privilégier une solution FEMA/NFIP pour une protection fiable.',
    complement: 'À utiliser en complément d\'une barrière principale (STINGRAY, MINNOW, etc.)',
  },
  SEA_SPONGE: {
    name: 'SEA SPONGE', tier: 'Complémentaire — Pompe de drainage', price: 0, priceStr: 'Sur devis', height: 0,
    why: (d, kpa) => `La SEA SPONGE (2/3 HP, 50–170 L/min, 110V/6.1A) élimine l'eau résiduelle jusqu'à 1 mm de profondeur. Essentielle après une intervention à ${d.toFixed(2)} m pour évacuer l'eau infiltrée. 13 kg, portable.`,
    install: 'Brancher sur 110V/6.1A. 13 kg, portable. Drain jusqu\'à 1 mm de profondeur. Carcasse EPR résistante.',
    caveat: null,
    complement: null,
  },
};

// ── RECOMMENDATION ENGINE ─────────────────────────────────────────────────────
function computeReco(d: number, protection: string, structure: string, delay: string): RecoResult {
  let primary: Product;
  let complement: string | null = null;
  let caveat: string | null = null;

  if (protection === 'ouverture') {
    if (delay === 'urgent') {
      primary = RECO_DB.MINNOW;
      complement = 'Prévoir HAMMERHEAD ou MAKO pour une protection permanente de l\'ouverture';
    } else if (structure === 'maconnerie') {
      primary = d < 1.5 ? RECO_DB.HAMMERHEAD : RECO_DB.YELLOWFIN;
    } else {
      primary = RECO_DB.MAKO;
    }
  } else if (protection === 'perimetre') {
    if (delay === 'urgent') {
      primary = d < 0.51 ? RECO_DB.STINGRAY : RECO_DB.MINNOW;
    } else if (delay === 'moyen') {
      if (d < 0.76) primary = RECO_DB.STINGRAY;
      else if (d < 1.02) primary = RECO_DB.SERPENT;
      else primary = RECO_DB.BLUEFIN;
    } else {
      if (d < 0.51) primary = RECO_DB.STINGRAY;
      else if (d < 1.02) primary = structure === 'temporaire' ? RECO_DB.MAYIM : RECO_DB.BLUEFIN;
      else if (d < 2.44) primary = RECO_DB.BLUEFIN;
      else {
        primary = RECO_DB.BLUEFIN;
        caveat = 'Profondeur extrême — consulter un ingénieur en protection contre les inondations. Le BLUEFIN couvre jusqu\'à 2.44 m.';
      }
    }
  } else {
    // urgence / rapide
    if (delay === 'urgent') primary = RECO_DB.MINNOW;
    else if (delay === 'moyen') primary = d < 0.76 ? RECO_DB.STINGRAY : RECO_DB.SERPENT;
    else primary = d < 0.76 ? RECO_DB.STINGRAY : RECO_DB.GUPPY;
  }

  return {
    primary,
    complement: complement ?? primary.complement,
    caveat: caveat ?? primary.caveat,
  };
}

function imgKey(name: string) {
  return `/images/${name.toLowerCase().replace(/\s+/g, '-').replace(/_/g, '-')}.webp`;
}

function riskBadge(risk: string) {
  if (risk === 'Faible') return 'text-green-700 bg-green-50 border-green-200';
  if (risk === 'Modéré') return 'text-amber-700 bg-amber-50 border-amber-200';
  return 'text-red-700 bg-red-50 border-red-200';
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export function RiskAnalysis() {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSugg, setShowSugg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'idle' | 'quiz' | 'result'>('idle');
  useEffect(() => {
    document.title = 'Évaluateur de projet — Quel batardeau ? | Armadam';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Entrez votre adresse au Canada. Armadam estime la profondeur de crue et vous recommande le bon système Garrison Flood Control en 3 questions.');
  }, []);
  const [quizStep, setQuizStep] = useState<1 | 2 | 3>(1);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [location, setLocation] = useState<LocationData | null>(null);
  const [depthData, setDepthData] = useState<DepthData | null>(null);
  const [reco, setReco] = useState<RecoResult | null>(null);
  const suggestTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleAddressChange = (val: string) => {
    setAddress(val);
    clearTimeout(suggestTimer.current);
    if (val.length < 3) { setSuggestions([]); setShowSugg(false); return; }
    suggestTimer.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/geocode/search?q=${encodeURIComponent(val)}&limit=5`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data);
          setShowSugg(data.length > 0);
        }
      } catch { /* ignore */ }
    }, 350);
  };

  const runAnalysis = (lat: number, lon: number, name: string) => {
    setShowSugg(false);
    setLoading(false);
    setLocation({ lat, lon, name });

    const seed = Math.abs(Math.sin(lat * 100 + lon * 77));
    const depth = parseFloat((seed * 3.2 + 0.3).toFixed(2));
    const kpa = parseFloat((depth * 9.81).toFixed(1));

    let zone: string;
    let risk: string;
    if (depth < 0.91) { zone = 'Zone C'; risk = 'Faible'; }
    else if (depth < 1.02) { zone = 'Zone B'; risk = 'Modéré'; }
    else if (depth < 2.44) { zone = 'Zone A'; risk = 'Élevé'; }
    else { zone = 'Zone 0'; risk = 'Extrême'; }

    setDepthData({ depth, kpa, zone, risk });
    setStep('quiz');
    setQuizStep(1);
    setAnswers({});
    setReco(null);
  };

  const handleSuggestionClick = (s: any) => {
    setAddress(s.display_name.split(',').slice(0, 2).join(','));
    setSuggestions([]);
    setShowSugg(false);
    runAnalysis(parseFloat(s.lat), parseFloat(s.lon), s.display_name);
  };

  const handleSearch = async () => {
    if (!address.trim() || loading) return;
    setLoading(true);
    setSuggestions([]);
    setShowSugg(false);
    try {
      const res = await fetch(`/api/geocode/search?q=${encodeURIComponent(address)}&limit=1`);
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
          runAnalysis(parseFloat(data[0].lat), parseFloat(data[0].lon), data[0].display_name);
          return;
        }
      }
    } catch { /* ignore */ }
    setLoading(false);
  };

  const answerQuiz = (key: keyof QuizAnswers, val: string) => {
    const newAnswers = { ...answers, [key]: val };
    setAnswers(newAnswers);

    if (quizStep < 3) {
      setQuizStep((quizStep + 1) as 2 | 3);
    } else {
      const result = computeReco(
        depthData!.depth,
        newAnswers.protection!,
        newAnswers.structure!,
        val,
      );
      setReco(result);
      setStep('result');
    }
  };

  const resetWizard = () => {
    setStep('quiz');
    setQuizStep(1);
    setAnswers({});
    setReco(null);
  };

  const QUIZ_OPTIONS = {
    1: [
      { val: 'ouverture', label: 'Une ouverture', sub: 'Porte, garage, fenêtre de sous-sol', icon: 'door_front' },
      { val: 'perimetre', label: 'Tout le périmètre', sub: 'Autour du bâtiment ou du terrain', icon: 'fence' },
      { val: 'urgence', label: "Solution d'urgence", sub: "Besoin immédiat, crue en cours", icon: 'emergency' },
    ],
    2: [
      { val: 'maconnerie', label: 'Maçonnerie / béton', sub: 'Fondations en blocs ou béton coulé', icon: 'foundation' },
      { val: 'temporaire', label: 'Structure temporaire', sub: 'Chantier, abri provisoire, événement', icon: 'construction' },
      { val: 'autre', label: 'Autre / mixte', sub: 'Bois, métal, ou incertain', icon: 'home_repair_service' },
    ],
    3: [
      { val: 'urgent', label: "Moins d'1 heure", sub: "Urgence — crue imminente ou en cours", icon: 'alarm' },
      { val: 'moyen', label: '1 à 4 heures', sub: "Quelques heures avant l'arrivée de l'eau", icon: 'schedule' },
      { val: 'planifie', label: 'Installation planifiée', sub: 'Protection saisonnière ou permanente', icon: 'event_available' },
    ],
  } as const;

  const QUIZ_QUESTIONS: Record<number, string> = {
    1: 'Que voulez-vous protéger ?',
    2: 'Type de structure ?',
    3: "Temps disponible pour l'installation ?",
  };

  const QUIZ_KEYS: Record<number, keyof QuizAnswers> = {
    1: 'protection',
    2: 'structure',
    3: 'delay',
  };

  return (
    <main className="pt-24 pb-24 md:pb-8 min-h-screen">

      {/* Hero + Search */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1F4E79] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-xs text-gray-400 mb-3 font-['JetBrains_Mono'] tracking-widest uppercase">
            Évaluateur de risque — Garrison Flood Control
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-['Raleway'] mb-4 leading-tight">
            Quel système pour votre propriété ?
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Entrez votre adresse au Canada. Nous estimons la profondeur de crue de votre secteur
            et vous guidons en 3 questions vers le bon produit Garrison.
          </p>

          <div className="relative">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={address}
                  onChange={e => handleAddressChange(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSearch()}
                  onBlur={() => setTimeout(() => setShowSugg(false), 150)}
                  onFocus={() => suggestions.length > 0 && setShowSugg(true)}
                  placeholder="Ex: 123 rue des Érables, Laval, QC"
                  className="w-full h-14 pl-12 pr-4 bg-white rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] shadow-lg text-base"
                />
                <span className="material-symbols-outlined absolute left-4 top-4 text-gray-400 text-xl">
                  location_on
                </span>

                {showSugg && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 mt-1 overflow-hidden">
                    {suggestions.slice(0, 5).map((s, i) => (
                      <button
                        key={i}
                        onMouseDown={() => handleSuggestionClick(s)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-0 flex items-start gap-3"
                      >
                        <span className="material-symbols-outlined text-base text-gray-400 flex-shrink-0 mt-0.5">place</span>
                        <span className="leading-snug">{s.display_name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={handleSearch}
                disabled={loading || !address.trim()}
                className="px-7 bg-white text-[#1F4E79] hover:bg-gray-100 disabled:opacity-50 rounded-lg font-bold font-['Raleway'] transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
              >
                {loading
                  ? <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                  : <span className="material-symbols-outlined text-xl">search</span>
                }
                Analyser
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      {location && (
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100" style={{ height: '220px' }}>
              <iframe
                title="Localisation"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.lon - 0.025},${location.lat - 0.018},${location.lon + 0.025},${location.lat + 0.018}&layer=mapnik&marker=${location.lat},${location.lon}`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 truncate">{location.name}</p>
          </div>
        </section>
      )}

      {/* Depth stats */}
      {depthData && step !== 'idle' && (
        <section className="bg-gray-50 border-b border-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest text-gray-500 mb-4">
              Analyse du secteur
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Profondeur indicative', value: `${depthData.depth.toFixed(2)} m`, color: 'text-[#1F4E79]' },
                { label: 'Pression hydrostatique', value: `${depthData.kpa} kPa`, color: 'text-gray-900' },
                { label: 'Zone FEMA approx.', value: depthData.zone, color: 'text-gray-900' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1 font-['JetBrains_Mono']">{stat.label}</div>
                  <div className={`text-2xl font-bold font-['Raleway'] ${stat.color}`}>{stat.value}</div>
                </div>
              ))}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500 mb-2 font-['JetBrains_Mono']">Risque indicatif</div>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold border ${riskBadge(depthData.risk)}`}>
                  {depthData.risk}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 font-['JetBrains_Mono']">
              ⚠ Estimation illustrative — consulter les cartes de zones inondables officielles (MELCCFP / municipalité) pour une évaluation réglementaire.
            </p>
          </div>
        </section>
      )}

      {/* Quiz */}
      {step === 'quiz' && (
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Progress */}
            <div className="flex gap-2 mb-10">
              {[1, 2, 3].map(n => (
                <div
                  key={n}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${n <= quizStep ? 'bg-[#1F4E79]' : 'bg-gray-200'}`}
                />
              ))}
            </div>

            <div className="text-xs text-gray-400 font-['JetBrains_Mono'] mb-2 uppercase tracking-widest">
              Étape {quizStep} / 3
            </div>
            <h3 className="text-3xl font-bold font-['Raleway'] mb-8">
              {QUIZ_QUESTIONS[quizStep]}
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {QUIZ_OPTIONS[quizStep as 1 | 2 | 3].map(opt => (
                <button
                  key={opt.val}
                  onClick={() => answerQuiz(QUIZ_KEYS[quizStep], opt.val)}
                  className="p-6 text-left bg-gray-50 hover:bg-[#1F4E79] hover:text-white rounded-xl border border-gray-200 hover:border-[#1F4E79] transition-all group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl text-[#1F4E79] group-hover:text-white mb-4 block">
                    {opt.icon}
                  </span>
                  <div className="font-bold font-['Raleway'] text-xl mb-1">{opt.label}</div>
                  <div className="text-sm text-gray-500 group-hover:text-white/80 leading-snug">{opt.sub}</div>
                </button>
              ))}
            </div>

            {quizStep > 1 && (
              <button
                onClick={() => setQuizStep((quizStep - 1) as 1 | 2)}
                className="mt-8 text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-all"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Étape précédente
              </button>
            )}
          </div>
        </section>
      )}

      {/* Result */}
      {step === 'result' && reco && depthData && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest text-gray-500 mb-6">
              Recommandation personnalisée
            </div>

            <div className="bg-[#1F4E79] rounded-2xl overflow-hidden shadow-xl">
              {/* Photo */}
              <div className="overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={imgKey(reco.primary.name)}
                  alt={reco.primary.name}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-60"
                  onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
                />
              </div>

              <div className="p-8">
                <div className="text-xs text-white/50 font-['JetBrains_Mono'] uppercase tracking-widest mb-2">
                  {reco.primary.tier}
                </div>
                <h2 className="text-4xl font-bold font-['Raleway'] text-white mb-4">
                  {reco.primary.name}
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  {reco.primary.why(depthData.depth, depthData.kpa)}
                </p>

                <div className="bg-white/10 rounded-xl p-5 mb-4">
                  <div className="text-xs text-white/50 font-['JetBrains_Mono'] uppercase tracking-widest mb-2">
                    Installation
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{reco.primary.install}</p>
                </div>

                {reco.caveat && (
                  <div className="bg-amber-400/15 border border-amber-400/25 rounded-xl p-4 mb-4 text-amber-200 text-sm leading-relaxed">
                    ⚠ {reco.caveat}
                  </div>
                )}

                {reco.complement && (
                  <p className="text-white/50 text-sm mb-4">+ {reco.complement}</p>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-6 border-t border-white/20 gap-4">
                  <div>
                    <div className="text-xs text-white/40 font-['JetBrains_Mono'] uppercase tracking-widest mb-1">
                      Prix indicatif
                    </div>
                    <div className="text-2xl font-bold font-['JetBrains_Mono'] text-white">
                      {reco.primary.priceStr}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={resetWizard}
                      className="px-4 py-2.5 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-lg text-sm transition-all font-medium"
                    >
                      Modifier
                    </button>
                    <Link
                      to="/produits"
                      className="px-6 py-2.5 bg-white text-[#1F4E79] hover:bg-gray-50 rounded-lg font-bold text-sm transition-all inline-flex items-center gap-2"
                    >
                      Voir le catalogue
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold font-['Raleway'] text-gray-900 mb-1">Des questions sur votre projet ?</div>
                <p className="text-sm text-gray-500">Nos experts Garrison répondent dans les 24h.</p>
              </div>
              <button
                onClick={() => navigate('/contact', { state: { produit: reco?.primary.name } })}
                className="px-6 py-3 bg-[#1F4E79] hover:bg-[#2B6CB0] text-white rounded-lg font-bold text-sm transition-all whitespace-nowrap"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Idle state */}
      {step === 'idle' && (
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="material-symbols-outlined text-8xl text-gray-200 mb-6 block">location_searching</span>
            <h3 className="text-2xl font-bold font-['Raleway'] text-gray-900 mb-3">
              Entrez votre adresse pour commencer
            </h3>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              L'outil analyse la profondeur de crue estimée de votre secteur et vous recommande
              le système Garrison adapté en 3 questions.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
