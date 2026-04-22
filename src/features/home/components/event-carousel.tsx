"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carrossel";
import { EventCard } from "@/src/components/custom/event/EventCard";
import { Button } from "@/src/components/ui/button";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { useCarousel } from "@/src/features/home/hook/useCarousel";
import { EventItem } from "@/src/@types/events";

type EventItemProps = {
  events: EventItem[]
}

export function EventCarousel({ events }: EventItemProps) {
  const { count, current, scrollTo, setApi } = useCarousel();
  return (
    <div >
      <Carousel setApi={setApi} opts={{ align: "center", loop: true }} className="w-full max-w-3xs md:max-w-6xl">
        <CarouselContent>
          {events.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/3">
              <div>
                <EventCard event={item} showImage />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-10 h-10 bg-gray-1" />
        <CarouselNext className="w-10 h-10 bg-gray-1" />
        <div className="flex items-center justify-center">
          {Array.from({ length: count }).map((_, index) => (
            <Button key={index} onClick={() => scrollTo(index)} variant={"outline"} className="text-white border-none">{index === current ? <CircleRoundedIcon sx={{ width: 20 }} /> : <CircleOutlinedIcon sx={{ width: 20 }} />}</Button>
          ))}
        </div>
      </Carousel>
    </div>
  )
}