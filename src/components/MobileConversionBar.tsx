import { Phone, FileText } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';

interface MobileConversionBarProps {
  onOpenForm: () => void;
}

export default function MobileConversionBar({ onOpenForm }: MobileConversionBarProps) {
  return (
    <aside
      aria-label="Atendimento rápido"
      className="fixed bottom-0 left-0 right-0 z-30 block md:hidden border-t border-slate-800 bg-[#07111B]/95 backdrop-blur-md px-3 py-2.5 shadow-2xl"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={getPhoneLink()}
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 text-xs font-semibold text-slate-200 transition-colors active:bg-slate-800"
          aria-label={`Ligar para ${siteConfig.name}`}
        >
          <Phone className="h-4 w-4 text-[#39BDF2]" />
          <span>Ligar</span>
        </a>

        <button
          type="button"
          onClick={onOpenForm}
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1177B8] text-xs font-semibold text-white shadow-md shadow-[#1177B8]/20 transition-colors active:bg-[#0f6aa5]"
          aria-label="Abrir formulário de atendimento da A R Climatização"
        >
          <FileText className="h-4 w-4" />
          <span>Formulário</span>
        </button>
      </div>
    </aside>
  );
}
