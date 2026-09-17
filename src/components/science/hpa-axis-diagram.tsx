import React from 'react';

export function HpaAxisDiagram() {
  return (
    <div className="w-full max-w-sm mx-auto bg-[#241033] rounded-2xl p-6 sm:p-8 text-white shadow-card border border-white/10 select-none">
      <div className="text-center mb-6">
        <span className="text-[10px] tracking-widest uppercase font-mono text-accent font-semibold">
          Neuro-Endocrine Cascade
        </span>
        <h4 className="font-display text-lg font-bold text-white mt-1">The HPA Axis Response</h4>
      </div>

      <svg
        viewBox="0 0 280 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="HPA Axis Diagram illustrating threat response from Hypothalamus to Pituitary to Adrenals"
      >
        {/* Step 1: Hypothalamus */}
        <rect x="20" y="10" width="240" height="64" rx="12" fill="#6B32A1" stroke="#C99940" strokeWidth="1" />
        <text x="140" y="36" textAnchor="middle" fill="#C99940" fontSize="11" fontWeight="700" letterSpacing="1.5">
          1. HYPOTHALAMUS
        </text>
        <text x="140" y="56" textAnchor="middle" fill="#FAF8F5" opacity="0.85" fontSize="12" fontStyle="italic" fontFamily="Georgia, serif">
          Detects the perceived threat cue
        </text>

        {/* Down Arrow 1 */}
        <line x1="140" y1="74" x2="140" y2="134" stroke="#C99940" strokeWidth="2" strokeDasharray="4 3" />
        <polygon points="134,134 146,134 140,146" fill="#C99940" />
        <text x="175" y="110" fill="#C99940" fontSize="10" fontFamily="sans-serif">
          CRH
        </text>

        {/* Step 2: Pituitary */}
        <rect x="20" y="146" width="240" height="64" rx="12" fill="#6B32A1" stroke="#C99940" strokeWidth="1" />
        <text x="140" y="172" textAnchor="middle" fill="#C99940" fontSize="11" fontWeight="700" letterSpacing="1.5">
          2. PITUITARY GLAND
        </text>
        <text x="140" y="192" textAnchor="middle" fill="#FAF8F5" opacity="0.85" fontSize="12" fontStyle="italic" fontFamily="Georgia, serif">
          Releases ACTH into bloodstream
        </text>

        {/* Down Arrow 2 */}
        <line x1="140" y1="210" x2="140" y2="270" stroke="#C99940" strokeWidth="2" strokeDasharray="4 3" />
        <polygon points="134,270 146,270 140,282" fill="#C99940" />
        <text x="175" y="246" fill="#C99940" fontSize="10" fontFamily="sans-serif">
          ACTH
        </text>

        {/* Step 3: Adrenals */}
        <rect x="20" y="282" width="240" height="64" rx="12" fill="#6B32A1" stroke="#C99940" strokeWidth="1" />
        <text x="140" y="308" textAnchor="middle" fill="#C99940" fontSize="11" fontWeight="700" letterSpacing="1.5">
          3. ADRENAL GLANDS
        </text>
        <text x="140" y="328" textAnchor="middle" fill="#FAF8F5" opacity="0.85" fontSize="12" fontStyle="italic" fontFamily="Georgia, serif">
          Floods cortisol &amp; adrenaline
        </text>
      </svg>

      <div className="mt-4 pt-4 border-t border-white/10 text-center">
        <p className="text-[11px] text-white/60 leading-relaxed">
          The 3-Step Protocol disrupts this automated alarm at the subconscious root, stopping the cortisol surge before it triggers.
        </p>
      </div>
    </div>
  );
}
