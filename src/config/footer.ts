import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import {
  Facebook,
  Google,
  Instagram,
  YouTube,
  YoutubeSearchedFor,
  YoutubeSearchedForOutlined,
} from "@mui/icons-material";
import { Youtube } from "lucide-react";

export const FOOTER_DATA = {
  contato: [
    {
      icon: LocalPhoneRoundedIcon,
      value: "(84) 99999-9999",
    },
    {
      icon: EmailRoundedIcon,
      value: "contato@mossoromeupais.com.br",
    },
    {
      icon: LocationOnRoundedIcon,
      value: "Mossoró, Rio Grande do Norte",
    },
  ],

  social: [
    {
      href: "/",
      icon: Facebook,
    },
    {
      href: "/",
      icon: YouTube,
    },
    {
      href: "/",
      icon: Instagram,
    },
  ],
};
