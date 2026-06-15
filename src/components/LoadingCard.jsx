/**
 * LoadingCard — animated shimmer skeleton shown while Grok API is processing.
 * Matches the hand-drawn result-card aesthetic.
 *
 * @param {string} title  - card title to display in the dark header bar
 * @param {string} emoji  - emoji for the header
 */
export default function LoadingCard({ title, emoji }) {
  return (
    <div className="result-card mb-6">
      {/* Title bar */}
      <div className="card-title-bar">
        <span>{emoji}</span> {title}
      </div>

      {/* Shimmer lines */}
      <div className="px-4 pb-5 pt-2 space-y-3">
        <ShimmerLine width="w-full" />
        <ShimmerLine width="w-5/6" />
        <ShimmerLine width="w-4/6" />
      </div>
    </div>
  )
}

function ShimmerLine({ width }) {
  return (
    <div
      className={`h-4 rounded ${width} bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.08)] to-transparent`}
      style={{
        background:
          'linear-gradient(90deg, rgba(200,216,232,0.3) 25%, rgba(200,216,232,0.7) 50%, rgba(200,216,232,0.3) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.4s infinite linear',
        borderRadius: 4,
        border: '1.5px solid rgba(200,216,232,0.8)',
      }}
    />
  )
}

// Inject shimmer keyframe once
const shimmerStyle = document.createElement('style')
shimmerStyle.textContent = `
  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`
if (!document.head.querySelector('[data-shimmer]')) {
  shimmerStyle.setAttribute('data-shimmer', '1')
  document.head.appendChild(shimmerStyle)
}
