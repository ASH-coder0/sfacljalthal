import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { NoticesPage, NoticeSinglePage } from './pages/NoticesPage';
import { BlogsPage, BlogSinglePage } from './pages/BlogsPage';
import GalleryPage from './pages/GalleryPage';
import DairyPage from './pages/DairyPage';
import FinancialPage from './pages/FinancialPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/notices/:id" element={<NoticeSinglePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogSinglePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/dairy" element={<DairyPage />} />
            <Route path="/financial" element={<FinancialPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="text-6xl mb-4">🌿</div>
                <h1 className="font-display text-3xl font-bold text-primary-900 mb-2">Page Not Found</h1>
                <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-800 transition-colors">
                  Go Home
                </a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
