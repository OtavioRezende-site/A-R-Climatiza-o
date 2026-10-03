import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileConversionBar from './components/MobileConversionBar';
import ContactModal from './components/ContactModal';
import GHLChatWidget from './components/GHLChatWidget';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Normaliza o caminho atual considerando:
 * 1. Hash routing: #/sobre (padrão GitHub Pages estático)
 * 2. Path routing: /sobre
 * 3. Subdiretório de repositório no GitHub: /meu-repositorio/ -> /
 */
const getNormalizedPath = (): string => {
  if (typeof window === 'undefined') return '/';

  // 1. Checa Hash route primeiro (ex: #/sobre ou #/contato)
  if (window.location.hash) {
    const rawHash = window.location.hash.replace(/^#\/?/, '/');
    const hash = rawHash.startsWith('/') ? rawHash : `/${rawHash}`;
    if (hash && hash !== '/') return hash;
  }

  // 2. Checa pathname
  const pathname = window.location.pathname || '/';

  const knownRoutes = [
    '/sobre',
    '/servicos',
    '/contato',
    '/faq',
    '/politica-de-privacidade',
    '/termos',
    '/obrigado',
  ];

  for (const route of knownRoutes) {
    if (pathname.endsWith(route) || pathname.endsWith(`${route}/`)) {
      return route;
    }
  }

  return '/';
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Sincroniza com eventos de histórico e hash para navegação perfeita no GitHub Pages
  useEffect(() => {
    const handleRouteUpdate = () => {
      setCurrentPath(getNormalizedPath());
    };

    window.addEventListener('popstate', handleRouteUpdate);
    window.addEventListener('hashchange', handleRouteUpdate);
    return () => {
      window.removeEventListener('popstate', handleRouteUpdate);
      window.removeEventListener('hashchange', handleRouteUpdate);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (path === currentPath) return;

    if (typeof window !== 'undefined') {
      // Atualiza o hash para compatibilidade total com GitHub Pages sem recarregamento
      window.location.hash = path;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPath(path);
  };

  const handleOpenForm = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsContactModalOpen(false);
  };

  // Render appropriate page view
  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '':
        return <HomePage onNavigate={navigateTo} onOpenForm={handleOpenForm} />;
      case '/sobre':
        return <AboutPage onNavigate={navigateTo} onOpenForm={handleOpenForm} />;
      case '/servicos':
        return <ServicesPage onNavigate={navigateTo} onOpenForm={handleOpenForm} />;
      case '/contato':
        return <ContactPage onNavigate={navigateTo} onOpenForm={handleOpenForm} />;
      case '/faq':
        return <FAQPage onNavigate={navigateTo} onOpenForm={handleOpenForm} />;
      case '/politica-de-privacidade':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case '/termos':
        return <TermsPage onNavigate={navigateTo} />;
      case '/obrigado':
        return <ThankYouPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#07111B] text-slate-100 selection:bg-[#39BDF2]/30 selection:text-white pb-16 md:pb-0">
      {/* Top Bar Header with Call button only */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* GoHighLevel Chat Widget */}
      <GHLChatWidget />

      {/* Contact Form Modal with GoHighLevel form embed */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseForm} />

      {/* Mobile Fixed Conversion Bar (Call + Form) */}
      <MobileConversionBar onOpenForm={handleOpenForm} />

      {/* Footer */}
      <Footer onNavigate={navigateTo} onOpenForm={handleOpenForm} />
    </div>
  );
}
