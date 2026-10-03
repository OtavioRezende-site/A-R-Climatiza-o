import { Wind, ThermometerSnowflake, ShieldCheck, Phone, FileText } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenForm: () => void;
}

export default function ServicesPage({ onNavigate, onOpenForm }: ServicesPageProps) {
  const serviceCategories = [
    {
      id: 'climatizacao',
      title: 'Serviços de Climatização',
      icon: Wind,
      description: 'Atuação especializada no acondicionamento térmico de ambientes, visando conforto e circulação balanceada do ar.',
      details: 'Atendimento voltado a diagnosticar as necessidades térmicas do ambiente e propor a melhor orientação técnica para o funcionamento do seu aparelho.',
    },
    {
      id: 'refrigeracao',
      title: 'Serviços de Refrigeração',
      icon: ThermometerSnowflake,
      description: 'Serviços técnicos na área de refrigeração para preservar a capacidade de refrigeração e estabilidade dos sistemas.',
      details: 'Atuação prática focada na eficiência operacional e conservação dos parâmetros adequados dos componentes refrigeradores.',
    },
    {
      id: 'equipamentos',
      title: 'Atendimento a Diferentes Tipos de Ar-Condicionado',
      icon: ShieldCheck,
      description: 'Atuação ampla compatível com modelos e configurações variadas de ar-condicionado.',
      details: 'A equipe possui capacitação para trabalhar com múltiplos tipos de equipamentos. Consulte-nos informando o tipo do seu equipamento para confirmação.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Serviços de Climatização e Refrigeração | A R Climatização"
        description="Visão geral de serviços na área de climatização e refrigeração para diferentes tipos de ar-condicionado em Cascadura, Rio de Janeiro."
        path="/servicos"
      />

      {/* Top Header with smooth atmospheric gradient transitioning to white */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Serviços' }]} onNavigate={onNavigate} />

          {/* Hero */}
          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#39BDF2] uppercase">
              Visão Geral de Atuação
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Serviços de Climatização & Refrigeração
            </h1>
            <p className="text-base text-slate-200 sm:text-lg leading-relaxed">
              A R Climatização atua com serviços na área de climatização e refrigeração e trabalha com diferentes tipos de ar-condicionado. Para confirmar o atendimento ideal para o seu equipamento ou necessidade, preencha o formulário ou entre em contato.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area on Pure White Background */}
      <div className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceCategories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-[#1177B8]/40"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF7FC] text-[#1177B8]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                    <p className="text-xs font-semibold text-[#1177B8]">{item.description}</p>
                    <p className="text-xs leading-relaxed text-slate-600">{item.details}</p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={onOpenForm}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#1177B8] px-4 py-2.5 rounded-xl hover:bg-[#0f6aa5] shadow-sm transition-colors w-full justify-center cursor-pointer"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Consultar este serviço</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Consultation CTA Banner with smooth gradient */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-r from-[#F8FAFC] via-[#EAF7FC] to-[#F8FAFC] p-8 lg:p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  Deseja confirmar o atendimento para o seu aparelho?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Envie sua solicitação através do nosso formulário com o tipo ou marca do seu aparelho de ar-condicionado. Nossa equipe responderá de prontidão.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-6 py-3.5 text-xs font-semibold text-white hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/20 transition-colors cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>Preencher formulário</span>
                </button>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4 text-[#1177B8]" />
                  <span>Ligar para Atendimento</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
