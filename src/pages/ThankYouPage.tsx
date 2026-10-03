import { CheckCircle2, ArrowLeft, Phone } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

interface ThankYouPageProps {
  onNavigate: (path: string) => void;
}

export default function ThankYouPage({ onNavigate }: ThankYouPageProps) {
  return (
    <>
      <SEOHead
        title="Obrigado pelo Contato | A R Climatização"
        description="Agradecemos pelo seu contato com a A R Climatização. Em breve retornaremos o seu atendimento."
        path="/obrigado"
      />

      {/* Header gradient */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-10">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Agradecimento' }]} onNavigate={onNavigate} />
        </div>
      </div>

      <div className="bg-white min-h-[60svh] flex items-center justify-center pb-20 text-slate-900">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7FC] text-[#1177B8]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mensagem Recebida
            </h1>
            <p className="text-sm leading-relaxed text-slate-600">
              Agradecemos pelo envio das informações através do nosso formulário. A equipe da <strong className="text-slate-900">{siteConfig.name}</strong> entrará em contato com você o mais breve possível.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 text-xs text-slate-600 space-y-3 shadow-sm">
            <p>
              Se necessitar de atendimento imediato por telefone durante o horário comercial, ligue para:
            </p>
            <div className="pt-1">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1177B8] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/20 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Ligar para a Empresa</span>
              </a>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Voltar para a página inicial</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
