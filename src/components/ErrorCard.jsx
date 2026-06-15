/**
 * ErrorCard — hand-drawn styled error display with a retry button.
 *
 * @param {string}   message  - error message to show
 * @param {Function} onRetry  - callback to retry the failed action
 */
export default function ErrorCard({ message, onRetry }) {
  return (
    <div
      className="mb-6 p-5 paper-card"
      style={{
        border: '2.5px solid #c62828',
        borderRadius: 4,
        boxShadow: '4px 4px 0 #c62828',
        animation: 'fadeSlideUp 0.4s ease forwards',
      }}
    >
      <div className="flex items-start gap-3">
        {/* Error icon */}
        <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>😬</span>

        <div className="flex-1">
          <p
            className="font-caveat font-bold mb-1"
            style={{ fontSize: '1.2rem', color: '#c62828' }}
          >
            Oops, something went wrong!
          </p>
          <p
            className="font-patrick mb-3"
            style={{ fontSize: '0.95rem', color: '#7f0000' }}
          >
            {message || 'The AI had a brain fart. Please try again.'}
          </p>

          <button
            className="sketch-btn"
            onClick={onRetry}
            style={{ fontSize: '1rem', padding: '6px 16px' }}
          >
            🔁 Try Again
          </button>
        </div>
      </div>
    </div>
  )
}
