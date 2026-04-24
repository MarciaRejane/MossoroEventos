import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import type { EventItem } from "@/src/@types/events";
import Image from "next/image";
import { EventBadge } from "./EventBadge";
import { EventInformation } from "./EventInformation";

type eventItemProps = {
  event: EventItem;
  badgeVariant?: "default" | "category";
  variant?: "default" | "map";
  showImage?: boolean;
};

export function EventCard({ event, showImage, badgeVariant = "default", variant = "default" }: eventItemProps) {
  const isMap = variant === "map";
  return (
    <Card className=" flex flex-col border hover:shadow-gray-4 border-gray-2 pt-0.5 bg-white rounded-lg overflow-hidden mb-4">
      {showImage && event.imageUrl && (
        <div className="h-52 w-full relative">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            className="object-cover rounded-t-lg"
            src={event.imageUrl}
            alt={event.title} />
        </div>
      )}
      <CardContent className="flex flex-col gap-1 pt-5">
        {!isMap && (
          <EventBadge category={event.category} variant={badgeVariant} />
        )}
        <CardTitle className="text-blue-main font-bold text-base">{event.title}</CardTitle>
        <div className="text-gray-5 font-medium text-md">
          <EventInformation
            date={event.date}
            time={event.time}
            location={event.location?.name}
          />
        </div>
      </CardContent>
    </Card>
  )
}