import {
  getGoogleMapsDirectionUrl,
  getUberDirectionUrl,
  getWazeDirectionUrl,
} from "./maps";

type RouteType = "googleMap" | "waze" | "uber" | "99";

export function getRouteUrl(
  type: RouteType,
  lat: number,
  lng: number,
  name?: string,
) {
  switch (type) {
    case "googleMap":
      return getGoogleMapsDirectionUrl(lat, lng);
    case "waze":
      return getWazeDirectionUrl(lat, lng);
    case "uber":
      return getUberDirectionUrl(name ?? "Destino", lat, lng);
    case "99":
      return "#";
    default:
      return "#";
  }
}
