import { EventItem } from "@/src/@types/events";
import { EventSction } from "./EventSection";
import { HeroSection } from "./HeroSection";


type EventItemProps = {
  events: EventItem[];
}
export function EventContainer({ events }: EventItemProps) {
  return (
    <div>
      <HeroSection />
      <EventSction events={events} />
    </div>
  )
}