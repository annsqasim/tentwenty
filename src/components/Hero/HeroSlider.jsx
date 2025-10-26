import React, { useEffect, useRef, useState } from 'react'
import Slide from './Slide'
import Navbar from '../Navbar/Navbar'

const SLIDES = [
  {
    image: '/images/slide-1.png',
    eyebrow: 'Welcome To TenTwenty Farms',
    titleLines: ['From Our Farms', 'To Your Hands']
  },
  {
    image: '/images/slide-2.jpg',
    eyebrow: 'Seasonal Harvest',
    titleLines: ['Fresh Produce', 'Straight To You']
  },
  {
    image: '/images/slide-3.jpg',
    eyebrow: 'Sustainable Methods',
    titleLines: ['Careful Farming', 'Better Taste']
  }
]

export default function Slider({ autoplay = true, interval = 6000 }) {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)
  const isPaused = useRef(false)

  // Advance function
  const goNext = () => {
    setIndex((i) => (i + 1) % SLIDES.length)
    resetProgress()
  }

  const resetProgress = () => {
    setProgress(0)
    startRef.current = performance.now()
  }

  // Autoplay with requestAnimationFrame for smooth progress
  useEffect(() => {
    if (!autoplay) return

    const step = (ts) => {
      if (!startRef.current) startRef.current = ts
      if (isPaused.current) {
        rafRef.current = requestAnimationFrame(step)
        return
      }
      const elapsed = ts - startRef.current
      const p = Math.min(elapsed / interval, 1)
      setProgress(p)
      if (p >= 1) {
        // advance and restart timer
        setIndex((i) => (i + 1) % SLIDES.length)
        startRef.current = ts
        setProgress(0)
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(rafRef.current)
      startRef.current = null
    }
  }, [autoplay, interval])

  // reset when index changed manually
  useEffect(() => {
    startRef.current = performance.now()
    setProgress(0)
  }, [index])

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Pause on hover (optional)
  function onMouseEnter() { isPaused.current = true }
  function onMouseLeave() { isPaused.current = false }

  return (
    <div className="relative">
      <div className='navbar p-8 absolute top-0 left-0 w-full z-30'>
        <Navbar />
      </div>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Slide
          {...SLIDES[index]}
          indexLabel={`0${index + 1}`}
          goNext={goNext}
          progress={progress}
          index={index}
          SLIDES={SLIDES}
        />
      </div>
    </div>
  )
}
