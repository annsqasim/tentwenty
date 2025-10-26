import React from 'react'

export default function CarouselItem({ src, alt = '' }) {
  return (
    <div className="w-[435px] h-[620px] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" draggable={false} />
    </div>
  )
}
