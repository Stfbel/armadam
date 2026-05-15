import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { RiskAnalysis } from './pages/RiskAnalysis';
import { Catalog } from './pages/Catalog';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProductPage } from './pages/ProductPage';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyse" element={<RiskAnalysis />} />
          <Route path="/produits" element={<Catalog />} />
          <Route path="/produits/:slug" element={<ProductPage />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
