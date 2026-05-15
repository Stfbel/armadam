export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  type: string;
  shortDesc: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  specs?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1, slug: 'hammerhead', name: 'HAMMERHEAD', category: 'Ouvertures', type: 'Résidentiel & Commercial',
    shortDesc: 'Système de planches aluminium',
    description: 'Planches aluminium 6063-T6 insérées dans des poteaux en U fixés à la maçonnerie. Protection pour portes, fenêtres et garages. Certifié FEMA NFIP TB3.',
    price: 'Sur devis', features: ['Aluminium 6063-T6', "Jusqu'à 3.6 m", 'Certifié FEMA/NFIP', 'Sans outil'],
    image: '/images/hammerhead.webp',
    specs: { Matériau: 'Aluminium 6063-T6', 'Hauteur max': '3.6 m (144")', Certification: 'FEMA NFIP TB3', Installation: 'Sans outil', Portée: "Jusqu'à 108\"" },
  },
  {
    id: 2, slug: 'mako', name: 'MAKO', category: 'Ouvertures', type: 'Résidentiel & Commercial',
    shortDesc: 'Barrière gonflable pressurisée',
    description: "Sections PVC drop-stitch gonflées à 12–15 PSI dans l'ouverture. Sur mesure jusqu'à 108\" de largeur — aucune modification structurelle. 2 chambres indépendantes.",
    price: 'À partir de 580 $ CAD', features: ['12–15 PSI', 'Sur mesure 108"', '2 chambres PVC', 'Sans ancrage'],
    image: '/images/mako.webp',
    specs: { Matériau: 'PVC drop-stitch', Pression: '12–15 PSI', 'Largeur max': '108"', Chambres: '2 indépendantes', Modification: 'Aucune structurelle' },
  },
  {
    id: 3, slug: 'yellowfin', name: 'YELLOWFIN', category: 'Ouvertures', type: 'Commercial',
    shortDesc: 'Panneaux composites muraux',
    description: "Panneaux fibre de verre + aluminium 6063-T6 + HDPE + inox 316L montés sur rails. Panneaux 36\"/48\" empilables jusqu'à 96\". Certifié FEMA TB3 + NFIP, portée 3.35 m.",
    price: 'Sur devis', features: ['Composite renforcé', 'Portée 3.35 m', 'Certifié FEMA TB3', '10 min/panneau'],
    image: '/images/yellowfin.webp',
    specs: { Matériau: 'Fibre de verre + alu 6063-T6 + HDPE + inox 316L', Certification: 'FEMA TB3 + NFIP', Portée: '3.35 m', 'Hauteur max': '96"', Installation: '10 min/panneau' },
  },
  {
    id: 4, slug: 'bluefin', name: 'BLUEFIN', category: 'Périmètres', type: 'Commercial & Industriel',
    shortDesc: 'Barrière périmétrique modulaire',
    description: "Panneaux aluminium 6063-T6 + fibre de verre honeycomb, joints EPDM ½\", boulonnerie inox 316L. 73–78 kg/panneau, 10 min/panneau. Sections 3, 4, 6 et 8 pieds. Durée de vie 10+ ans.",
    price: 'Sur devis', features: ['Alu 6063-T6', '4 hauteurs', '10+ ans', 'Inox 316L'],
    image: '/images/bluefin.webp',
    specs: { Matériau: 'Alu 6063-T6 + fibre de verre honeycomb', Joints: 'EPDM ½"', Boulonnerie: 'Inox 316L', Poids: '73–78 kg/panneau', 'Durée de vie': '10+ ans', Sections: '3, 4, 6, 8 pieds' },
  },
  {
    id: 5, slug: 'mayim', name: 'MAYIM', category: 'Périmètres', type: 'Résidentiel & Commercial',
    shortDesc: "Barrières à déviation d'eau",
    description: "Panneaux interconnectés remplis d'eau créant des murs périmètriques. Hauteurs 20\", 30\" ou 40\" avec capacité de déviation active. Idéal pour sites temporaires ou changeants.",
    price: 'Sur devis', features: ['Interconnectables', '3 hauteurs', 'Déviation active', 'Périmètre complet'],
    image: '/images/mayim.webp',
    specs: { Hauteurs: '20", 30", 40"', Prix: 'À partir de 13 200 $ CAD', Connexion: 'Panneaux interconnectés', Usage: 'Temporaire ou permanent', Fonction: 'Déviation active' },
  },
  {
    id: 6, slug: 'stingray', name: 'STINGRAY', category: 'Périmètres', type: 'Résidentiel & Commercial',
    shortDesc: 'Barrière auto-déployante',
    description: "Barrière en V s'élevant automatiquement au contact de l'eau. Grille PVC + lest métallique + flotteurs mousse. Disponible en 20\", 30\" ou 48\". Aucune intervention humaine.",
    price: 'À partir de 950 $ CAD', features: ['Auto-déploiement', '3 hauteurs', 'Activé par eau', 'Zéro opérateur'],
    image: '/images/stingray.webp',
    specs: { Hauteurs: '20", 30", 48"', Prix: 'À partir de 950 $ CAD', Matériau: 'Grille PVC + flotteurs mousse', Activation: 'Hydrostatique automatique', Opération: 'Zéro intervention humaine' },
  },
  {
    id: 7, slug: 'oyster', name: 'OYSTER', category: 'Automatique', type: 'Commercial & Institutionnel',
    shortDesc: 'Porte auto-élévatrice hydrostatique',
    description: "Porte activée par pression hydrostatique pour rampes inclinées, garages et stations de transit. Hauteurs 24\", 36\" ou 48\". Installation permanente encastrée.",
    price: 'Sur devis', features: ['Hydrostatique', 'Rampes inclinées', '3 hauteurs', 'Permanent'],
    image: '/images/oyster.webp',
    specs: { Hauteurs: '24", 36", 48"', Activation: 'Pression hydrostatique', Application: 'Rampes inclinées, garages, stations transit', Installation: 'Permanente encastrée' },
  },
  {
    id: 8, slug: 'guppy', name: 'GUPPY', category: 'Périmètres', type: 'Résidentiel',
    shortDesc: "Tubes remplissables à l'eau",
    description: "Tubes remplis avec boyau d'arrosage standard. Hauteurs 6\", 12\", longueurs 10 à 100 pieds. Certifié EN13501-B1. Réutilisable.",
    price: 'À partir de 120 $ CAD', features: ['Boyau standard', '6" ou 12"', 'EN13501-B1', 'Réutilisable'],
    image: '/images/guppy.webp',
    specs: { Hauteurs: '6", 12"', Longueurs: '10 à 100 pieds', Remplissage: 'Boyau d\'arrosage standard', Certification: 'EN13501-B1', Réutilisable: 'Oui' },
  },
  {
    id: 9, slug: 'guppy-max', name: 'GUPPY MAX', category: 'Périmètres', type: 'Industriel',
    shortDesc: 'Barrière eau grande capacité',
    description: "Tube 3 chambres de 30 pieds à remplir via borne-incendie. Hauteur de protection 38\" (97 cm). Capacité 8 000 L / 8 000 kg par section.",
    price: '~3 100 $ CAD/section', features: ['97 cm hauteur', '30 pieds', 'Borne incendie', '8 000 kg/section'],
    image: '/images/guppy-max.webp',
    specs: { Hauteur: '38" (97 cm)', Longueur: '30 pieds/section', Chambres: '3 indépendantes', Capacité: '8 000 L / 8 000 kg', Remplissage: 'Borne-incendie' },
  },
  {
    id: 10, slug: 'serpent', name: 'SERPENT', category: 'Périmètres', type: 'Industriel',
    shortDesc: 'Tubes gonflables à air',
    description: "Barrières gonflables à air (6 PSI) déployables en 8–18 min. Longueurs 15 et 30 pieds, connectables pour couvrir de grandes distances. Hauteur jusqu'à 40\".",
    price: 'À partir de 2 500 $ CAD', features: ['6 PSI', "Jusqu'à 40\"", 'Connectables', '8–18 min'],
    image: '/images/serpent.webp',
    specs: { Pression: '6 PSI', 'Hauteur max': '40"', Longueurs: '15 et 30 pieds', Connexion: 'Connectables en série', Déploiement: '8–18 min' },
  },
  {
    id: 11, slug: 'minnow', name: 'MINNOW', category: 'Solutions rapides', type: 'Résidentiel & Commercial',
    shortDesc: 'Sacs polymère activés par eau',
    description: "Sacs contenant polymère hydrophile. À sec ~2 kg, gorgés ~22 kg. Activation automatique au contact de l'eau douce. MW1 (60×40×12 cm) ou MW2 (40×36×12 cm). Empilables.",
    price: 'À partir de 55 $ CAD', features: ['Polymère hydrophile', '~22 kg gorgé', 'Eau douce', 'Empilable'],
    image: '/images/minnow.webp',
    specs: { Poids: '~2 kg sec / ~22 kg gorgé', Formats: 'MW1 (60×40×12 cm), MW2 (40×36×12 cm)', Activation: 'Eau douce automatique', Réutilisable: 'Limité', Stockage: 'À sec, longue durée' },
  },
  {
    id: 12, slug: 'beluga', name: 'BELUGA', category: 'Solutions rapides', type: 'Commercial',
    shortDesc: 'Sacs remplissables grand format',
    description: "BG1 : sac unitaire 91×91×102 cm H. BG5 : accordéon 5 compartiments 4.5 m × 102 cm H. Résistance UV 2 200 h. Remplissage sable ou eau.",
    price: 'À partir de 40 $ CAD/BG1', features: ['BG1 ou BG5', '102 cm hauteur', 'UV 2 200 h', 'Sable ou eau'],
    image: '/images/beluga.webp',
    specs: { Formats: 'BG1 (91×91×102 cm), BG5 (4.5 m × 102 cm)', 'Résistance UV': '2 200 h', Remplissage: 'Sable ou eau', Usage: 'Temporaire ou permanent' },
  },
  {
    id: 13, slug: 'sandbags', name: 'SANDBAGS', category: 'Solutions rapides', type: 'Résidentiel & Commercial',
    shortDesc: 'Sacs de sable polypropylène',
    description: "Sacs polypropylène 14\"×26\" avec protection UV intégrée. 35–40 lbs une fois remplis. Solution universelle disponible à la palette.",
    price: 'Sur devis / palette', features: ['Polypropylène', '14×26 pouces', 'Protection UV', '35–40 lbs'],
    image: '/images/sandbags.webp',
    specs: { Dimensions: '14" × 26"', Matériau: 'Polypropylène', Poids: '35–40 lbs rempli', 'Protection UV': 'Intégrée', Vente: 'Par palette' },
  },
  {
    id: 14, slug: 'sea-sponge', name: 'SEA SPONGE', category: 'Équipement', type: 'Commercial & Industriel',
    shortDesc: 'Pompe de drainage submersible',
    description: "Pompe 2/3 HP éliminant l'eau jusqu'à 1 mm de profondeur. Débit 50–170 L/min, 110V/6.1A, carcasse EPR. 13 kg, portable. Essentielle en post-intervention.",
    price: 'Sur devis', features: ['2/3 HP', '50–170 L/min', 'Drain 1 mm', '13 kg'],
    image: '/images/sea-sponge.webp',
    specs: { Puissance: '2/3 HP', Débit: '50–170 L/min', Alimentation: '110V / 6.1A', Carcasse: 'EPR', 'Drainage minimum': '1 mm', Poids: '13 kg' },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
