import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import Logo from './Logo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  const hasSolidHeader = isScrolled || currentPath !== '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hasSolidHeader
          ? 'bg-[#07111B]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Marca & Logo Oficial */}
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#39BDF2] rounded-xl p-1 -ml-1 transition-opacity hover:opacity-95"
        >
          <Logo size="sm" showSubtitle={true} theme="dark" />
        </button>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#39BDF2] rounded-sm cursor-pointer ${
                  isActive
                    ? 'text-[#39BDF2]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#39BDF2] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Apenas o direcionamento para Ligar na navbar conforme instrução (sem expor o número) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getPhoneLink()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1177B8] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/25 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39BDF2]"
            title="Ligar agora para atendimento"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Ligar Agora</span>
          </a>
        </div>

        {/* Mobile menu and direct call button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={getPhoneLink()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#1177B8] px-3 py-1.5 text-xs font-semibold text-white transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Ligar</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-[#39BDF2]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#07111B]/98 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavClick(link.path)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-[#1177B8]/15 text-[#39BDF2]'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#39BDF2]" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 border-t border-slate-800 pt-4">
            <a
              href={getPhoneLink()}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#1177B8]/20"
            >
              <Phone className="h-4 w-4" />
              Ligar para Atendimento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
