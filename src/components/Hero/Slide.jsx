import React from 'react'
import { motion as Motion } from 'framer-motion'
import NextButton from './NextButton'

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6, ease: 'easeOut' } })
}

export default function Slide({ image, eyebrow, titleLines = [], goNext, progress, index, SLIDES }) {
  return (
    <div className="relative w-full h-[76vh] md:h-[88vh] overflow-hidden">
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
      <div className="relative z-10 max-w-5xl px-8 lg:px-20 py-16 md:py-28 flex flex-col h-full justify-center">
        <Motion.div initial="hidden" animate="visible">
          {eyebrow && (
            <Motion.div custom={0} variants={textVariants} className="text-[16px] font-normal text-white/90 mb-6 line-height-1.5">
              {eyebrow}
            </Motion.div>
          )}

          <div className="text-white">
            {titleLines.map((line, i) => (
              <Motion.h1
                key={i}
                custom={i + 1}
                variants={textVariants}
                className={`text-4xl md:text-6xl lg:text-7xl font-normal line-height-1 leading-[0.95] tracking-tight ${i === 0 ? 'mb-2' : ''}`}
              >
                {line}
              </Motion.h1>
            ))}
          </div>
        </Motion.div>
      </div>

      <div className="absolute left-8 bottom-8 z-30 flex items-center gap-6">
          <NextButton onClick={goNext} progress={progress} nextImageUrl={index < SLIDES.length && SLIDES[index+1] && SLIDES[index+1].image}/>
          
          <div className="flex flex-row items-start text-white/90 justify-center align-items-center gap-4 mt-4">
            <div className="text-sm">0{index + 1}</div>
            <div className="w-56 h-1 bg-white/10 rounded overflow-hidden relative">
              <div
                className="absolute left-0 top-0 h-full bg-white"
                style={{ width: `${((index) / (SLIDES.length - 1)) * 100}%`, opacity: 0.9 }}
              />
              <div
                className="absolute left-0 top-0 h-full bg-white/40"
                style={{ width: `${(progress) * (100 / SLIDES.length)}%`, transition: 'width 0.15s linear' }}
              />
            </div>
            <div className="text-sm">0{SLIDES.length}</div>
          </div>
        </div>
    </div>
  )
}
