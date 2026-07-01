"use client"
import { SearchFilterContainer } from "../SearchFilter/SearchFilterContainer";
import { EventList } from "../EventList";
import { useEvents } from "../../hook/useEvents";
import { EventItem } from "@/src/@types/events";
import dynamic from "next/dynamic";
import { EventDetails } from "../map/EventDetails";

const MapView = dynamic(
  () => import("@/src/features/EventsCalendar/components/map/MapView").then((mod) => mod.MapView),
  { ssr: false }
)

type EventItemProps = {
  events: EventItem[];
}

export function EventSection({ events }: EventItemProps) {
  const { filteredEvents, category, setCategory, search, setSearch, selectedEvent, setSelectedEvent } = useEvents(events);
  return (
    <section className="min-h-screen pb-8 px-4 lg:px-8">
      <div className="sticky -mt-6 p-8 shadow-md rounded-xl bg-linear-to-r from-blue-6 to-purple-950 top-20 left-0 z-50">
        <SearchFilterContainer search={search} setSearch={setSearch} category={category} setCategory={setCategory} events={events} />
      </div>
      <div className="relative z-0 flex gap-8">
        <EventList events={filteredEvents} onSelect={setSelectedEvent} />
        <MapView events={filteredEvents} selectedEvent={selectedEvent} />
      </div>
      <EventDetails event={selectedEvent} />
    </section>
  )
}