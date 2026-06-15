import { useRef } from 'react'

/**
 * InputCard — hand-drawn bordered card with image upload and notes textarea.
 *
 * @param {string}   notes       - current textarea value
 * @param {Function} setNotes    - state setter for notes
 */
export default function InputCard({ notes, setNotes }) {
  const fileInputRef = useRef(null)

  return (
    <div
      className="paper-card mb-6 p-5"
      style={{
        border: '3px solid #1a1a2e',
        borderRadius: 4,
        boxShadow: '6px 6px 0 #1a1a2e',
        transform: 'rotate(-0.3deg)',
        position: 'relative',
      }}
    >
      {/* Corner sparkles */}
      <span
        aria-hidden="true"
        className="absolute top-2 right-2.5 text-xl select-none pointer-events-none"
        style={{ opacity: 0.15 }}
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-2.5 text-base select-none pointer-events-none"
        style={{ opacity: 0.12 }}
      >
        ✧
      </span>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        aria-label="Upload an image of your notes"
      />

      {/* Upload trigger */}
      <div className="mb-4">
        <button
          className="upload-btn"
          onClick={() => fileInputRef.current?.click()}
          aria-controls="image-upload"
        >
          {/* Camera icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          Upload Image
        </button>
      </div>

      {/* Notes textarea */}
      <div className="relative" style={{ zIndex: 1 }}>
        <textarea
          id="notes-input"
          className="sketch-textarea"
          rows={7}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Paste your confusing notes here... 📝"
          aria-label="Notes input"
        />
      </div>
    </div>
  )
}
