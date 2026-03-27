import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import type { Event } from "@/src/@types/events";
import Image from "next/image";
import { Badge } from "@/src/components/ui/badge";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

type eventItemProps = {
  event: Event;
}

export function EventCard({ event }: eventItemProps) {
  return (
    <Card className="flex flex-col pt-0.5 border-none bg-white rounded-lg overflow-hidden mb-4">
      <div className="h-50 w-full relative ">
        {event.imageUrl && <Image fill priority className="object-cover rounded-t-lg" src={event.imageUrl} alt={event.title} />}
      </div>
      <CardContent className="flex flex-col gap-1">
        <Badge variant="secondary" className="text-white mb-2 px-5 py-1 w-fit bg-brown-light">{event.category}</Badge>
        <CardTitle className="text-blue-main font-bold text-base">{event.title}</CardTitle>
        <div className="text-gray-5 font-medium text-md">
          <div className="flex flex-row items-center gap-1">
            <CalendarTodayOutlinedIcon sx={{ width: 18 }} />
            <CardDescription>{event.date}</CardDescription>
          </div>
          <div className="flex flex-row items-center gap-1">
            <ScheduleOutlinedIcon sx={{ width: 18 }} />
            <CardDescription>{event.time}</CardDescription>
          </div>
          <div className="flex flex-row items-center gap-1">
            <RoomOutlinedIcon sx={{ width: 18 }} />
            <CardDescription>{event.location}</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}