import { events } from "@/src/data/mocks/events";
import { CalendarContainerSection } from "@/src/features/Calendar/components/Sections/CalendarContainerSection";

export default function Calendar() {
  return (
    <main>
      <CalendarContainerSection events={events} />
    </main>
  )
}