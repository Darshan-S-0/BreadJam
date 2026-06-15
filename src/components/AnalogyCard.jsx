import { ANALOGIES } from '../constants'

/**
 * AnalogyCard — shows a rotating analogy keyed by `analogyIndex`.
 *
 * @param {number} analogyIndex - index into ANALOGIES pool (cycled by parent)
 */
export default function AnalogyCard({ analogyIndex }) {
  const text = ANALOGIES[analogyIndex % ANALOGIES.length]

  return (
    <div className="result-card mb-6" style={{ animationDelay: '0.15s' }}>
      {/* Dark title bar */}
      <div className="card-title-bar">
        <span aria-hidden="true">🎭</span> Analogy
      </div>

      {/* Content — re-mounts on index change for a fresh fade-in */}
      <div className="px-4 pb-4 relative" style={{ zIndex: 1 }} key={analogyIndex}>
        <p
          className="margin-line font-patrick leading-relaxed"
          style={{
            fontSize: '1.05rem',
            color: '#1a1a2e',
            lineHeight: 1.7,
            fontStyle: 'italic',
            animation: 'fadeSlideUp 0.4s ease forwards',
          }}
        >
          💬 {text}
        </p>
      </div>
    </div>
  )
}
