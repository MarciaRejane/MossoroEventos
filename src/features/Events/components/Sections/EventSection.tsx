"use client"
import { SearchFilterContainer } from "../SearchFilter/SearchFilterContainer";
import { EventList } from "../EventList";
import { useEvents } from "../../hook/useEvents";
import { EventItem } from "@/src/@types/events";
import dynamic from "next/dynamic";
import { EventDetails } from "../map/EventDetails";

const MapView = dynamic(
  () => import("@/src/features/Events/components/map/MapView").then((mod) => mod.MapView),
  { ssr: false }
)

type EventItemProps = {
  events: EventItem[];
}

export function EventSection({ events }: EventItemProps) {
  const { filteredEvents, category, setCategory, search, setSearch, selectedEvent, setSelectedEvent } = useEvents(events);
  return (
    <section className="min-h-screen px-8 space-y-3 pb-8">
      <div className="sticky bg-white top-29 left-0 z-50 p-8 shadow-md">
        <SearchFilterContainer search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
      </div>
      <div className="py-8 flex flex-col md:flex-row  gap-8 relative z-0">
        <EventList events={filteredEvents} onSelect={setSelectedEvent} />
        <MapView events={filteredEvents} selectedEvent={selectedEvent} />
      </div>
      <EventDetails event={selectedEvent} />
    </section>
  )
}