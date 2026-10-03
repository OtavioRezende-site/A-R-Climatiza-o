import { MapPin, ExternalLink, Clock, Phone, Navigation, FileText } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';

interface MapSectionProps {
  onOpenForm?: () => void;
}

export default function MapSection({ onOpenForm }: MapSectionProps) {
  const hoursList = [
    { day: 'Segunda-feira', hours: siteConfig.hours.monday },
    { day: 'Terça-feira', hours: siteConfig.hours.tuesday },
    { day: 'Quarta-feira', hours: siteConfig.hours.wednesday },
    { day: 'Quinta-feira', hours: siteConfig.hours.thursday },
    { day: 'Sexta-feira', hours: siteConfig.hours.friday },
    { day: 'Sábado', hours: siteConfig.hours.saturday },
    { day: 'Domingo', hours: siteConfig.hours.sunday },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
      {/* Contact & Hours Info Column */}
      <div className="space-y-6 lg:col-span-5 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#1177B8] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Endereço Confirmado
                </h4>
                <p className="mt-1 text-base font-bold text-slate-900">
                  {siteConfig.street}, {siteConfig.number}
                </p>
                <p className="text-sm text-slate-700">
                  {siteConfig.neighborhood}, {siteConfig.city} - {siteConfig.state}
                </p>
                <p className="text-xs text-slate-500">CEP: {siteConfig.postalCode}</p>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1177B8] hover:text-[#0f6aa5] transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Horários Table */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-800">
              <Clock className="h-4 w-4 text-[#1177B8]" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Horário de Atendimento
              </h4>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {hoursList.map((item) => (
                <div key={item.day} className="flex justify-between py-2">
                  <span className="text-slate-600">{item.day}</span>
                  <span
                    className={`font-medium ${
                      item.hours === 'Fechado' ? 'text-slate-400' : 'text-slate-900 tabular-nums'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick actions buttons: Form + Call */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {onOpenForm ? (
            <button
              type="button"
              onClick={onOpenForm}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-4 py-3 text-xs font-semibold text-white shadow-md shadow-[#1177B8]/20 transition-colors hover:bg-[#0f6aa5] cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Formulário</span>
            </button>
          ) : (
            <a
              href="#formulario"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-4 py-3 text-xs font-semibold text-white shadow-md shadow-[#1177B8]/20 transition-colors hover:bg-[#0f6aa5]"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Formulário</span>
            </a>
          )}

          <a
            href={getPhoneLink()}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 hover:text-[#1177B8]"
          >
            <Phone className="h-3.5 w-3.5 text-[#1177B8]" />
            Ligar Agora
          </a>
        </div>
      </div>

      {/* Map Column */}
      <div className="lg:col-span-7">
        <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm flex flex-col">
          {/* Top banner of map preview */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 text-xs text-slate-700">
            <span className="flex items-center gap-2 font-medium">
              <Navigation className="h-4 w-4 text-[#1177B8]" />
              Cascadura, Rio de Janeiro - RJ
            </span>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1177B8] hover:underline"
            >
              Traçar rota
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Clean Map View: Responsive interactive OpenStreetMap / Google iframe */}
          <div className="relative flex-1 w-full min-h-[320px]">
            <iframe
              title="Localização da A R Climatização em Cascadura, Rio de Janeiro"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.1042784860473!2d-43.33147492377226!3d-22.880430079272373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ccb6814b77f%3A0xc39ba6bb272185c7!2sR.%20Jauaperi%2C%20106%20-%20Cascadura%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021311-260!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              className="h-full w-full border-0 filter contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlaid location card indicator */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 max-w-sm rounded-xl border border-slate-200/90 bg-white/95 p-3.5 backdrop-blur-md shadow-lg">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{siteConfig.name}</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    R. Jauaperi, 106 - Cascadura, RJ
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Avaliação Google: <span className="text-[#1177B8] font-bold">{siteConfig.googleRating.toFixed(1).replace('.', ',')}</span> ({siteConfig.googleReviewCount} avaliações)
                  </p>
                </div>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg bg-[#1177B8] px-2.5 py-1.5 text-[10px] font-semibold text-white hover:bg-[#0f6aa5] transition-colors"
                >
                  Abrir Mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
