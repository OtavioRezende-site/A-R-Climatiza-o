import { MapPin, Phone, Clock, FileText, ExternalLink } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenForm: () => void;
}

export default function Footer({ onNavigate, onOpenForm }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/80 bg-[#050D15] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand and Summary */}
          <div className="space-y-4 lg:col-span-5">
            <div>
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#39BDF2]"
              >
                <Logo size="md" showSubtitle={true} theme="dark" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Empresa especializada na área de climatização e refrigeração, com atendimento para diferentes tipos de ar-condicionado. Localizada em Cascadura, Rio de Janeiro.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenForm}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1177B8] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/20 cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Solicitar Atendimento</span>
              </button>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors hover:bg-slate-800"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#39BDF2]" />
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/servicos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/sobre')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre a Empresa
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contato')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contato & Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Atendimento & Endereço
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#39BDF2] mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#39BDF2]" />
                <a
                  href={getPhoneLink()}
                  className="hover:text-white transition-colors font-medium text-slate-200 underline underline-offset-4 decoration-[#1177B8]"
                >
                  Ligar para atendimento
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#39BDF2] mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <p className="text-slate-300">Segunda a Sexta: {siteConfig.hours.monday}</p>
                  <p className="text-slate-300">Sábado: {siteConfig.hours.saturday}</p>
                  <p className="text-slate-500">Domingo: {siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('/politica-de-privacidade')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/termos')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
