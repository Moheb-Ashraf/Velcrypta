// VelcryptaLogo — SVG recreation of the official Velcrypta brand mark
// Faithful to the uploaded image: gold V, all-seeing eye, gothic arch, crimson doorway,
// crescent rune-rings on each side, pointed base, VELCRYPTA wordmark, tagline.

export default function VelcryptaLogo({
  size = 200,
  showWordmark = true,
  showTagline = false,
  className = '',
}) {
  const w = size;
  const h = showTagline ? size * 1.35 : showWordmark ? size * 1.2 : size;

  return (
    <svg
      viewBox={`0 0 200 ${showTagline ? 270 : showWordmark ? 240 : 200}`}
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Velcrypta logo"
      role="img"
    >
      <defs>
        {/* Gold gradient — worn, aged */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D080" />
          <stop offset="30%" stopColor="#C2A96A" />
          <stop offset="60%" stopColor="#A08840" />
          <stop offset="100%" stopColor="#D4BC85" />
        </linearGradient>
        {/* Crimson glow gradient for the door */}
        <radialGradient id="crimsonGlow" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#8B1525" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#6B0F1A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2A0509" stopOpacity="0" />
        </radialGradient>
        {/* Eye iris gradient */}
        <radialGradient id="eyeIris" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A0808" />
          <stop offset="60%" stopColor="#2D1010" />
          <stop offset="100%" stopColor="#C2A96A" stopOpacity="0.6" />
        </radialGradient>
        {/* Inner arch glow */}
        <radialGradient id="archGlow" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="#6B0F1A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0B0B0B" stopOpacity="0" />
        </radialGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ═══ BACKGROUND ═══ */}
      <rect width="200" height="270" fill="#0B0B0B" />

      {/* ═══ CRIMSON AMBIENT GLOW BEHIND V ═══ */}
      <ellipse cx="100" cy="120" rx="70" ry="60" fill="url(#crimsonGlow)" opacity="0.6" />

      {/* ═══ LEFT CRESCENT RING ═══ */}
      <g opacity="0.85">
        {/* Outer crescent arc — left */}
        <path
          d="M 28 60 A 72 72 0 0 0 28 170"
          stroke="url(#goldGrad)" strokeWidth="2.5" fill="none"
          strokeLinecap="round"
        />
        {/* Inner crescent arc — left, slightly darker */}
        <path
          d="M 36 68 A 62 62 0 0 0 36 162"
          stroke="#8B6830" strokeWidth="1" fill="none"
          strokeLinecap="round" opacity="0.7"
        />
        {/* Runic tick marks on left crescent */}
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = -65 + i * 10;
          const rad = (angle * Math.PI) / 180;
          const cx = 100 + Math.cos(rad) * (-72);
          const cy = 115 + Math.sin(rad) * 58;
          const nx = Math.cos(rad);
          const ny = Math.sin(rad);
          return (
            <line
              key={i}
              x1={cx - nx * 4}
              y1={cy - ny * 4}
              x2={cx + nx * 4}
              y2={cy + ny * 4}
              stroke="#C2A96A"
              strokeWidth="1"
              opacity={i % 3 === 0 ? 0.9 : 0.4}
            />
          );
        })}
      </g>

      {/* ═══ RIGHT CRESCENT RING ═══ */}
      <g opacity="0.85">
        <path
          d="M 172 60 A 72 72 0 0 1 172 170"
          stroke="url(#goldGrad)" strokeWidth="2.5" fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 164 68 A 62 62 0 0 1 164 162"
          stroke="#8B6830" strokeWidth="1" fill="none"
          strokeLinecap="round" opacity="0.7"
        />
        {/* Runic ticks on right */}
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = -115 + i * (-10);
          const rad = (angle * Math.PI) / 180;
          const cx = 100 - Math.cos(Math.abs(angle) * Math.PI / 180) * (-72);
          const baseAngle = 65 + i * 10;
          const br = (baseAngle * Math.PI) / 180;
          const bx = 100 + Math.cos(br) * 72;
          const by = 115 + Math.sin(br) * 58;
          const nx = Math.cos(br);
          const ny = Math.sin(br);
          return (
            <line
              key={i}
              x1={bx - nx * 4}
              y1={by - ny * 4}
              x2={bx + nx * 4}
              y2={by + ny * 4}
              stroke="#C2A96A"
              strokeWidth="1"
              opacity={i % 3 === 0 ? 0.9 : 0.4}
            />
          );
        })}
      </g>

      {/* ═══ GOTHIC ARCH INTERIOR ═══ */}
      {/* Arch fill — dark stone */}
      <path
        d="M 68 155 L 68 100 Q 68 62 100 62 Q 132 62 132 100 L 132 155 Z"
        fill="#0D0D0D"
        stroke="#2A1A0A"
        strokeWidth="0.5"
      />
      {/* Nested arch layers — gothic receding arches */}
      {[0, 5, 10].map((offset, i) => (
        <path
          key={i}
          d={`M ${68 + offset} ${155 - offset} L ${68 + offset} ${100 + offset * 0.5} Q ${68 + offset} ${62 + offset * 1.2} 100 ${62 + offset * 1.2} Q ${132 - offset} ${62 + offset * 1.2} ${132 - offset} ${100 + offset * 0.5} L ${132 - offset} ${155 - offset}`}
          fill="none"
          stroke={`rgba(194,169,106,${0.25 - i * 0.07})`}
          strokeWidth="0.8"
        />
      ))}
      {/* Arch ambient glow */}
      <path
        d="M 75 155 L 75 102 Q 75 70 100 70 Q 125 70 125 102 L 125 155 Z"
        fill="url(#archGlow)"
      />

      {/* ═══ CRIMSON DOORWAY ═══ */}
      {/* Door frame */}
      <rect x="88" y="108" width="24" height="47" rx="2" fill="#0A0204" stroke="#4A0A12" strokeWidth="0.8" />
      {/* Door opening glow */}
      <rect x="90" y="110" width="20" height="44" rx="1" fill="#6B0F1A" opacity="0.4" />
      {/* Vertical light shard down center */}
      <rect x="99" y="108" width="2" height="47" fill="#8B1525" opacity="0.7" />
      <rect x="99.5" y="108" width="1" height="47" fill="#CC3040" opacity="0.5" />
      {/* Door knob hint */}
      <circle cx="96" cy="132" r="1.2" fill="#C2A96A" opacity="0.5" />

      {/* ═══ THE V LETTERFORM ═══ */}
      {/* V left stroke */}
      <path
        d="M 18 18 L 100 175 L 100 185"
        stroke="url(#goldGrad)" strokeWidth="18" fill="none"
        strokeLinecap="square" strokeLinejoin="miter"
        filter="url(#goldGlow)"
      />
      {/* V right stroke */}
      <path
        d="M 182 18 L 100 175 L 100 185"
        stroke="url(#goldGrad)" strokeWidth="18" fill="none"
        strokeLinecap="square" strokeLinejoin="miter"
        filter="url(#goldGlow)"
      />
      {/* V inner bevel — slightly darker stripe for dimensionality */}
      <path
        d="M 22 18 L 100 172"
        stroke="#A08840" strokeWidth="5" fill="none" opacity="0.5"
      />
      <path
        d="M 178 18 L 100 172"
        stroke="#A08840" strokeWidth="5" fill="none" opacity="0.5"
      />
      {/* V top serifs */}
      <rect x="10" y="14" width="16" height="7" fill="url(#goldGrad)" />
      <rect x="174" y="14" width="16" height="7" fill="url(#goldGrad)" />
      {/* Pointed tip of the V */}
      <polygon points="100,188 96,178 104,178" fill="url(#goldGrad)" />

      {/* ═══ ALL-SEEING EYE ═══ */}
      {/* Sunburst rays above eye */}
      <g opacity="0.7">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = -90 + i * 30;
          const r = a * Math.PI / 180;
          const innerR = 14;
          const outerR = i % 2 === 0 ? 22 : 17;
          return (
            <line
              key={i}
              x1={100 + Math.cos(r) * innerR}
              y1={32 + Math.sin(r) * innerR}
              x2={100 + Math.cos(r) * outerR}
              y2={32 + Math.sin(r) * outerR}
              stroke="#C2A96A"
              strokeWidth={i % 2 === 0 ? "1.2" : "0.7"}
              opacity={i % 2 === 0 ? 0.9 : 0.5}
            />
          );
        })}
        {/* Vertical line from V-top to eye */}
        <line x1="100" y1="10" x2="100" y2="22" stroke="#C2A96A" strokeWidth="1" opacity="0.6" />
        <line x1="100" y1="42" x2="100" y2="60" stroke="#C2A96A" strokeWidth="0.8" opacity="0.4" />
      </g>
      {/* Eye outer circle */}
      <circle cx="100" cy="32" r="12" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
      {/* Eye white/sclera */}
      <ellipse cx="100" cy="32" rx="10" ry="7" fill="#0F0808" stroke="#8B6830" strokeWidth="0.5" />
      {/* Iris */}
      <circle cx="100" cy="32" r="5" fill="url(#eyeIris)" />
      {/* Pupil */}
      <circle cx="100" cy="32" r="2.5" fill="#080404" />
      {/* Eye highlight */}
      <circle cx="101.5" cy="30.5" r="1" fill="#C2A96A" opacity="0.6" />
      {/* Upper eyelid line */}
      <path d="M 90 30 Q 100 24 110 30" fill="none" stroke="#C2A96A" strokeWidth="1" opacity="0.6" />
      {/* Lower eyelid line */}
      <path d="M 90 34 Q 100 39 110 34" fill="none" stroke="#C2A96A" strokeWidth="0.7" opacity="0.4" />

      {/* ═══ SMALL DIAMOND ACCENT at bottom V-tip ═══ */}
      <polygon points="100,196 103,190 100,184 97,190" fill="url(#goldGrad)" opacity="0.7" />

      {/* ═══ WORDMARK — VELCRYPTA ═══ */}
      {showWordmark && (
        <g>
          <text
            x="100"
            y="222"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="700"
            fontSize="26"
            letterSpacing="8"
            fill="url(#goldGrad)"
          >
            VELCRYPTA
          </text>
          {/* Thin decorative rule under wordmark */}
          <line x1="40" y1="227" x2="160" y2="227" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.5" />
        </g>
      )}

      {/* ═══ TAGLINE ═══ */}
      {showTagline && (
        <g>
          {/* Red diamond separators */}
          <polygon points="82,236 84,232 82,228 80,232" fill="#8B1525" />
          <polygon points="118,236 120,232 118,228 116,232" fill="#8B1525" />
          <line x1="85" y1="232" x2="115" y2="232" stroke="#4A0A12" strokeWidth="0.5" />

          <text
            x="100"
            y="248"
            textAnchor="middle"
            fontFamily="'DM Sans', system-ui, sans-serif"
            fontWeight="400"
            fontSize="7.5"
            letterSpacing="3.5"
            fill="#9A9086"
          >
            UNCOVER THE{' '}
          </text>
          {/* HIDDEN in red */}
          <text
            x="100"
            y="248"
            textAnchor="middle"
            fontFamily="'DM Sans', system-ui, sans-serif"
            fontWeight="400"
            fontSize="7.5"
            letterSpacing="3.5"
            fill="transparent"
          >
            UNCOVER THE
          </text>
          {/* Full tagline with colored words — rendered as two separate lines for color control */}
          <text
            x="100" y="248"
            textAnchor="middle"
            fontFamily="'DM Sans', system-ui, sans-serif"
            fontWeight="400"
            fontSize="7.5"
            letterSpacing="3"
          >
            <tspan fill="#9A9086">UNCOVER THE </tspan>
            <tspan fill="#8B1525">HIDDEN</tspan>
            <tspan fill="#9A9086">. FEAR THE </tspan>
            <tspan fill="#8B1525">UNKNOWN</tspan>
            <tspan fill="#9A9086">.</tspan>
          </text>

          {/* Bottom ornament */}
          <g opacity="0.5" transform="translate(100, 260)">
            <line x1="-20" y1="0" x2="-4" y2="0" stroke="#4A0A12" strokeWidth="0.8" />
            <polygon points="0,-4 3,0 0,4 -3,0" fill="#8B1525" />
            <line x1="4" y1="0" x2="20" y2="0" stroke="#4A0A12" strokeWidth="0.8" />
            <line x1="0" y1="5" x2="0" y2="12" stroke="#C2A96A" strokeWidth="0.8" />
          </g>
        </g>
      )}
    </svg>
  );
}
