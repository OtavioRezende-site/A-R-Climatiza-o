import { Phone, MapPin, ExternalLink, FileText } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import MapSection from '../components/MapSection';
import GHLForm from '../components/GHLForm';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenForm: () => void;
}

export default function ContactPage({ onNavigate, onOpenForm }: ContactPageProps) {
  return (
    <>
      <SEOHead
        title="Contato & Atendimento | A R Climatização - Cascadura, RJ"
        description="Fale com a A R Climatização através do formulário de atendimento ou por telefone. Endereço na R. Jauaperi, 106 - Cascadura, Rio de Janeiro - RJ."
        path="/contato"
        schemaType="ContactPage"
      />

      {/* Top Header with atmospheric gradient transitioning to white */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contato' }]} onNavigate={onNavigate} />

          {/* Hero */}
          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#39BDF2] uppercase">
              Canais Oficiais
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Contato & Atendimento
            </h1>
            <p className="text-base text-slate-200 sm:text-lg leading-relaxed">
              Fale diretamente com a equipe da A R Climatização para tirar dúvidas e obter orientações sobre serviços de climatização e refrigeração.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area on Pure White Background */}
      <div className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Fast Contact Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Formulário Online */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7FC] text-[#1177B8]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Formulário Online</h2>
                <p className="text-xs text-slate-500 mt-1">Envie sua mensagem e receba retorno da equipe</p>
                <p className="text-sm font-bold text-slate-900 mt-2">Atendimento Digital</p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#0f6aa5] shadow-sm transition-colors w-full cursor-pointer"
                >
                  <span>Abrir formulário</span>
                </button>
              </div>
            </div>

            {/* Card 2: Telefone */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7FC] text-[#1177B8]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Ligação Telefônica</h2>
                <p className="text-xs text-slate-500 mt-1">Horário comercial de segunda a sábado</p>
                <p className="text-sm font-bold text-[#1177B8] mt-2">Clique no botão abaixo para discar</p>
              </div>
              <div className="pt-2">
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm w-full"
                >
                  <Phone className="h-3.5 w-3.5 text-[#1177B8]" />
                  <span>Ligar agora</span>
                </a>
              </div>
            </div>

            {/* Card 3: Endereço */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7FC] text-[#1177B8]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Endereço</h2>
                <p className="text-xs text-slate-500 mt-1">Cascadura, Rio de Janeiro - RJ</p>
                <p className="text-xs font-semibold text-slate-700 mt-2">{siteConfig.address}</p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm w-full"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-[#1177B8]" />
                  <span>Ver rota no Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded GHL Form Section on Contact Page */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8 space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#1177B8] uppercase">
                Atendimento Rápido
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Preencha o Formulário de Contato
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Informe seus dados e o que você precisa. Nossa equipe entrará em contato.
              </p>
            </div>

            <GHLForm minHeight="540px" />
          </div>

          {/* Full Map & Detailed Hours */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Horários e Mapa Detalhado
            </h2>
            <MapSection onOpenForm={onOpenForm} />
          </div>
        </div>
      </div>
    </>
  );
}
