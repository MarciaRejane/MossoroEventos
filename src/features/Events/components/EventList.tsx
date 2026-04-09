"use client"

import { EventCard } from "@/src/components/custom/event/EventCard"
import { Button } from "@/src/components/ui/button";
import { event } from "@/src/features/Events/data/mocks/events";

export function EventList() {
  return (
    <div className="py-4 px-8 w-full md:max-w-2xs">
      {event.map((item, index) => (
        <Button className="p-0 h-auto w-full block" key={item.id} variant={"ghost"}>
          <EventCard event={item} />
        </Button>
      ))}
    </div>
  )
}