import React from 'react'
import { motion as Motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6, ease: 'easeOut' } })
}

export default function Slide({ image, eyebrow, titleLines = [], indexLabel = '01' }) {
  return (
    <div className="relative w-full h-[76vh] md:h-[88vh] overflow-hidden rounded-none">
      {/* Background image cover */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-90"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={eyebrow || titleLines.join(' ')}
      />

      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-5xl px-8 lg:px-20 py-16 md:py-28">
        <Motion.div initial="hidden" animate="visible">
          {eyebrow && (
            <Motion.div custom={0} variants={textVariants} className="text-sm text-white/90 mb-6">
              {eyebrow}
            </Motion.div>
          )}

          <div className="text-white">
            {titleLines.map((line, i) => (
              <Motion.h1
                key={i}
                custom={i + 1}
                variants={textVariants}
                className={`text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight ${i === 0 ? 'mb-2' : ''}`}
              >
                {line}
              </Motion.h1>
            ))}
          </div>
        </Motion.div>
      </div>
    </div>
  )
}
