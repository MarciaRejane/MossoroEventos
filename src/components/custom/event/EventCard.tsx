import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import type { Event } from "@/src/@types/events";
import Image from "next/image";
import { EventBadge } from "./EventBadge";
import { EventInformation } from "./EventInformation";

type eventItemProps = {
  event: Event;
};

export function EventCard({ event }: eventItemProps) {
  return (
    <Card className="flex flex-col pt-0.5 border-none bg-white rounded-lg overflow-hidden mb-4">
      <div className="h-50 w-full relative ">
        {event.imageUrl && <Image fill priority className="object-cover rounded-t-lg" src={event.imageUrl} alt={event.title} />}
      </div>
      <CardContent className="flex flex-col gap-1">
        <EventBadge category={event.category} />
        <CardTitle className="text-blue-main font-bold text-base">{event.title}</CardTitle>
        <div className="text-gray-5 font-medium text-md">
          <EventInformation
            date={event.date}
            time={event.time}
            location={event.location}
          />
        </div>
      </CardContent>
    </Card>
  )
}