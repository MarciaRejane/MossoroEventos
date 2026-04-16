export type EventCategory =
  | "Show"
  | "Teatro"
  | "Gastronomia"
  | "Cultura"
  | "Infantil"
  | "Esporte";

export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location?: string;
  category: EventCategory;
  imageUrl?: string;
}
