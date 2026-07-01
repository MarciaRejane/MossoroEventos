"use client"

import { EventItem } from "@/src/@types/events";
import { EventCard } from "@/src/components/custom/event/EventCard"

type EventListProps = {
  events: EventItem[];
};

export function EventListCalendar({ events }: EventListProps) {
  return (
    <div>
      {events.length === 0 ? (
        <p className="text-blue-5 font-bold px-8 text-center">Nenhum evento encontrado</p>
      ) : (
        <div className="flex flex-wrap gap-4 bg-pur">
          {events.map((item) => (
            <div className="w-full md:w-[calc(50%-8px)]" key={item.id}>
              <EventCard variant="calendar" event={item} showImage badgeVariant="category" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}