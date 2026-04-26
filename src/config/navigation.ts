import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

export const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: HomeOutlinedIcon,
  },
  {
    href: "/dashboard/Events",
    label: "Eventos",
    icon: RoomOutlinedIcon,
  },
  {
    href: "/dashboard/Calendar",
    label: "Calendário",
    icon: CalendarTodayOutlinedIcon,
  },
  {
    href: "/history",
    label: "História",
    icon: HistoryOutlinedIcon,
  },
];
