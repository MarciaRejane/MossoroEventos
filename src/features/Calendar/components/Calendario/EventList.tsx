"use client"

import { EventItem } from "@/src/@types/events";
import { EventCard } from "@/src/components/custom/event/EventCard"
import { ScrollArea } from "@/src/components/ui/scroll-area";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

type EventItemProps = {
  events: EventItem[];
}
export function EventListCard({ events }: EventItemProps) {
  return (
    <div className="bg-white shadow-md shadow-gray-4  p-8 rounded h-full ">
      <div className="flex flex-row gap-2 text-blue-main">
        <CalendarTodayOutlinedIcon sx={{ width: 20 }} />
        <h2 className="text-lg font-semibold">Eventos</h2>
      </div>
      <ScrollArea className="border-none border-gray-4 ">
        <div className=" w-full md:max-w-2xs">
          {events.length === 0 ? (
            <p>Nenhum event encontrado para este mês</p>
          ) : (
            events.map((item) => (
              <EventCard event={item} key={item.id} badgeVariant="category" />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
}