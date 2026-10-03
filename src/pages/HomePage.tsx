import { Star, MapPin, Wind, ThermometerSnowflake, ShieldCheck, CheckCircle2, ArrowRight, Phone, ExternalLink, FileText } from 'lucide-react';
import { siteConfig, getPhoneLink } from '../config/siteConfig';
import AirflowCanvas from '../components/AirflowCanvas';
import AirConditionerGraphic from '../components/AirConditionerGraphic';
import CoolingSimulator from '../components/CoolingSimulator';
import MapSection from '../components/MapSection';
import FAQAccordion from '../components/FAQAccordion';
import GHLForm from '../components/GHLForm';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import { faqItems } from '../data/faqData';
import SEOHead from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenForm: () => void;
}

export default function HomePage({ onNavigate, onOpenForm }: HomePageProps) {
  return (
    <>
      <SEOHead
        title="A R Climatização | Climatização em Cascadura, Rio de Janeiro"
        description="A R Climatização em Cascadura, Rio de Janeiro. Serviços na área de climatização e refrigeração para diferentes tipos de ar-condicionado. Solicite atendimento ou ligue."
        path="/"
        faqData={faqItems.map((item) => ({ question: item.question, answer: item.answer }))}
      />

      {/* ==================================================================
          SEÇÃO 1 — HERO: TEXTO À ESQUERDA + GRÁFICO 3D COM AR FLUIDO ANIMADO
          ================================================================== */}
      <section className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden bg-[#07111B] pt-28 pb-16 lg:pt-32 lg:pb-24">
        {/* Dynamic Airflow Canvas simulating aerodynamic air circulation */}
        <AirflowCanvas density="normal" interactive={true} />

        {/* Ambient Cold Atmospheric Gradients */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-[#1177B8]/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-[450px] w-[450px] rounded-full bg-[#39BDF2]/15 blur-[130px]" />

        {/* Soft technical grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1177B8_1px,transparent_1px),linear-gradient(to_bottom,#1177B8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] opacity-[0.06]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Textos alinhados à esquerda */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Clean unboxed eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#39BDF2]">
                <span>A R Climatização</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span>Rio de Janeiro</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Climatização com atendimento profissional.
              </h1>

              {/* Subheadline */}
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Serviços de climatização e refrigeração para diferentes tipos de ar-condicionado, com solicitação rápida pelo formulário ou por telefone.
              </p>

              {/* Action Buttons: Form Modal + Call */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1177B8]/30 transition-all hover:bg-[#0f6aa5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39BDF2] cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>{siteConfig.primaryCTA}</span>
                </button>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#39BDF2]" />
                  <span>{siteConfig.secondaryCTA}</span>
                </a>
              </div>

              {/* Micro Social Proof: APENAS 5 estrelas no Google */}
              <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <div className="flex items-center text-amber-400" aria-label="Avaliação 5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-white tabular-nums ml-1">
                    5,0 no Google
                  </span>
                </a>
                <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-[#39BDF2]" />
                  Cascadura, Rio de Janeiro
                </span>
              </div>
            </div>

            {/* Right Column: Gráfico animado com ar fluido saindo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <AirConditionerGraphic className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: DO HERO ESCURO (#07111B) PARA O BRANCO (bg-white)
          ================================================================== */}
      <div className="h-20 bg-gradient-to-b from-[#07111B] via-[#102438] to-white" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 2 — CONFIANÇA IMEDIATA (FUNDO BRANCO PRIORIZADO)
          ================================================================== */}
      <section className="relative bg-white py-16 lg:py-20 text-[#13202A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Fact 1 */}
            <div className="space-y-2 border-l-2 border-[#1177B8] pl-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Avaliação Real no Google
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900 tabular-nums">
                  {siteConfig.googleRating.toFixed(1).replace('.', ',')}
                </span>
                <span className="text-xs text-slate-600">/ 5,0 estrelas</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Baseado em {siteConfig.googleReviewCount} avaliações públicas registradas no perfil do Google.
              </p>
            </div>

            {/* Fact 2 */}
            <div className="space-y-2 border-l-2 border-[#1177B8] pl-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Localização Confirmada
              </span>
              <div className="text-xl font-bold text-slate-900">
                Cascadura, RJ
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                R. Jauaperi, 106 - Cascadura, Rio de Janeiro - RJ, 21311-260.
              </p>
            </div>

            {/* Fact 3 */}
            <div className="space-y-2 border-l-2 border-[#1177B8] pl-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Atuação Especializada
              </span>
              <div className="text-xl font-bold text-slate-900">
                Climatização & Refrigeração
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atendimento voltado a diferentes modelos e tipos de ar-condicionado.
              </p>
            </div>

            {/* Fact 4 */}
            <div className="space-y-2 border-l-2 border-[#1177B8] pl-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Contato Direto
              </span>
              <div>
                <a
                  href={getPhoneLink()}
                  className="text-xl font-bold text-[#1177B8] hover:text-[#0f6aa5] transition-colors underline decoration-slate-300 underline-offset-4"
                >
                  Ligação Telefônica
                </a>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clique para discar diretamente durante os horários de atendimento ou envie pelo formulário online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: BRANCO PARA BRANCO/OFF-WHITE SUAVE
          ================================================================== */}
      <div className="h-10 bg-gradient-to-b from-white to-[#F8FAFC]" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 3 — O QUE A EMPRESA FAZ (FUNDO BRANCO/OFF-WHITE PRIORIZADO)
          ================================================================== */}
      <section className="relative bg-[#F8FAFC] py-20 lg:py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#1177B8] uppercase">
              Área de Atuação
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl text-balance">
              Serviços de climatização e refrigeração
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              A A R Climatização atua com atendimento profissional voltado a diferentes tipos e capacidades de equipamentos de ar-condicionado.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1177B8]/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF7FC] text-[#1177B8]">
                <Wind className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Climatização</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Soluções e atendimento focado no controle térmico e no conforto do ambiente, adaptadas à estrutura do seu espaço.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1177B8] hover:text-[#0f6aa5] transition-colors cursor-pointer"
                >
                  <span>Solicitar atendimento</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1177B8]/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF7FC] text-[#1177B8]">
                <ThermometerSnowflake className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Refrigeração</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Serviço de refrigeração para preservar o rendimento operacional e a estabilidade de temperatura dos equipamentos.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1177B8] hover:text-[#0f6aa5] transition-colors cursor-pointer"
                >
                  <span>Solicitar atendimento</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1177B8]/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF7FC] text-[#1177B8]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">Todos os Tipos de Ar-Condicionado</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Atendimento voltado a diferentes configurações de aparelhos. Preencha o formulário para confirmar a disponibilidade para o seu caso.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenForm}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1177B8] hover:text-[#0f6aa5] transition-colors cursor-pointer"
                >
                  <span>Confirmar meu modelo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: DO BRANCO/OFF-WHITE PARA O SIMULADOR
          ================================================================== */}
      <div className="h-16 bg-gradient-to-b from-[#F8FAFC] via-[#0D2233] to-[#07111B]" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 4 — EXPERIÊNCIA VISUAL "FLUXO DE AR & DINÂMICA TÉRMICA"
          ================================================================== */}
      <section className="relative bg-[#07111B] py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#39BDF2] uppercase">
              Precisão & Circulação
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl text-balance">
              O princípio do fluxo de ar contínuo
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              A A R Climatização atua com foco em atendimento técnico para garantir o correto funcionamento dos sistemas de climatização.
            </p>
          </div>

          {/* Interactive Cooling Simulator Component */}
          <CoolingSimulator onOpenForm={onOpenForm} />
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: DO SIMULADOR ESCURO DE VOLTA PARA O BRANCO
          ================================================================== */}
      <div className="h-16 bg-gradient-to-b from-[#07111B] via-[#102438] to-white" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO DE FORMULÁRIO DE ATENDIMENTO DIRETO NO WEBSITE (GOHIGHLEVEL)
          ================================================================== */}
      <section id="formulario" className="relative bg-white py-16 lg:py-20 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-3 mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#1177B8] uppercase">
              Solicitação Online
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl text-balance">
              Formulário de Atendimento
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Preencha os campos abaixo com os detalhes do seu aparelho ou necessidade. Nossa equipe entrará em contato prontamente.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 sm:p-8 shadow-sm">
            <GHLForm minHeight="540px" />
          </div>
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: BRANCO PARA BRANCO/OFF-WHITE
          ================================================================== */}
      <div className="h-10 bg-gradient-to-b from-white to-[#F8FAFC]" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 5 — AVALIAÇÃO GOOGLE & REVIEWS REAIS DO PERFIL
          ================================================================== */}
      <section className="relative bg-[#F8FAFC] py-16 lg:py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GoogleReviewsSection />
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: BRANCO/OFF-WHITE PARA BRANCO PURO
          ================================================================== */}
      <div className="h-10 bg-gradient-to-b from-[#F8FAFC] to-white" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 6 — SOBRE A EMPRESA (FUNDO BRANCO PRIORIZADO)
          ================================================================== */}
      <section className="relative bg-white py-20 lg:py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#1177B8] uppercase">
                Institucional
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Sobre a A R Climatização
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                <p>
                  A <strong className="text-slate-900">A R Climatização</strong> é uma empresa especializada na área de climatização e refrigeração, sediada em Cascadura, na cidade do Rio de Janeiro.
                </p>
                <p>
                  Com atuação voltada a diferentes tipos de aparelhos de ar-condicionado, a empresa conta com profissionais dedicados e capacitados para melhor atender os clientes, oferecendo contato ágil e suporte transparente.
                </p>
                <p>
                  Para consultar detalhes de atendimento, confirmar disponibilidade ou solicitar orientações sobre o seu equipamento, preencha o formulário online ou ligue diretamente.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/sobre')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1177B8] hover:text-[#0f6aa5] transition-colors cursor-pointer"
                >
                  Conheça mais sobre a empresa
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 space-y-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">
                  Compromisso com o Atendimento
                </h3>
                <ul className="space-y-3.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#1177B8] shrink-0 mt-0.5" />
                    <span>Atendimento direcionado para diferentes modelos e tipos de ar-condicionado.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#1177B8] shrink-0 mt-0.5" />
                    <span>Equipe dedicada e capacitada na área de climatização e refrigeração.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#1177B8] shrink-0 mt-0.5" />
                    <span>Localização física em Cascadura, com facilidade de contato telefônico e online.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#1177B8] shrink-0 mt-0.5" />
                    <span>Pontualidade nos horários confirmados de segunda a sábado.</span>
                  </li>
                </ul>

                <div className="border-t border-slate-200 pt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Solicitação digital:</span>
                  <button
                    type="button"
                    onClick={onOpenForm}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1177B8] hover:underline cursor-pointer"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Abrir formulário</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: BRANCO PARA BRANCO/OFF-WHITE
          ================================================================== */}
      <div className="h-10 bg-gradient-to-b from-white to-[#F8FAFC]" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 7 — LOCALIZAÇÃO & HORÁRIOS (FUNDO BRANCO PRIORIZADO)
          ================================================================== */}
      <section className="relative bg-[#F8FAFC] py-20 lg:py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#1177B8] uppercase">
              Onde Estamos
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl text-balance">
              Localização em Cascadura e Horários
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Endereço confirmado e horários de atendimento da A R Climatização no Rio de Janeiro.
            </p>
          </div>

          <MapSection onOpenForm={onOpenForm} />
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: BRANCO/OFF-WHITE PARA BRANCO PURO
          ================================================================== */}
      <div className="h-10 bg-gradient-to-b from-[#F8FAFC] to-white" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 8 — PERGUNTAS FREQUENTES (FAQ) (FUNDO BRANCO PRIORIZADO)
          ================================================================== */}
      <section className="relative bg-white py-20 lg:py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#1177B8] uppercase">
              Esclarecimentos
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl text-balance">
              Perguntas frequentes
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Confira respostas claras e transparentes sobre o atendimento da A R Climatização.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqItems} theme="light" />
          </div>
        </div>
      </section>

      {/* ==================================================================
          TRANSIÇÃO EM DEGRADÊ: DO BRANCO PARA O CTA FINAL ESCURO/AZUL PROFUNDO
          ================================================================== */}
      <div className="h-20 bg-gradient-to-b from-white via-[#0D2233] to-[#07111B]" aria-hidden="true" />

      {/* ==================================================================
          SEÇÃO 9 — CTA FINAL
          ================================================================== */}
      <section className="relative bg-[#07111B] py-20 lg:py-28 overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#1177B8]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Precisa falar sobre climatização?
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              Preencha nosso formulário de atendimento online ou ligue diretamente para a A R Climatização.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={onOpenForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#1177B8]/25 transition-all hover:bg-[#0f6aa5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39BDF2] cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                <span>{siteConfig.primaryCTA}</span>
              </button>

              <a
                href={getPhoneLink()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#39BDF2]" />
                <span>{siteConfig.secondaryCTA}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
