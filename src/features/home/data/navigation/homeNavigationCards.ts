import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import AudiotrackRoundedIcon from "@mui/icons-material/AudiotrackRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
export const HOME_NAVIGATION_CARDS = [
  {
    href: "/",
    title: "Calendário",
    icon: CalendarTodayOutlinedIcon,
    variant: "blue",
  },
  {
    href: "/",
    title: "Mapa de Eventos",
    icon: RoomOutlinedIcon,
    variant: "brown",
  },
  {
    href: "/",
    title: "Shows",
    icon: AudiotrackRoundedIcon,
    variant: "purple",
  },
  {
    href: "/",
    title: "Gastronomia",
    icon: RestaurantRoundedIcon,
    variant: "brownLight",
  },
] as const;
