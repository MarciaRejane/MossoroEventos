import { EventItem } from "@/src/@types/events";
import { EventSection } from "./EventSection";
import { HeroSection } from "./HeroSection";


type EventItemProps = {
  events: EventItem[];
}
export function EventContainer({ events }: EventItemProps) {
  return (
    <div>
      <HeroSection />
      <EventSection events={events} />
    </div>
  )
}