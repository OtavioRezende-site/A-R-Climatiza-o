import { AlertCircle, Home, Phone } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import SEOHead from '../components/SEOHead';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <>
      <SEOHead
        title="Página Não Encontrada (404) | A R Climatização"
        description="A página que você procura não foi encontrada no website da A R Climatização."
        path="/404"
      />

      {/* Header gradient */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-10" />

      <div className="bg-white min-h-[60svh] flex items-center justify-center pb-20 text-slate-900">
        <div className="mx-auto max-w-md px-4 sm:px-6 text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-[#1177B8]">
              <AlertCircle className="h-8 w-8" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#1177B8] uppercase tracking-widest">
              Erro 404
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Página não encontrada
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O link que você tentou acessar não está disponível ou foi movido. Navegue pelas seções oficiais da A R Climatização.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/20 transition-colors cursor-pointer"
            >
              <Home className="h-4 w-4" />
              <span>Voltar ao início</span>
            </button>

            <a
              href={getPhoneLink()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4 text-[#1177B8]" />
              <span>Ligar para a Empresa</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
