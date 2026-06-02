import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";

export const BUTTON_ROUTES = [
  {
    title: "Google Maps",
    description: "Navegação GPS",
    icon: MapOutlinedIcon,
    iconColor: "text-blue-5 bg-blue-2",
  },

  {
    title: "Waze",
    description: "Navegação GPS",
    icon: NearMeOutlinedIcon,
    iconColor: "text-blue-5 bg-cyan-200",
  },

  {
    title: "Uber",
    description: "Solicitar Corrida",
    icon: AirportShuttleRoundedIcon,
    iconColor: "text-white bg-black",
  },

  {
    title: "99",
    description: "Navegação GPS",
    icon: AirportShuttleRoundedIcon,
    iconColor: "text-yellow-4 bg-yellow-1",
  },
];
