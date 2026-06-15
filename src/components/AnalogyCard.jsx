/**
 * AnalogyCard — displays AI-generated analogy.
 * Animates in fresh on each new `analogy` string.
 *
 * @param {string}  analogy        - AI-generated analogy text
 * @param {boolean} analogyLoading - true while fetching a new analogy
 */
import LoadingCard from './LoadingCard'

export default function AnalogyCard({ analogy, analogyLoading }) {
  if (analogyLoading) {
    return <LoadingCard title="Analogy" emoji="🎭" />
  }

  return (
    <div className="result-card mb-6" style={{ animationDelay: '0.15s' }}>
      <div className="card-title-bar">
        <span aria-hidden="true">🎭</span> Analogy
      </div>

      <div
        className="px-4 pb-4 relative"
        style={{ zIndex: 1 }}
        key={analogy} /* re-triggers fade animation on new analogy */
      >
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
          💬 {analogy}
        </p>
      </div>
    </div>
  )
}
