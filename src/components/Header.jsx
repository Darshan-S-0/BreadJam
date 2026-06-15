import { LightbulbDoodle, PencilDoodle, BrainDoodle, NotebookDoodle, StarDoodle } from './Doodles'

/**
 * Header — app title, tagline, floating doodle icons, star decorations.
 */
export default function Header() {
  const doodles = [
    { Icon: LightbulbDoodle, delay: '0s' },
    { Icon: PencilDoodle,    delay: '0.5s' },
    { Icon: BrainDoodle,     delay: '1s' },
    { Icon: NotebookDoodle,  delay: '1.5s' },
  ]

  return (
    <header className="text-center mb-10 relative pt-5 pb-2">
      {/* Floating doodle icon row */}
      <div className="flex justify-center items-center gap-6 mb-4 flex-wrap">
        {doodles.map(({ Icon, delay }, i) => (
          <div
            key={i}
            style={{
              animation: `float 3s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <Icon size={38} />
          </div>
        ))}
      </div>

      {/* App title */}
      <h1
        className="inline-block font-caveat font-bold leading-none"
        style={{
          fontSize: 'clamp(3rem, 10vw, 5rem)',
          color: '#1a1a2e',
          textShadow: '3px 3px 0 #ffe066',
          transform: 'rotate(-1deg)',
          marginBottom: 8,
          letterSpacing: '-0.01em',
        }}
      >
        🍞 BreadJam
      </h1>

      {/* Squiggly underline */}
      <div className="flex justify-center mb-3">
        <svg width="260" height="12" viewBox="0 0 260 12" fill="none" aria-hidden="true">
          <path
            d="M4 8 Q65 2 130 7 Q195 12 256 5"
            stroke="#ffe066"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Tagline */}
      <p
        className="font-architect"
        style={{
          fontSize: 'clamp(0.9rem, 3vw, 1.15rem)',
          color: '#3d3d5c',
          letterSpacing: '0.01em',
        }}
      >
        Translating your dense notes into human. ✨
      </p>

      {/* Decorative stars */}
      <span className="absolute top-5 left-2.5 opacity-50">
        <StarDoodle size={16} />
      </span>
      <span className="absolute top-2.5 right-5 opacity-50">
        <StarDoodle size={22} />
      </span>
      <span className="absolute bottom-0 left-[15%] opacity-35">
        <StarDoodle size={12} />
      </span>
    </header>
  )
}
