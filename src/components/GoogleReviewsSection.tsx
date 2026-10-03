import { Star, CheckCircle2, ExternalLink, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { googleReviews } from '../data/reviewsData';

export default function GoogleReviewsSection() {
  return (
    <div className="space-y-10">
      {/* Header Stats Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1177B8] uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4" />
              <span>Avaliações Reais no Google Meu Negócio</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
              O que dizem os clientes da A R Climatização
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 max-w-2xl">
              Comprovado no perfil oficial do Google: clientes destacam o atendimento atencioso, a rapidez no agendamento e a qualidade na manutenção e limpeza de ar-condicionado em Cascadura e região.
            </p>

            <div className="pt-2">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:text-[#1177B8] shadow-sm"
              >
                <span>Ver todas as avaliações no Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#1177B8]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 text-center shadow-sm">
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400" />
              ))}
            </div>

            <div className="text-5xl font-extrabold text-slate-900 tracking-tight tabular-nums">
              {siteConfig.googleRating.toFixed(1).replace('.', ',')}
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Média máxima no Google Maps
            </p>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Perfil Verificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Verified Review Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {googleReviews.map((rev) => (
          <div
            key={rev.id}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between space-y-4 transition-all hover:border-[#1177B8]/40 hover:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-slate-500">{rev.date}</span>
              </div>

              <blockquote className="text-sm leading-relaxed text-slate-800 italic">
                "{rev.comment}"
              </blockquote>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF7FC] text-[#1177B8] font-bold text-xs">
                  G
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">{rev.author}</span>
                  <span className="text-[11px] text-slate-500">{rev.serviceType}</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Google Review
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
