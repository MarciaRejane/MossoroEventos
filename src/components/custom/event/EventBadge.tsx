import { Badge } from "../../ui/badge";
import type { EventCategory } from "@/src/@types/events";

type EventBadgeProps = {
  category: EventCategory;
  variant?: "default" | "category";
  className?: string;
};

const categoryColors: Record<EventCategory, string> = {
  Show: "bg-purple text-white",
  Teatro: "bg-red-2 text-white",
  Gastronomia: "bg-orange-3 text-white",
  Cultura: "bg-blue-4 text-white",
  Infantil: "bg-green-5 text-white",
  Esporte: "bg-yellow-3 text-white",
  Educacional: "bg-brown-4 text-white",
  Feira: "bg-green-2 text-white",
  Festival: "bg-gray-5 text-white",
  Religioso: "bg-blue-2 text-white",
};

const defaultColor = "bg-brown-2 text-white";

export function EventBadge({ category, variant = "default", className = "", }: EventBadgeProps) {
  const color = variant === "category" ? categoryColors[category] : defaultColor;

  return (
    <Badge className={` px-4 py-1 ${color} ${className}`}>
      {category}
    </Badge>
  )
}