export type EventCategory =
  | "Show"
  | "Teatro"
  | "Gastronomia"
  | "Cultura"
  | "Infantil"
  | "Feira"
  | "Religioso"
  | "Educacional"
  | "Festival"
  | "Esporte";

export interface EventItem {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  description?: string;
  category: EventCategory;
  imageUrl?: string;
}
