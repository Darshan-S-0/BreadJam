/**
 * FooterActions — "Try Another Analogy" and "New Quiz" buttons.
 * Shows spinner on whichever button is loading.
 * Stacked on mobile, side-by-side on sm+ screens.
 *
 * @param {Function} onNewAnalogy    - callback to fetch a new analogy
 * @param {Function} onNewQuiz       - callback to fetch a new quiz
 * @param {boolean}  analogyLoading  - disables analogy button while loading
 * @param {boolean}  quizLoading     - disables quiz button while loading
 */
export default function FooterActions({ onNewAnalogy, onNewQuiz, analogyLoading, quizLoading }) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-3 justify-center mb-10 mt-2"
      style={{ animation: 'fadeSlideUp 0.5s ease 0.5s both' }}
    >
      <button
        id="new-analogy-btn"
        className="sketch-btn"
        style={{ fontSize: '1rem', padding: '10px 24px', opacity: analogyLoading ? 0.65 : 1 }}
        onClick={onNewAnalogy}
        disabled={analogyLoading}
      >
        {analogyLoading ? '⏳ Fetching...' : '🔄 Try Another Analogy'}
      </button>

      <button
        id="new-quiz-btn"
        className="sketch-btn"
        style={{ fontSize: '1rem', padding: '10px 24px', opacity: quizLoading ? 0.65 : 1 }}
        onClick={onNewQuiz}
        disabled={quizLoading}
      >
        {quizLoading ? '⏳ Fetching...' : '🎲 New Quiz'}
      </button>
    </div>
  )
}
