import { useEffect, useState } from 'react';

interface GHLFormProps {
  className?: string;
  minHeight?: string;
}

export default function GHLForm({
  className = '',
  minHeight = '540px',
}: GHLFormProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load GoHighLevel form embed script
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-white ${className}`} style={{ minHeight }}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 p-8 text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-[#1177B8]" />
          <p className="mt-3 text-xs font-medium text-slate-500">Carregando formulário de atendimento...</p>
        </div>
      )}

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/V2getowmokHr4p59Ke9V"
        style={{ width: '100%', height: '100%', minHeight, border: 'none', borderRadius: '10px' }}
        id="inline-V2getowmokHr4p59Ke9V"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Formulário do website"
        data-height="539"
        data-layout-iframe-id="inline-V2getowmokHr4p59Ke9V"
        data-form-id="V2getowmokHr4p59Ke9V"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Formulário de atendimento da A R Climatização"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
