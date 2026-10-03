import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  theme?: 'dark' | 'light';
  variant?: 'full' | 'compact' | 'icon';
}

export default function Logo({
  className = '',
  size = 'md',
  showSubtitle = true,
  theme = 'dark',
  variant = 'full',
}: LogoProps) {
  // Dimensions based on size
  const iconDimensions = {
    sm: { w: 34, h: 34 },
    md: { w: 44, h: 44 },
    lg: { w: 56, h: 56 },
  }[size];

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }[size];

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  }[size];

  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Símbolo Exclusivo: Aparelho Split Soprando Ar Fresco + Cristal Térmico */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Glow sutil de ar fresco */}
        <div
          className="absolute -inset-1 rounded-full bg-[#39BDF2]/20 blur-md transition-all group-hover:bg-[#39BDF2]/35"
          aria-hidden="true"
        />

        <svg
          width={iconDimensions.w}
          height={iconDimensions.h}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Gradiente da Unidade Split */}
            <linearGradient id="split-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E90FF" />
              <stop offset="50%" stopColor="#1177B8" />
              <stop offset="100%" stopColor="#0B4D78" />
            </linearGradient>

            {/* Gradiente das Ondas de Ar Gelado */}
            <linearGradient id="cool-breeze-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* Gradiente do Cristal de Refrigeração */}
            <linearGradient id="crystal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </linearGradient>
          </defs>

          {/* Círculo de fundo tecnológico suave com aro metálico */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="#061A2B"
            stroke="url(#cool-breeze-grad)"
            strokeWidth="1.5"
            strokeOpacity="0.75"
          />

          {/* 1. Aparelho de Ar Condicionado Split (Unidade Evaporadora) */}
          {/* Corpo do aparelho Split */}
          <rect
            x="9"
            y="11"
            width="30"
            height="11"
            rx="2.5"
            fill="url(#split-body-grad)"
            stroke="#7DD3FC"
            strokeWidth="1.2"
          />

          {/* Grelha / Linha de aleta superior */}
          <line
            x1="12"
            y1="14"
            x2="36"
            y2="14"
            stroke="#93C5FD"
            strokeWidth="0.8"
            strokeOpacity="0.6"
          />

          {/* Aleta defletora de ar inferior (aberta soprando ar) */}
          <path
            d="M12 20.5H36"
            stroke="#E0F2FE"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Display LED de temperatura / Luz indicadora de ligado */}
          <circle cx="34" cy="17.5" r="1" fill="#38BDF8" />
          <circle cx="31" cy="17.5" r="0.7" fill="#86EFAC" />

          {/* 2. Ondas Dinâmicas de Ar Refrigerado / Climatização saindo do aparelho */}
          {/* Onda central principal */}
          <path
            d="M15 25C17 28 20 28 24 25.5C28 23 31 27 33 29"
            stroke="#38BDF8"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Onda secundária */}
          <path
            d="M12 29C15 32.5 19 32.5 23 30C27 27.5 31 31.5 34 34.5"
            stroke="#7DD3FC"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />

          {/* Onda inferior suave */}
          <path
            d="M14 34.5C17 38 21 37.5 25 35C28 33 32 37 35 39"
            stroke="#BAE6FD"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />

          {/* 3. Floco de Neve / Cristal de Gelo Simbólico de Refrigeração (canto esquerdo inferior) */}
          <g transform="translate(11, 35) scale(0.65)">
            <line x1="6" y1="0" x2="6" y2="12" stroke="url(#crystal-grad)" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="0" y1="6" x2="12" y2="6" stroke="url(#crystal-grad)" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="2" y1="2" x2="10" y2="10" stroke="url(#crystal-grad)" strokeWidth="1" strokeLinecap="round" />
            <line x1="10" y1="2" x2="2" y2="10" stroke="url(#crystal-grad)" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Estrela / Brilho de frescor (canto superior direito) */}
          <path
            d="M39 8L39.8 9.8L41.6 10.6L39.8 11.4L39 13.2L38.2 11.4L36.4 10.6L38.2 9.8L39 8Z"
            fill="#38BDF8"
          />
        </svg>
      </div>

      {/* Tipografia da Marca com identidade clara de Ar Condicionado */}
      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={`font-black tracking-tight ${titleSizes} ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              A<span className="text-[#38BDF8]">·</span>R
            </span>
            <span
              className={`font-extrabold uppercase tracking-wide ${titleSizes} ${
                isLight ? 'text-[#1177B8]' : 'text-[#38BDF8]'
              }`}
            >
              Climatização
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className={`font-semibold tracking-wider uppercase ${subSizes} ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                Ar Condicionado & Refrigeração
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
