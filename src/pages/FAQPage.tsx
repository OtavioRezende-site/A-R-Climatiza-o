import { FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import { faqItems } from '../data/faqData';

interface FAQPageProps {
  onNavigate: (path: string) => void;
  onOpenForm: () => void;
}

export default function FAQPage({ onNavigate, onOpenForm }: FAQPageProps) {
  return (
    <>
      <SEOHead
        title="Perguntas Frequentes (FAQ) | A R Climatização"
        description="Respostas claras para as principais dúvidas sobre atendimento, horários, localização e serviços da A R Climatização em Cascadura, Rio de Janeiro."
        path="/faq"
        schemaType="FAQPage"
        faqData={faqItems.map((item) => ({ question: item.question, answer: item.answer }))}
      />

      {/* Top Header with atmospheric gradient transitioning to white */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Perguntas Frequentes' }]} onNavigate={onNavigate} />

          {/* Hero */}
          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#39BDF2] uppercase">
              Dúvidas Comuns
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Perguntas Frequentes
            </h1>
            <p className="text-base text-slate-200 sm:text-lg leading-relaxed">
              Esclarecimentos transparentes sobre nossos canais de contato, horários de funcionamento e atuação em climatização no Rio de Janeiro.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area on Pure White Background */}
      <div className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqItems} theme="light" />

            {/* Direct Contact Card for Other Questions */}
            <div className="mt-14 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 text-center space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Sua dúvida não foi respondida aqui?
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Entre em contato enviando sua dúvida pelo formulário de atendimento ou utilize o chat ao lado. Nossa equipe responderá assim que possível durante o horário de atendimento.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1177B8] px-6 py-3 text-xs font-semibold text-white hover:bg-[#0f6aa5] transition-colors shadow-md shadow-[#1177B8]/20 cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>Enviar minha dúvida no formulário</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
