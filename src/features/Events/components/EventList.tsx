"use client"

import { EventItem } from "@/src/@types/events";
import { EventCard } from "@/src/components/custom/event/EventCard"
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";

type EventListProps = {
  events: EventItem[];
  onSelect: (event: EventItem) => void;
};

export function EventList({ events, onSelect }: EventListProps) {
  return (
    <div className="h-full bg-gray rounded-lg shadow-md shadow-gray-4 flex justify-center">
      {events.length === 0 ? (
        <p className="text-blue-main font-bold px-8 text-center">Nenhum evento encontrado</p>
      ) : (
        <ScrollArea className="h-[40rem] w-full px-2 py-4">
          {events.map((item) => (
            <div className="h-full w-full block cursor-pointer" key={item.id} onClick={() => onSelect(item)}>
              <EventCard event={item} showImage />
            </div>
          ))}
          <ScrollBar orientation="vertical" className="bg-gray-2 [&>div]:bg-brown-light [&>div]:rounded-full" />
        </ScrollArea>
      )}
    </div>
  )
}