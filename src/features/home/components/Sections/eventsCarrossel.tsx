import { EventCarousel } from "@/src/features/home/components/event-carousel";

export function SectionEventsCarrossel() {
  return (
    <section className="bg-blue-main flex flex-col items-center px-8 py-15" >
      <div className="space-y-10">
        <div className="text-white font-semibold flex flex-col items-center">
          <h1 className="text-3xl">Próximos Eventos</h1>
          <p>Confira os destaques da nossa programação</p>
        </div>
        <div className="flex items-center justify-center">
          <EventCarousel />
        </div>
      </div>
    </section>
  )
}