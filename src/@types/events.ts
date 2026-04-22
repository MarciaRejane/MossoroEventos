export type EventCategory =
  | "Show"
  | "Teatro"
  | "Gastronomia"
  | "Cultura"
  | "Infantil"
  | "Esporte";

export interface EventItem {
  id: string;
  title: string;
  date: Date;
  time: string;
  location?: {
    name: string;
    lat: number;
    lng: number;
  };
  category: EventCategory;
  imageUrl?: string;
}
