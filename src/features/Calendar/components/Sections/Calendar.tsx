import { EventItem } from "@/src/@types/events";
import { CalendarContainerCardList } from "../Calendario/calendarContainerCardList";

type EventItemProps = {
  events: EventItem[]
}

export function CalendarSection({ events }: EventItemProps) {
  return (
    <section className="min-h-screen py-10 px-8 bg-gray-1">
      <CalendarContainerCardList events={events} />
    </section>
  )
}