import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import { CardDescription } from "../../ui/card";
import { formatDate } from "@/src/lib/utils";

type EventInformationProps = {
  date: Date;
  time: string;
  location?: string;
  className?: string;
}

export function EventInformation({ date, time, className = "", location }: EventInformationProps) {
  return (
    <div className={`flex flex-col gap-2 text-gray-5 text-sm ${className}`}>
      <div className="flex items-center gap-1">
        <CalendarTodayOutlinedIcon sx={{ width: 16 }} />
        <CardDescription>{formatDate(date)}</CardDescription>
      </div>

      <div className="flex items-center gap-1">
        <ScheduleOutlinedIcon sx={{ width: 16 }} />
        <CardDescription>{time}</CardDescription>
      </div>

      <div className="flex items-center gap-1">
        <RoomOutlinedIcon sx={{ width: 16 }} />
        <CardDescription>{location}</CardDescription>
      </div>
    </div>
  )
}