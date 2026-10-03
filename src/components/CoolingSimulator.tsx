import { useState } from 'react';
import { Wind, Gauge, ShieldCheck, ThermometerSnowflake, Activity, FileText } from 'lucide-react';

type FlowMode = 'laminar' | 'directional' | 'quiet';

interface CoolingSimulatorProps {
  onOpenForm?: () => void;
}

export default function CoolingSimulator({ onOpenForm }: CoolingSimulatorProps) {
  const [mode, setMode] = useState<FlowMode>('laminar');

  const modesInfo = {
    laminar: {
      title: 'Circulação Ampla & Homogênea',
      description: 'Distribuição contínua de ar frio pelo ambiente sem criar correntes bruscas, assegurando equilíbrio térmico estável.',
      airflowSpeed: 'Velocidade balanceada',
      acousticLevel: 'Nível sonoro suave',
      diffusionAngle: 'Abertura de 120°',
      activeColor: '#39BDF2',
    },
    directional: {
      title: 'Fluxo Direcionado Rápido',
      description: 'Canalização do volume de ar para climatização ágil de zonas específicas com maior carga térmica.',
      airflowSpeed: 'Velocidade intensificada',
      acousticLevel: 'Nível sonoro padrão',
      diffusionAngle: 'Abertura de 45°',
      activeColor: '#1177B8',
    },
    quiet: {
      title: 'Modo Conforto Silencioso',
      description: 'Operação com ajuste gradual de aletas e vazão atenuada, indicada para repouso e concentração.',
      airflowSpeed: 'Velocidade atenuada',
      acousticLevel: 'Operação ultra silenciosa',
      diffusionAngle: 'Abertura gradual 90°',
      activeColor: '#EAF7FC',
    },
  };

  const current = modesInfo[mode];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#091522] p-6 lg:p-10 shadow-2xl">
      {/* Background glow and subtle grid */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-20 blur-3xl transition-colors duration-700"
        style={{ backgroundColor: current.activeColor }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1177B8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Left column: Technical explanation & Mode switches */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[#39BDF2] uppercase">
              Dinâmica de Climatização
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
              Circulação & Eficiência Térmica
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              O funcionamento adequado de sistemas de climatização depende da circulação correta do ar, troca de calor precisa e estabilidade em todos os tipos de equipamentos.
            </p>
          </div>

          {/* Interactive Mode Selector (Buttons/Segmented controls conforming to design rules) */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-slate-400">Selecione um padrão de circulação:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setMode('laminar')}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  mode === 'laminar'
                    ? 'bg-[#1177B8] text-white shadow-lg shadow-[#1177B8]/25'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <Wind className="h-3.5 w-3.5" />
                Circulação Ampla
              </button>

              <button
                type="button"
                onClick={() => setMode('directional')}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  mode === 'directional'
                    ? 'bg-[#1177B8] text-white shadow-lg shadow-[#1177B8]/25'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <Gauge className="h-3.5 w-3.5" />
                Fluxo Direcionado
              </button>

              <button
                type="button"
                onClick={() => setMode('quiet')}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  mode === 'quiet'
                    ? 'bg-[#1177B8] text-white shadow-lg shadow-[#1177B8]/25'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <ThermometerSnowflake className="h-3.5 w-3.5" />
                Modo Silencioso
              </button>
            </div>
          </div>

          {/* Mode description panel */}
          <div className="rounded-xl border border-slate-800 bg-[#07111B]/80 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[#39BDF2]" />
              <h4 className="text-sm font-semibold text-white">{current.title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">{current.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
              <div>
                <span className="text-slate-500 block text-[11px]">Vazão do ar</span>
                <span className="font-medium text-slate-200">{current.airflowSpeed}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Distribuição</span>
                <span className="font-medium text-slate-200">{current.diffusionAngle}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            {onOpenForm ? (
              <button
                type="button"
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39BDF2] cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Solicitar Atendimento</span>
              </button>
            ) : (
              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1177B8] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0f6aa5] shadow-md shadow-[#1177B8]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39BDF2]"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Solicitar Atendimento</span>
              </a>
            )}
          </div>
        </div>

        {/* Right column: Aerodynamic technical vector representation */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-4/3 w-full max-w-md overflow-hidden rounded-xl border border-slate-800 bg-[#050D15] p-5 shadow-inner flex flex-col justify-between">
            {/* Top status bar inside vector visual */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-3">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-[#39BDF2]" />
                Simulação de Fluxo Laminar
              </span>
              <span className="text-slate-500 font-mono text-[10px]">A R Climatização</span>
            </div>

            {/* Aerodynamic Airflow Graphic SVG */}
            <div className="relative my-4 flex-1 flex items-center justify-center">
              <svg viewBox="0 0 400 220" className="h-full w-full max-h-56" fill="none">
                <defs>
                  <linearGradient id="coolFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0D2233" stopOpacity="0.2" />
                    <stop offset="40%" stopColor="#1177B8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#39BDF2" stopOpacity="1" />
                  </linearGradient>

                  <linearGradient id="warmIntakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#97A8B5" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#39BDF2" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Evaporator Unit Frame representation */}
                <rect x="20" y="40" width="80" height="140" rx="8" fill="#0D2233" stroke="#1E3A53" strokeWidth="2" />
                {/* Evaporator metallic fins */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line
                    key={i}
                    x1="26"
                    y1={55 + i * 13}
                    x2="94"
                    y2={55 + i * 13}
                    stroke="#1E3A53"
                    strokeWidth="1.5"
                    strokeDasharray="2 3"
                  />
                ))}

                {/* Intake Air Vectors entering top */}
                <path d="M 60 15 L 60 38" stroke="url(#warmIntakeGrad)" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M 40 20 L 40 38" stroke="url(#warmIntakeGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
                <path d="M 80 20 L 80 38" stroke="url(#warmIntakeGrad)" strokeWidth="1.5" strokeDasharray="4 2" />

                {/* Dynamic Air Outlet Stream Lines depending on mode */}
                {mode === 'laminar' && (
                  <g className="transition-all duration-500">
                    <path
                      d="M 100 70 C 180 50, 260 40, 380 45"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 100 95 C 190 85, 270 80, 380 85"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 100 120 C 190 120, 280 125, 380 130"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 100 145 C 180 160, 260 175, 380 180"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                )}

                {mode === 'directional' && (
                  <g className="transition-all duration-500">
                    <path
                      d="M 100 100 C 180 100, 260 100, 380 100"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 100 110 C 180 115, 260 118, 380 120"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 100 90 C 180 85, 260 82, 380 80"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </g>
                )}

                {mode === 'quiet' && (
                  <g className="transition-all duration-500 opacity-80">
                    <path
                      d="M 100 80 C 160 85, 240 100, 360 105"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray="6 4"
                    />
                    <path
                      d="M 100 110 C 170 120, 250 135, 360 140"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="8 4"
                    />
                    <path
                      d="M 100 135 C 180 150, 260 165, 360 170"
                      stroke="url(#coolFlowGrad)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="5 3"
                    />
                  </g>
                )}

                {/* Floating Cool Droplets */}
                <circle cx="210" cy="72" r="2.5" fill="#39BDF2" className="animate-pulse" />
                <circle cx="290" cy="115" r="3" fill="#EAF7FC" className="animate-pulse" />
                <circle cx="340" cy="85" r="2" fill="#39BDF2" />
                <circle cx="160" cy="130" r="2" fill="#1177B8" />
              </svg>
            </div>

            {/* Bottom micro legend */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#39BDF2]" />
                Troca Térmica Ativa
              </span>
              <span className="text-slate-500">Equipamentos Climatizadores</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
