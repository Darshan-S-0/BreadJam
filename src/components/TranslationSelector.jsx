import { MODES } from '../constants'

/**
 * Single mode option button — highlighted when active.
 */
function ModeButton({ label, emoji, active, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`sketch-btn ${active ? 'sketch-btn-active' : ''}`}
      style={{
        transform: active ? 'rotate(-1deg)' : 'rotate(0.4deg)',
        position: 'relative',
      }}
    >
      <span>{emoji}</span>
      {label}
      {/* Active checkmark badge */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center rounded-full font-caveat font-bold bg-ink text-highlight"
          style={{ fontSize: 10 }}
        >
          ✓
        </span>
      )}
    </button>
  )
}

/**
 * TranslationSelector — radio-style card with 4 sketch mode buttons.
 *
 * @param {string|null} mode    - currently selected mode id
 * @param {Function}    setMode - state setter
 */
export default function TranslationSelector({ mode, setMode }) {
  return (
    <div
      className="paper-card mb-6 p-5"
      style={{
        border: '3px solid #1a1a2e',
        borderRadius: 4,
        boxShadow: '6px 6px 0 #1a1a2e',
        transform: 'rotate(0.3deg)',
      }}
    >
      {/* Section label */}
      <p
        className="font-caveat font-bold mb-4 flex items-center gap-1.5"
        style={{ fontSize: '1.2rem', color: '#3d3d5c' }}
      >
        <span>🎨</span>
        Choose your translation:
        {/* Orange squiggle accent */}
        <svg width="40" height="12" viewBox="0 0 40 12" fill="none" aria-hidden="true">
          <path
            d="M2 9 Q10 4 20 8 Q30 12 38 6"
            stroke="#e65100"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </p>

      {/* Mode buttons */}
      <div className="flex flex-wrap gap-3" role="group" aria-label="Translation mode">
        {MODES.map((m) => (
          <ModeButton
            key={m.id}
            label={m.label}
            emoji={m.emoji}
            active={mode === m.id}
            onClick={() => setMode(m.id)}
          />
        ))}
      </div>
    </div>
  )
}
