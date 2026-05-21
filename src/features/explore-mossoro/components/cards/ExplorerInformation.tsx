import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { CardDescription } from "@/src/components/ui/card";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

type ExplorerInformationProps = {
  phone: string;
  time: string;
  location: string;
  className?: string;
}

export function ExplorerInformation({ phone, time, className = "", location }: ExplorerInformationProps) {
  return (
    <div className={`flex flex-col gap-2 text-gray-5 ${className}`}>
      <div className="flex items-center gap-1">
        <RoomOutlinedIcon sx={{ width: 20 }} />
        <CardDescription className="text-md">{location}</CardDescription>
      </div>

      <div className="flex items-center gap-1">
        <PhoneOutlinedIcon sx={{ width: 20 }} />
        <CardDescription className="text-md">{phone}</CardDescription>
      </div>

      <div className="flex items-center gap-1">
        <AccessTimeRoundedIcon sx={{ width: 20 }} />
        <CardDescription className="text-md">{time}</CardDescription>
      </div>
    </div>
  )
}