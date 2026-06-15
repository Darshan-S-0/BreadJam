/**
 * FooterActions — "Try Another Analogy" and "New Quiz" buttons shown below the quiz card.
 * Stacked on mobile, side-by-side on sm+ screens.
 *
 * @param {Function} onNewAnalogy - callback to cycle the analogy
 * @param {Function} onNewQuiz    - callback to reset the quiz
 */
export default function FooterActions({ onNewAnalogy, onNewQuiz }) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-3 justify-center mb-10 mt-2"
      style={{ animation: 'fadeSlideUp 0.5s ease 0.5s both' }}
    >
      <button
        id="new-analogy-btn"
        className="sketch-btn"
        style={{ fontSize: '1rem', padding: '10px 24px' }}
        onClick={onNewAnalogy}
      >
        🔄 Try Another Analogy
      </button>

      <button
        id="new-quiz-btn"
        className="sketch-btn"
        style={{ fontSize: '1rem', padding: '10px 24px' }}
        onClick={onNewQuiz}
      >
        🎲 New Quiz
      </button>
    </div>
  )
}
