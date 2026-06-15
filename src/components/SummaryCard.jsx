/**
 * SummaryCard — displays the generated summary with highlighted code tokens.
 */
export default function SummaryCard() {
  const codeStyle = {
    fontFamily: 'monospace',
    background: '#ffe066',
    padding: '1px 5px',
    borderRadius: 3,
    fontSize: '0.95em',
  }

  return (
    <div className="result-card mb-6" style={{ animationDelay: '0s' }}>
      {/* Dark title bar */}
      <div className="card-title-bar">
        <span aria-hidden="true">📋</span> Summary
      </div>

      {/* Content */}
      <div className="px-4 pb-4 relative" style={{ zIndex: 1 }}>
        <p
          className="margin-line font-patrick leading-relaxed"
          style={{ fontSize: '1.05rem', color: '#1a1a2e', lineHeight: 1.7 }}
        >
          Memory management in C involves manually allocating and freeing memory using functions
          like <code style={codeStyle}>malloc()</code>,{' '}
          <code style={codeStyle}>calloc()</code>,{' '}
          <code style={codeStyle}>realloc()</code>, and{' '}
          <code style={codeStyle}>free()</code>. Proper memory management helps prevent leaks and
          improves program efficiency.
        </p>
      </div>
    </div>
  )
}
