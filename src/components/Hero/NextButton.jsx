import React from 'react';
import { motion as Motion } from 'framer-motion';


export default function NextButton({ onClick, progress = 0, label = 'Next', nextImageUrl = '' }) {
  const size = 64
  const stroke = 2
  const inner = size - stroke * 2
  const perimeter = inner * 4

  return (
    <button
      onClick={onClick}
      aria-label="Next slide"
      className="relative w-20 h-20 flex items-center justify-center focus:outline-none"
    >
      <div className="absolute inset-0 border border-white/20 pointer-events-none"></div>

      <div className="absolute left-0 bottom-0 w-16 h-16 m-2 bg-cover bg-center shadow-sm opacity-95"
           style={{ backgroundImage: `url(${nextImageUrl})` }} />

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="z-10"
        aria-hidden
      >
        <Motion.rect
          x={stroke}
          y={stroke}
          width={inner}
          height={inner}
          fill="none"
          stroke="white"
          strokeWidth={stroke}
          strokeLinecap="square"
          rx="2"
          strokeDasharray={perimeter}
          strokeDashoffset={perimeter * (1 - Math.min(Math.max(progress, 0), 1))}
          initial={{ strokeDashoffset: perimeter }}
          animate={{ strokeDashoffset: perimeter * (1 - Math.min(Math.max(progress, 0), 1)) }}
          transition={{ ease: 'linear', duration: 0.2 }}
        />
      </svg>

      {/* Label */}
      <span className="sr-only">{label}</span>
    </button>
  )
}
