import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { RiskAnalysis } from './pages/RiskAnalysis';
import { Catalog } from './pages/Catalog';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyse" element={<RiskAnalysis />} />
          <Route path="/produits" element={<Catalog />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}