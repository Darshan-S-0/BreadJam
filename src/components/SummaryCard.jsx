/**
 * SummaryCard — displays AI-generated summary.
 *
 * @param {string} summary - AI-generated summary text
 */
export default function SummaryCard({ summary }) {
  return (
    <div className="result-card mb-6" style={{ animationDelay: '0s' }}>
      <div className="card-title-bar">
        <span aria-hidden="true">📋</span> Summary
      </div>

      <div className="px-4 pb-4 relative" style={{ zIndex: 1 }}>
        <p
          className="margin-line font-patrick leading-relaxed"
          style={{ fontSize: '1.05rem', color: '#1a1a2e', lineHeight: 1.7 }}
        >
          {summary}
        </p>
      </div>
    </div>
  )
}
