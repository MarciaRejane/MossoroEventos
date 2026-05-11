import { EventCarousel } from "@/src/features/home/components/event-carousel";
import { EventItem } from "@/src/@types/events";

type EventItemProps = {
  events: EventItem[]
}
export function SectionEventsCarrossel({ events }: EventItemProps) {
  return (
    <section className="bg-blue-5 flex flex-col items-center px-8 py-15" >
      <div className="space-y-10">
        <div className="text-white font-semibold flex flex-col items-center">
          <h1 className="text-3xl">Próximos Eventos</h1>
          <p>Confira os destaques da nossa programação</p>
        </div>
        <div className="flex items-center justify-center">
          <EventCarousel events={events} />
        </div>
      </div>
    </section>
  )
}