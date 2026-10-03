import { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import GHLForm from './GHLForm';
import Logo from './Logo';
import { siteConfig } from '../config/siteConfig';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  title = 'Solicitar Atendimento',
  subtitle = 'Preencha os dados abaixo para falar com a equipe da A R Climatização.',
}: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#07111B]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-[#1177B8]"
          aria-label="Fechar janela de contato"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-2 pr-8">
          <div className="pb-1">
            <Logo size="sm" theme="light" showSubtitle={false} />
          </div>
          <h2 id="modal-headline" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* GoHighLevel Embedded Form */}
        <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-1">
          <GHLForm minHeight="520px" />
        </div>
      </div>
    </div>
  );
}
