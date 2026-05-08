import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

export const FOOTER_DATA = {
  contato: [
    {
      icon: LocalPhoneRoundedIcon,
      value: "(84) 99999-9999",
      href: "tel:+5584999999999",
    },
    {
      icon: EmailRoundedIcon,
      value: "contato@mossoromeupais.com.br",
      href: "mailto:contato@mossoromeupais.com.br",
    },
    {
      icon: LocationOnRoundedIcon,
      value: "Mossoró, Rio Grande do Norte",
      href: "https://maps.google.com",
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
