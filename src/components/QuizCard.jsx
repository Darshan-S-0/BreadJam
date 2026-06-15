import { useState } from 'react'
import LoadingCard from './LoadingCard'

/**
 * Single quiz question with A/B/C/D clickable options.
 */
function QuizQuestion({ q, idx }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (optIdx) => {
    if (selected !== null) return
    setSelected(optIdx)
  }

  return (
    <div
      className="mb-6"
      style={{ animation: `fadeSlideUp 0.5s ease ${idx * 0.15}s both` }}
    >
      <p
        className="margin-line font-caveat font-semibold mb-3"
        style={{ fontSize: '1.15rem', color: '#1a1a2e' }}
      >
        <span style={{ color: '#e65100', marginRight: 6 }}>Q{idx + 1}.</span>
        {q.question}
      </p>

      <div className="flex flex-col gap-2 pl-4">
        {q.options.map((opt, oi) => {
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
 * QuizCard — renders dynamic quiz questions from Grok API.
 *
 * @param {{ question: string, options: string[], correct: number }[]} quizData - AI-generated questions
 * @param {boolean} quizLoading - true while fetching a new quiz
 * @param {number}  quizKey     - increment to reset per-question selected state
 */
export default function QuizCard({ quizData, quizLoading, quizKey }) {
  if (quizLoading) {
    return <LoadingCard title="Quick Quiz" emoji="🧠" />
  }

  return (
    <div className="result-card mb-6" style={{ animationDelay: '0.3s' }}>
      <div className="card-title-bar">
        <span aria-hidden="true">🧠</span> Quick Quiz
      </div>

      <div className="px-4 pb-4 relative" style={{ zIndex: 1 }} key={quizKey}>
        {quizData.map((q, i) => (
          <QuizQuestion key={`${quizKey}-${i}`} q={q} idx={i} />
        ))}
      </div>
    </div>
  )
}
