import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import type { Event } from "@/src/@types/events";
import Image from "next/image";
import { EventBadge } from "./EventBadge";
import { EventInformation } from "./EventInformation";

type eventItemProps = {
  event: Event;
  badgeVariant?: "default" | "category";
};

export function EventCard({ event, badgeVariant = "default" }: eventItemProps) {
  return (
    <Card className="flex flex-col border hover:shadow-gray-4 border-gray-2 pt-0.5 bg-white rounded-lg overflow-hidden mb-4">
      {event.imageUrl && (
        <div className="h-50 w-full relative">
          <Image
            fill
            priority
            className="object-cover rounded-t-lg"
            src={event.imageUrl}
            alt={event.title} />
        </div>
      )}
      {event.id && (
        <CardContent className="flex flex-col gap-1 pt-5">
          <EventBadge category={event.category} variant={badgeVariant} />
          <CardTitle className="text-blue-main font-bold text-base">{event.title}</CardTitle>
          <div className="text-gray-5 font-medium text-md">
            <EventInformation
              date={event.date}
              time={event.time}
              location={event.location}
            />
          </div>
        </CardContent>
      )}
    </Card>
  )
}