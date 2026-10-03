import { Star, MapPin, CheckCircle2, Phone, ExternalLink, FileText } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenForm: () => void;
}

export default function AboutPage({ onNavigate, onOpenForm }: AboutPageProps) {
  return (
    <>
      <SEOHead
        title="Sobre a A R Climatização | Cascadura, Rio de Janeiro"
        description="Conheça a A R Climatização: prestador de serviços especializado na área de climatização e refrigeração em Cascadura, Rio de Janeiro."
        path="/sobre"
        schemaType="AboutPage"
      />

      {/* Top Header with subtle smooth atmospheric gradient transitioning to white */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Sobre a Empresa' }]} onNavigate={onNavigate} />

          {/* Editorial Hero */}
          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#39BDF2] uppercase">
              Apresentação Institucional
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Sobre a A R Climatização
            </h1>
            <p className="text-base text-slate-200 sm:text-lg leading-relaxed">
              Atuação especializada em climatização e refrigeração, com foco no atendimento a clientes no Rio de Janeiro.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area on Pure White Background */}
      <div className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-6 text-sm leading-relaxed text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Identidade e Atuação
                </h2>
                <p>
                  A <strong className="text-slate-900">A R Climatização</strong> é uma empresa sediada no bairro de Cascadura, na Zona Norte da cidade do Rio de Janeiro, com registro profissional nas categorias de prestador de serviços de climatização e serviços de refrigeração.
                </p>
                <p>
                  A empresa atua com dedicação voltada a diferentes tipos e marcas de ar-condicionado, dispondo de profissionais capacitados para oferecer suporte técnico com pontualidade, clareza e transparência.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Estrutura de Atendimento
                </h2>
                <p>
                  Para proporcionar comodidade, os contatos e esclarecimentos são centralizados no formulário online do site e pelo telefone comercial. Cada solicitação é avaliada individualmente de acordo com o modelo de equipamento e as características do local.
                </p>
                <ul className="space-y-3 pt-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#1177B8] shrink-0" />
                    <span>Atendimento direcionado a múltiplos tipos de ar-condicionado</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#1177B8] shrink-0" />
                    <span>Formulário prático com acionamento de suporte rápido</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#1177B8] shrink-0" />
                    <span>Presença física confirmada no bairro de Cascadura, Rio de Janeiro</span>
                  </li>
                </ul>
              </div>

              {/* Direct CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-6 py-3.5 text-xs font-semibold text-white hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/20 transition-colors cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>Solicitar Atendimento</span>
                </button>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#1177B8] shadow-sm transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#1177B8]" />
                  <span>Ligar para Atendimento</span>
                </a>
              </div>
            </div>

            {/* Sidebar Facts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Google Proof Widget */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center space-y-3 shadow-sm">
                <div className="flex justify-center items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400" />
                  ))}
                </div>
                <div className="text-4xl font-extrabold text-slate-900 tabular-nums">
                  {siteConfig.googleRating.toFixed(1).replace('.', ',')}
                </div>
                <p className="text-xs text-slate-600">
                  Nota 5,0 de avaliação com {siteConfig.googleReviewCount} avaliações públicas no Google.
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1177B8] hover:underline"
                  >
                    <span>Ver página oficial no Google</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 space-y-3 text-xs text-slate-700 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="h-4 w-4 text-[#1177B8]" />
                  <span>Endereço Registrado</span>
                </div>
                <p>{siteConfig.address}</p>
                <p className="text-slate-500">Bairro: {siteConfig.neighborhood} · {siteConfig.city} - {siteConfig.state}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
