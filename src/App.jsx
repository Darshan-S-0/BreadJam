import { useState, useRef } from 'react'
import Header from './components/Header'
import InputCard from './components/InputCard'
import TranslationSelector from './components/TranslationSelector'
import SummaryCard from './components/SummaryCard'
import AnalogyCard from './components/AnalogyCard'
import QuizCard from './components/QuizCard'
import FooterActions from './components/FooterActions'
import { ArrowDoodle } from './components/Doodles'

/**
 * App — root component.
 *
 * State:
 *  notes        {string}      - textarea value
 *  mode         {string|null} - selected translation mode id
 *  showResults  {boolean}     - whether results section is visible
 *  generating   {boolean}     - spinner while "generating"
 *  quizKey      {number}      - increment to hard-reset quiz questions
 *  analogyIndex {number}      - index into ANALOGIES pool
 */
export default function App() {
  const [notes, setNotes]               = useState('')
  const [mode, setMode]                 = useState(null)
  const [showResults, setShowResults]   = useState(false)
  const [generating, setGenerating]     = useState(false)
  const [quizKey, setQuizKey]           = useState(0)
  const [analogyIndex, setAnalogyIndex] = useState(0)

  const resultsRef = useRef(null)

  /** Simulate a 1.2 s "generate" delay then reveal results. */
  const handleGenerate = () => {
    if (generating) return
    setGenerating(true)
    setShowResults(false)
    setTimeout(() => {
      setShowResults(true)
      setGenerating(false)
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }, 1200)
  }

  const handleNewAnalogy = () => setAnalogyIndex((i) => i + 1)
  const handleNewQuiz    = () => setQuizKey((k) => k + 1)

  return (
    <div className="min-h-screen py-8 px-4" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── Sketchy SVG displacement filter ── */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="sketchy" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="2"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ── Ambient background doodles ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', top: 60, left: -10,
          opacity: 0.07, transform: 'rotate(-15deg)',
          pointerEvents: 'none', fontSize: '8rem',
        }}
      >✏️</div>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', bottom: 80, right: -20,
          opacity: 0.07, transform: 'rotate(10deg)',
          pointerEvents: 'none', fontSize: '8rem',
        }}
      >📓</div>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', top: '40%', right: -30,
          opacity: 0.05, transform: 'rotate(5deg)',
          pointerEvents: 'none', fontSize: '9rem',
        }}
      >💡</div>

      {/* ── Main content column ── */}
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
                  {/* Spinner icon */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                    style={{ animation: 'spin 1s linear infinite' }}
                  >
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                    <path d="M12 2 A10 10 0 0 1 22 12" />
                  </svg>
                  Thinking...
                </span>
              ) : (
                <span>⚡ Generate</span>
              )}
            </button>

            {/* Decorative arrow doodle */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', top: -28, right: -35,
                transform: 'rotate(40deg)', opacity: 0.5,
              }}
            >
              <ArrowDoodle size={28} />
            </div>
          </div>
        </div>

        {/* ── Results section ── */}
        {showResults && (
          <div
            ref={resultsRef}
            style={{ animation: 'fadeSlideUp 0.5s ease forwards' }}
          >
            <SummaryCard />
            <AnalogyCard analogyIndex={analogyIndex} />
            <QuizCard quizKey={quizKey} />
            <FooterActions
              onNewAnalogy={handleNewAnalogy}
              onNewQuiz={handleNewQuiz}
            />
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-5 opacity-50">
          <p
            className="font-caveat"
            style={{ fontSize: '1rem', color: '#3d3d5c' }}
          >
            made with ✏️ + ☕ for students who can&apos;t even
          </p>
        </footer>
      </div>
    </div>
  )
}
