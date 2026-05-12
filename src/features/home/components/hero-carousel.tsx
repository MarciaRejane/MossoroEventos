"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carrossel"
import { HERO_IMAGES } from "../data/mocks/imagesHero"
import Image from "next/image"

export function HeroCarouselPlugin() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
        }),
      ]}
      className="h-full w-full"
    >
      <CarouselContent className="h-[92vh] ">
        {HERO_IMAGES.map((image, index) => (
          <CarouselItem key={index} className="relative h-[92vh] w-full basis-full">
            <Image
              src={image}
              alt={`Palco principal do Mossoró Cidade Junina`}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </CarouselItem>
        ))}

      </CarouselContent>
    </Carousel>
  )
}