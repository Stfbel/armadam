import { useParams, useNavigate, Link } from 'react-router';
import { useEffect } from 'react';
import { getProductBySlug, products } from '../data/products';

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Batardeaux Garrison | Armadam`;
      document.querySelector('meta[name="description"]')?.setAttribute('content',
        `${product.name} : ${product.shortDesc}. ${product.description.slice(0, 100)}… Disponible au Canada via Armadam, distributeur officiel Garrison Flood Control.`);
    } else {
      document.title = 'Produit introuvable — Armadam';
    }
  }, [product]);

  if (!product) {
    return (
      <main className="pt-24 pb-24 md:pb-8 min-h-screen bg-gray-50 flex items-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-xs text-gray-400 font-['JetBrains_Mono'] uppercase tracking-widest mb-4">Produit introuvable</div>
          <h1 className="text-4xl font-bold font-['Raleway'] text-gray-900 mb-6">Ce produit n'existe pas.</h1>
          <button
            onClick={() => navigate('/produits')}
            className="bg-[#1F4E79] text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all"
          >
            Voir tous les produits
          </button>
        </div>
      </main>
    );
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pt-24 pb-24 md:pb-8">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1F4E79] transition-colors">Accueil</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link to="/produits" className="hover:text-[#1F4E79] transition-colors">Produits</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero product */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <div className="text-xs text-gray-500 font-['JetBrains_Mono'] uppercase tracking-widest mb-2">
                {product.category} — {product.type}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-['Raleway'] text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.shortDesc}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((f, i) => (
                  <span key={i} className="text-sm bg-[#1F4E79]/8 text-[#1F4E79] px-3 py-1.5 rounded-lg font-['JetBrains_Mono']">
                    {f}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="text-xs text-gray-500 mb-1">Prix indicatif</div>
                <div className="text-2xl font-bold font-['JetBrains_Mono'] text-gray-900 mb-4">
                  {product.price}
                </div>
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    state={{ produit: product.name }}
                    className="flex-1 bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-6 py-3 rounded-lg font-bold font-['Raleway'] transition-all text-center"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    to="/analyse"
                    className="flex items-center gap-1.5 px-6 py-3 border border-gray-200 rounded-lg font-medium text-gray-700 hover:border-[#1F4E79] hover:text-[#1F4E79] transition-all"
                  >
                    <span className="material-symbols-outlined text-base">search</span>
                    Évaluer
                  </Link>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="material-symbols-outlined text-[#2B6CB0] text-base">verified_user</span>
                Certifié FEMA NFIP · FM Global · Fabriqué aux États-Unis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs table */}
      {product.specs && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-['Raleway'] text-gray-900 mb-6">Spécifications techniques</h2>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {Object.entries(product.specs).map(([key, val], i) => (
                <div key={i} className={`flex items-start px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <dt className="w-48 flex-shrink-0 text-xs font-['JetBrains_Mono'] text-gray-500 uppercase tracking-wider pt-0.5">
                    {key}
                  </dt>
                  <dd className="text-gray-900 font-medium">{val}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-['Raleway'] text-gray-900 mb-6">
              Autres produits — {product.category}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(rel => (
                <Link
                  key={rel.id}
                  to={`/produits/${rel.slug}`}
                  className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold font-['Raleway'] text-gray-900 mb-1">{rel.name}</h3>
                    <p className="text-sm text-gray-500">{rel.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="bg-[#111111] text-white py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-['Raleway'] mb-4">
            Prêt à protéger votre propriété ?
          </h2>
          <p className="text-gray-400 mb-8">
            Un expert Armadam vous répond sous 24 heures avec une recommandation personnalisée.
          </p>
          <Link
            to="/contact"
            state={{ produit: product.name }}
            className="inline-flex items-center gap-2 bg-[#1F4E79] hover:bg-[#2B6CB0] text-white px-8 py-4 rounded-lg font-bold font-['Raleway'] transition-all"
          >
            Demander un devis
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
