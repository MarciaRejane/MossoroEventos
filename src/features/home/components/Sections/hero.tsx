"use client"

import { HeroCarouselPlugin } from "../hero-carousel"

export function SectionHero() {
  return (
    <section className="relative h-[86vh] md:h-[92vh] w-full overflow-hidden">
      <HeroCarouselPlugin />

      <div className="absolute inset-0 bg-blue-7/40 z-10 pointer-events-none"></div>

      <div className="absolute bottom-12 left-6 lg:left-12 z-20 text-white ">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl tracking-tighter drop-shadow-lg">
          Mossoró Meu País
        </h1>
        <div className="mt-2 text-lg lg:text-2xl font-light drop-shadow-md">
          <p>O maior São João do mundo te espera!</p>
          <p>Tradição, cultura e alegria em cada evento.</p>
        </div>
      </div>
    </section>
  )
}