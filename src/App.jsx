import { useState, useRef } from 'react'
import Header from './components/Header'
import InputCard from './components/InputCard'
import TranslationSelector from './components/TranslationSelector'
import SummaryCard from './components/SummaryCard'
import AnalogyCard from './components/AnalogyCard'
import QuizCard from './components/QuizCard'
import FooterActions from './components/FooterActions'
import LoadingCard from './components/LoadingCard'
import ErrorCard from './components/ErrorCard'
import { ArrowDoodle } from './components/Doodles'
import { generateAll, generateAnalogy, generateQuiz } from './lib/grok'

/**
 * App — root component.
 *
 * State:
 *  notes          {string}       textarea value
 *  mode           {string|null}  selected translation mode id
 *  generating     {boolean}      main Generate button spinner
 *  results        {object|null}  { summary, analogy, quiz } from Grok
 *  error          {string|null}  main generation error message
 *  analogyLoading {boolean}      spinner for Try Another Analogy
 *  quizLoading    {boolean}      spinner for New Quiz
 *  quizKey        {number}       incremented to reset quiz answer state
 */
export default function App() {
  const [notes, setNotes]                 = useState('')
  const [mode, setMode]                   = useState(null)
  const [generating, setGenerating]       = useState(false)
  const [results, setResults]             = useState(null)
  const [error, setError]                 = useState(null)
  const [analogyLoading, setAnalogyLoading] = useState(false)
  const [quizLoading, setQuizLoading]     = useState(false)
  const [quizKey, setQuizKey]             = useState(0)

  const resultsRef = useRef(null)

  // ── Validation helper ─────────────────────────────────────────────────────
  const getValidationError = () => {
    if (!notes.trim()) return 'Please paste some notes first! ✏️'
    if (!mode)         return 'Pick a translation mode first! 🎨'
    return null
  }

  // ── Main Generate ─────────────────────────────────────────────────────────
  const handleGenerate = async () => {
    const validationErr = getValidationError()
    if (validationErr) {
      setError(validationErr)
      return
    }

    setGenerating(true)
    setResults(null)
    setError(null)

    try {
      const data = await generateAll(notes, mode)
      setResults(data)
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } catch (err) {
      setError(err.message)
    } finally {
      setGenerating(false)
    }
  }

  // ── Try Another Analogy ───────────────────────────────────────────────────
  const handleNewAnalogy = async () => {
    if (analogyLoading) return
    setAnalogyLoading(true)
    try {
      const data = await generateAnalogy(notes, mode)
      setResults((prev) => ({ ...prev, analogy: data.analogy }))
    } catch (err) {
      setError(err.message)
    } finally {
      setAnalogyLoading(false)
    }
  }

  // ── New Quiz ──────────────────────────────────────────────────────────────
  const handleNewQuiz = async () => {
    if (quizLoading) return
    setQuizLoading(true)
    setQuizKey((k) => k + 1)
    try {
      const data = await generateQuiz(notes)
      setResults((prev) => ({ ...prev, quiz: data.quiz }))
    } catch (err) {
      setError(err.message)
    } finally {
      setQuizLoading(false)
    }
  }

  const showResults = results !== null

  return (
    <div className="min-h-screen py-8 px-4" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── SVG displacement filter for sketchy borders ── */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="sketchy" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ── Ambient background doodles ── */}
      <div aria-hidden="true" style={{ position: 'fixed', top: 60, left: -10, opacity: 0.07, transform: 'rotate(-15deg)', pointerEvents: 'none', fontSize: '8rem' }}>✏️</div>
      <div aria-hidden="true" style={{ position: 'fixed', bottom: 80, right: -20, opacity: 0.07, transform: 'rotate(10deg)', pointerEvents: 'none', fontSize: '8rem' }}>📓</div>
      <div aria-hidden="true" style={{ position: 'fixed', top: '40%', right: -30, opacity: 0.05, transform: 'rotate(5deg)', pointerEvents: 'none', fontSize: '9rem' }}>💡</div>

      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <Header />

        {/* Input card */}
        <InputCard notes={notes} setNotes={setNotes} />

        {/* Translation mode selector */}
        <TranslationSelector mode={mode} setMode={setMode} />

        {/* Generate button */}
        <div className="flex justify-center mb-8">
          <div style={{ position: 'relative' }}>
            <button
              id="generate-btn"
              className="generate-btn"
              onClick={handleGenerate}
              disabled={generating}
              aria-busy={generating}
            >
              {generating ? (
                <span className="flex items-center gap-2.5">
                  <svg
                    width="22" height="22" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    aria-hidden="true"
                    style={{ animation: 'spin 1s linear infinite' }}
                  >
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                    <path d="M12 2 A10 10 0 0 1 22 12" />
                  </svg>
                  Asking Grok...
                </span>
              ) : (
                <span>⚡ Generate</span>
              )}
            </button>

            <div aria-hidden="true" style={{ position: 'absolute', top: -28, right: -35, transform: 'rotate(40deg)', opacity: 0.5 }}>
              <ArrowDoodle size={28} />
            </div>
          </div>
        </div>

        {/* ── Main error (validation or API failure before results) ── */}
        {error && !showResults && (
          <ErrorCard
            message={error}
            onRetry={() => { setError(null); handleGenerate() }}
          />
        )}

        {/* ── Loading skeletons (during initial generate) ── */}
        {generating && (
          <div style={{ animation: 'fadeSlideUp 0.4s ease forwards' }}>
            <LoadingCard title="Summary" emoji="📋" />
            <LoadingCard title="Analogy" emoji="🎭" />
            <LoadingCard title="Quick Quiz" emoji="🧠" />
          </div>
        )}

        {/* ── Results section ── */}
        {showResults && !generating && (
          <div ref={resultsRef} style={{ animation: 'fadeSlideUp 0.5s ease forwards' }}>

            <SummaryCard summary={results.summary} />

            <AnalogyCard
              analogy={results.analogy}
              analogyLoading={analogyLoading}
            />

            <QuizCard
              quizData={results.quiz}
              quizLoading={quizLoading}
              quizKey={quizKey}
            />

            {/* Inline error after results (for analogy/quiz refresh failures) */}
            {error && (
              <ErrorCard
                message={error}
                onRetry={() => setError(null)}
              />
            )}

            <FooterActions
              onNewAnalogy={handleNewAnalogy}
              onNewQuiz={handleNewQuiz}
              analogyLoading={analogyLoading}
              quizLoading={quizLoading}
            />
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-5 opacity-50">
          <p className="font-caveat" style={{ fontSize: '1rem', color: '#3d3d5c' }}>
            made with ✏️ + ☕ for students who can&apos;t even
          </p>
        </footer>
      </div>
    </div>
  )
}
