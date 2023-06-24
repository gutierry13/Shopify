'use client'
import { HomeContainer, Products } from '@/styles/home'
import { useKeenSlider } from 'keen-slider/react'
import React from 'react'
export function Slider({ children }: { children: React.ReactNode }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <HomeContainer className="keen-slider" ref={sliderRef}>
      {children}
    </HomeContainer>
  )
}
export function SlideElement({ children }: { children: React.ReactNode }) {
  return <Products className="keen-slider__slide">{children}</Products>
}
