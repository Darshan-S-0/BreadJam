import { useState } from 'react'
import { QUIZ_DATA } from '../constants'

/**
 * Single quiz question with A/B/C/D clickable options.
 * Manages its own selected-answer state.
 *
 * @param {{ id, question, options, correct }} q   - question object
 * @param {number}                             idx  - 0-based question index
 */
function QuizQuestion({ q, idx }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (optIdx) => {
    if (selected !== null) return // locked after first answer
    setSelected(optIdx)
  }

  return (
    <div
      className="mb-6"
      style={{ animation: `fadeSlideUp 0.5s ease ${idx * 0.15}s both` }}
    >
      {/* Question text */}
      <p
        className="margin-line font-caveat font-semibold mb-3"
        style={{ fontSize: '1.15rem', color: '#1a1a2e' }}
      >
        <span style={{ color: '#e65100', marginRight: 6 }}>Q{idx + 1}.</span>
        {q.question}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-2 pl-4">
        {q.options.map((opt, oi) => {
          // Determine CSS class for feedback state
          let cls = 'quiz-opt'
          if (selected !== null) {
            if (oi === q.correct) cls += ' correct'
            else if (oi === selected) cls += ' incorrect'
          }

          return (
            <button
              key={oi}
              className={cls}
              onClick={() => handleSelect(oi)}
              disabled={selected !== null}
              style={{
                animation: selected === oi ? 'pop 0.35s ease forwards' : 'none',
              }}
              aria-pressed={selected === oi}
            >
              <span style={{ marginRight: 10, opacity: 0.5 }}>
                {String.fromCharCode(65 + oi)}.
              </span>
              {opt}
              {/* Feedback emoji — right-aligned */}
              {selected !== null && oi === q.correct && (
                <span className="float-right" aria-label="Correct">✅</span>
              )}
              {selected !== null && oi === selected && selected !== q.correct && (
                <span className="float-right" aria-label="Incorrect">❌</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/**
 * QuizCard — renders all quiz questions.
 * Accepts a `quizKey` prop so the parent can reset all question states
 * by incrementing the key (React re-mounts child components).
 *
 * @param {number} quizKey - increment to reset quiz state
 */
export default function QuizCard({ quizKey }) {
  return (
    <div className="result-card mb-6" style={{ animationDelay: '0.3s' }}>
      {/* Dark title bar */}
      <div className="card-title-bar">
        <span aria-hidden="true">🧠</span> Quick Quiz
      </div>

      {/* Questions — keyed so they re-mount on quizKey change */}
      <div className="px-4 pb-4 relative" style={{ zIndex: 1 }} key={quizKey}>
        {QUIZ_DATA.map((q, i) => (
          <QuizQuestion key={`${quizKey}-${q.id}`} q={q} idx={i} />
        ))}
      </div>
    </div>
  )
}
