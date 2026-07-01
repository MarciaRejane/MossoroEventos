import { Card, CardDescription, CardTitle } from "@/src/components/ui/card";
import { EventItem } from "@/src/@types/events";
import { EventInformation } from "@/src/components/custom/event/EventInformation";

type EventDetailsProps = {
  event: EventItem | null;
}

export function EventDetails({ event }: EventDetailsProps) {
  if (!event) return null;

  return (
    <Card className="space-y-3 border-t-0 bg-linear-to-r from-blue-main to-purple-900 text-white p-5">
      <CardTitle className="text-bs">{event.title}</CardTitle>
      <CardDescription className="text-md">{event.description}</CardDescription>
      <EventInformation
        date={event.date}
        time={event.time}
        location={event.location?.name}
        className="text-white space-y-3"
      />
    </Card>

  )
}