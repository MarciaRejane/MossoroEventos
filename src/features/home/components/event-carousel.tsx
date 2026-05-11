"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carrossel";
import { EventCard } from "@/src/components/custom/event/EventCard";
import { Button } from "@/src/components/ui/button";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { useCarousel } from "@/src/features/home/hook/useCarousel";
import { EventItem } from "@/src/@types/events";
import Autoplay from "embla-carousel-autoplay";

type EventItemProps = {
  events: EventItem[]
}

export function EventCarousel({ events }: EventItemProps) {
  const { count, current, scrollTo, setApi } = useCarousel();
  return (
    <div >
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full max-w-3xs md:max-w-6xl">
        <CarouselContent>
          {events.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3 px-5">
              <div>
                <EventCard event={item} showImage />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-10 h-10  text-gray-1 cursor-pointer" />
        <CarouselNext className="w-10 h-10 text-gray-1 cursor-pointer " />
        <div className="flex items-center justify-center">
          {Array.from({ length: count }).map((_, index) => (
            <Button key={index} onClick={() => scrollTo(index)} variant={"outline"} className="text-white border-none">{index === current ? <CircleRoundedIcon sx={{ width: 20 }} className="text-brown-3" /> : <CircleOutlinedIcon sx={{ width: 15 }} />}</Button>
          ))}
        </div>
      </Carousel>
    </div>
  )
}