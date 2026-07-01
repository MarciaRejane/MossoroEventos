import { EventContainer } from "@/src/features/EventsCalendar/components/Sections/EventContainer";
import { events } from "@/src/data/mocks/events";

export default function Event() {

  return (
    <main>
      <EventContainer events={events} />
    </main>
  )
}