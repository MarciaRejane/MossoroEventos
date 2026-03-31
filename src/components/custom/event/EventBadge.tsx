import { Badge } from "../../ui/badge";
import type { EventCategory } from "@/src/@types/events";

type EventBadgeProps = {
  category: EventCategory;
  variant?: "default" | "category";
  className?: string;
};

const categoryColors: Record<EventCategory, string> = {
  Show: "bg-yellow-500 text-white",
  Teatro: "bg-purple-500 text-white",
  Gastronomia: "bg-orange-500 text-white",
  Cultura: "bg-blue-main text-white",
  Infantil: "bg-green-500 text-white",
  Esporte: "bg-red-500 text-white",
};

const defaultColor = "bg-brown-light text-white";

export function EventBadge({ category, variant = "default", className = "", }: EventBadgeProps) {
  const color = variant === "category" ? categoryColors[category] : defaultColor;

  return (
    <Badge className={`px-4 py-1 ${color} ${className}`}>
      {category}
    </Badge>
  )
}