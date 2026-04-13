"use client"

import { Event } from "@/src/@types/events";
import { EventCard } from "@/src/components/custom/event/EventCard"
import { Button } from "@/src/components/ui/button";

type EventListProps = {
  events: Event[];
}
export function EventList({ events }: EventListProps) {
  return (
    <div className="py-4 px-8 w-full md:max-w-2xs">
      {events.map((item) => (
        <Button className="p-0 h-auto w-full block" key={item.id} variant={"ghost"}>
          <EventCard event={item} />
        </Button>
      ))}
    </div>
  )
}