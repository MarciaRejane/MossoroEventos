import { EventItem } from "@/src/@types/events";
import { CalendarSection } from "./Calendar";
import { HeroSection } from "./hero";

type EventItemProps = {
  events: EventItem[]
}

export function CalendarContainerSection({ events }: EventItemProps) {
  return (
    <div>
      <HeroSection />
      <CalendarSection events={events} />
    </div>
  )
}