/**
 * Gráfico vetorial interativo de um aparelho de ar-condicionado split premium.
 * Apresenta ANIMAÇÃO FLUIDA DE AR em tempo real:
 * - Rajadas de ar frio saindo continuamente da aleta inferior com ondulações fluidas
 * - Partículas de névoa e brisa em movimento aerodinâmico
 * - Aleta motorizada com suave movimento de direcionamento
 * - Display LED digital pulsando suavemente com halo de refrigeração
 */

export default function AirConditionerGraphic({ className = '' }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[540px] select-none ${className}`}>
      {/* Background Cold Atmospheric Radial Glow */}
      <div className="pointer-events-none absolute -inset-10 -bottom-20 rounded-full bg-gradient-to-b from-[#39BDF2]/20 via-[#1177B8]/25 to-transparent blur-3xl animate-pulse-glow" />

      {/* SVG Graphic with dynamic CSS animations */}
      <svg
        viewBox="0 0 560 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
      >
        <defs>
          {/* Main Chassis Metallic Gradient */}
          <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#F1F5F9" />
            <stop offset="70%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Front Panel Sleek Gloss */}
          <linearGradient id="frontGloss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
          </linearGradient>

          {/* Louver Inner Vent Shadow */}
          <linearGradient id="louverInnerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B131E" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Dynamic Air Stream Cold Gradients */}
          <linearGradient id="airStreamFluid1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#0284C7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="airStreamFluid2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#BAE6FD" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="mistMistCone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#0284C7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#07111B" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter for digital LED display */}
          <filter id="ledGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="airBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Embedded CSS animations for fluid airflow and breeze */}
        <style>{`
          @keyframes streamDash {
            0% { stroke-dashoffset: 240; opacity: 0.2; }
            30% { opacity: 0.9; }
            80% { opacity: 0.7; }
            100% { stroke-dashoffset: 0; opacity: 0.1; }
          }
          @keyframes mistPulse {
            0%, 100% { transform: scaleY(0.96) scaleX(0.98); opacity: 0.45; }
            50% { transform: scaleY(1.05) scaleX(1.02); opacity: 0.75; }
          }
          @keyframes particleDrift1 {
            0% { transform: translate(0, 0); opacity: 0; }
            20% { opacity: 0.9; }
            80% { opacity: 0.8; }
            100% { transform: translate(-28px, 140px); opacity: 0; }
          }
          @keyframes particleDrift2 {
            0% { transform: translate(0, 0); opacity: 0; }
            25% { opacity: 1; }
            75% { opacity: 0.85; }
            100% { transform: translate(35px, 150px); opacity: 0; }
          }
          @keyframes particleDrift3 {
            0% { transform: translate(0, 0); opacity: 0; }
            20% { opacity: 0.95; }
            80% { opacity: 0.7; }
            100% { transform: translate(8px, 160px); opacity: 0; }
          }
          @keyframes louverSway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(1.2deg); }
          }
          .anim-stream-1 {
            stroke-dasharray: 80 40;
            animation: streamDash 3.2s linear infinite;
          }
          .anim-stream-2 {
            stroke-dasharray: 90 50;
            animation: streamDash 2.8s linear infinite;
            animation-delay: 0.6s;
          }
          .anim-stream-3 {
            stroke-dasharray: 70 35;
            animation: streamDash 3.5s linear infinite;
            animation-delay: 1.1s;
          }
          .anim-stream-4 {
            stroke-dasharray: 100 45;
            animation: streamDash 2.6s linear infinite;
            animation-delay: 1.5s;
          }
          .anim-stream-5 {
            stroke-dasharray: 60 40;
            animation: streamDash 3.8s linear infinite;
            animation-delay: 0.3s;
          }
          .anim-mist {
            transform-origin: 280px 170px;
            animation: mistPulse 4s ease-in-out infinite;
          }
          .anim-p1 { animation: particleDrift1 2.5s ease-out infinite; }
          .anim-p2 { animation: particleDrift2 2.9s ease-out infinite; animation-delay: 0.8s; }
          .anim-p3 { animation: particleDrift3 2.3s ease-out infinite; animation-delay: 1.4s; }
          .anim-p4 { animation: particleDrift1 3.1s ease-out infinite; animation-delay: 0.4s; }
          .anim-p5 { animation: particleDrift2 2.7s ease-out infinite; animation-delay: 1.7s; }
          .anim-louver {
            transform-origin: 280px 165px;
            animation: louverSway 6s ease-in-out infinite;
          }
        `}</style>

        {/* ========================================================
            1. AIR CONDITIONER BODY & CHASSIS
            ======================================================== */}
        <g id="ac-chassis">
          {/* Unit Wall Mount Back Shadow */}
          <rect x="46" y="28" width="468" height="152" rx="20" fill="#0B131E" opacity="0.65" />

          {/* Main AC Body Outer Frame */}
          <rect
            x="50"
            y="20"
            width="460"
            height="146"
            rx="18"
            fill="url(#chassisGrad)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Top Air Intake Micro-Vents Grid */}
          <g opacity="0.45">
            {Array.from({ length: 32 }).map((_, i) => (
              <line
                key={i}
                x1={70 + i * 13}
                y1="25"
                x2={70 + i * 13}
                y2="34"
                stroke="#64748B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* Top Chassis Bevel Highlight */}
          <rect x="52" y="21" width="456" height="6" rx="3" fill="#FFFFFF" opacity="0.8" />

          {/* Front Curved Panel Inset */}
          <path
            d="M 60 38 Q 280 42 500 38 C 506 38 510 42 508 50 L 502 138 C 501 144 495 148 488 148 L 72 148 C 65 148 59 144 58 138 L 52 50 C 50 42 54 38 60 38 Z"
            fill="#F8FAFC"
            stroke="#E2E8F0"
            strokeWidth="1"
          />

          {/* Front Gloss Reflection */}
          <path
            d="M 60 38 L 270 38 L 190 148 L 72 148 Z"
            fill="url(#frontGloss)"
            opacity="0.6"
          />

          {/* Subtle Horizontal Seam Line */}
          <line x1="58" y1="124" x2="502" y2="124" stroke="#E2E8F0" strokeWidth="1" />

          {/* ========================================================
              2. DIGITAL DISPLAY & STATUS LED (21°C)
              ======================================================== */}
          <g transform="translate(400, 68)">
            {/* LED Screen Inset Background */}
            <rect x="0" y="0" width="76" height="34" rx="6" fill="#0A1624" stroke="#1E293B" strokeWidth="1" />

            {/* Glowing Digital Temperature Display (21°C) */}
            <text
              x="36"
              y="23"
              fill="#38BDF8"
              fontFamily="monospace, system-ui, sans-serif"
              fontSize="18"
              fontWeight="800"
              textAnchor="middle"
              filter="url(#ledGlow)"
            >
              21°
            </text>

            {/* Micro Cool Snowflake Icon & Eco Dot */}
            <circle cx="62" cy="13" r="2" fill="#38BDF8" filter="url(#ledGlow)" />
            <circle cx="62" cy="22" r="1.5" fill="#10B981" />
          </g>

          {/* Discreet Brand Inscription on AC Front */}
          <text
            x="82"
            y="90"
            fill="#64748B"
            fontFamily="system-ui, sans-serif"
            fontSize="10"
            fontWeight="700"
            letterSpacing="2"
          >
            A R CLIMATIZAÇÃO
          </text>
          <text
            x="82"
            y="102"
            fill="#94A3B8"
            fontFamily="system-ui, sans-serif"
            fontSize="7"
            letterSpacing="1"
          >
            INVERTER ECO SYSTEM
          </text>

          {/* ========================================================
              3. LOWER AIR OUTLET & MOTORIZED DEFLECTOR LOUVER
              ======================================================== */}
          {/* Dark Inner Vent cavity */}
          <rect x="66" y="142" width="428" height="20" rx="4" fill="url(#louverInnerShadow)" />

          {/* Internal Blue Cooling Core Glow */}
          <rect x="70" y="148" width="420" height="8" rx="2" fill="#0284C7" opacity="0.35" filter="url(#airBlur)" />

          {/* Motorized Swing Louver Flap slightly opened downwards with subtle breathing animation */}
          <g className="anim-louver">
            <path
              d="M 68 152 Q 280 159 492 152 C 495 152 496 156 494 159 L 488 166 C 486 168 482 169 478 169 L 82 169 C 78 169 74 168 72 166 L 66 159 C 64 156 65 152 68 152 Z"
              fill="#E2E8F0"
              stroke="#94A3B8"
              strokeWidth="1"
            />
            {/* Louver edge chrome trim */}
            <line x1="76" y1="167" x2="484" y2="167" stroke="#38BDF8" strokeWidth="1.5" opacity="0.85" />
          </g>
        </g>

        {/* ========================================================
            4. LIVING, FLUID ANIMATED AIRFLOW & BREEZE CURRENTS
            ======================================================== */}
        <g id="fluid-air-flow" className="pointer-events-none">
          {/* Broad Atmospheric Diffuse Air Cone (pulsing mist) */}
          <path
            d="M 130 168 C 110 230, 40 310, 10 390 L 550 390 C 520 310, 450 230, 430 168 Z"
            fill="url(#mistMistCone)"
            className="anim-mist"
          />

          {/* Secondary Soft Cloud Wave */}
          <path
            d="M 180 170 C 160 220, 120 280, 70 380 L 490 380 C 440 280, 400 220, 380 170 Z"
            fill="url(#airStreamFluid1)"
            opacity="0.3"
            filter="url(#airBlur)"
          />

          {/* Aerodynamic Animated Streamlines Issuing Continuously */}
          {/* Center Stream 1 */}
          <path
            d="M 280 168 C 280 230, 285 290, 290 390"
            stroke="url(#airStreamFluid2)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="anim-stream-1"
          />

          {/* Left Stream 2 */}
          <path
            d="M 210 168 C 190 230, 150 295, 90 390"
            stroke="url(#airStreamFluid2)"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="anim-stream-2"
          />

          {/* Far Left Stream 3 */}
          <path
            d="M 150 168 C 120 225, 75 290, 30 380"
            stroke="url(#airStreamFluid1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="anim-stream-3"
          />

          {/* Right Stream 4 */}
          <path
            d="M 350 168 C 370 230, 410 295, 470 390"
            stroke="url(#airStreamFluid2)"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="anim-stream-4"
          />

          {/* Far Right Stream 5 */}
          <path
            d="M 410 168 C 440 225, 485 290, 530 380"
            stroke="url(#airStreamFluid1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="anim-stream-5"
          />

          {/* Internal Cross Currents */}
          <path
            d="M 245 168 C 240 235, 230 290, 205 390"
            stroke="url(#airStreamFluid1)"
            strokeWidth="2"
            strokeLinecap="round"
            className="anim-stream-3"
          />
          <path
            d="M 315 168 C 320 235, 330 290, 355 390"
            stroke="url(#airStreamFluid1)"
            strokeWidth="2"
            strokeLinecap="round"
            className="anim-stream-2"
          />

          {/* Animated Cool Mist Particulates drifting smoothly */}
          <g transform="translate(170, 180)" className="anim-p1">
            <circle cx="0" cy="0" r="3" fill="#E0F2FE" />
          </g>
          <g transform="translate(240, 190)" className="anim-p2">
            <circle cx="0" cy="0" r="2.5" fill="#38BDF8" />
          </g>
          <g transform="translate(285, 175)" className="anim-p3">
            <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
          </g>
          <g transform="translate(330, 190)" className="anim-p4">
            <circle cx="0" cy="0" r="2.5" fill="#38BDF8" />
          </g>
          <g transform="translate(390, 180)" className="anim-p5">
            <circle cx="0" cy="0" r="3" fill="#E0F2FE" />
          </g>
          <g transform="translate(140, 200)" className="anim-p3">
            <circle cx="0" cy="0" r="2" fill="#BAE6FD" />
          </g>
          <g transform="translate(420, 200)" className="anim-p1">
            <circle cx="0" cy="0" r="2" fill="#BAE6FD" />
          </g>
        </g>
      </svg>
    </div>
  );
}
