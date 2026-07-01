"use client"

import { EventItem } from "@/src/@types/events";
import { EventCard } from "@/src/components/custom/event/EventCard"

type EventListProps = {
  events: EventItem[];
  onSelect: (event: EventItem) => void;
};

export function EventList({ events, onSelect }: EventListProps) {
  return (
    <>
      {events.length === 0 ? (
        <p className="text-blue-5 font-bold px-8 text-center">Nenhum evento encontrado</p>
      ) : (
        <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((item) => (
            <div className="cursor-pointer" key={item.id} onClick={() => onSelect(item)}>
              <EventCard event={item} showImage badgeVariant="category" />
            </div>
          ))}
        </div>

      )}
    </>
  )
}