import { Badge } from "@/src/components/ui/badge";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

type ExplorerBadgeProps = {
  label?: string | number;
  variant?: "default" | "category" | "rating";
  className?: string;
};

const categoryColors = "bg-blue-5 text-white";
const defaultColor = "bg-gray-2 text-gray-5";

export function ExplorerBadge({
  label,
  variant = "default",
  className = "",
}: ExplorerBadgeProps) {

  const color = variant === "category" ? categoryColors : defaultColor;

  if (variant === "rating") {
    return (
      <Badge
        className={`
        flex
        items-center
        h-fit
          gap-1
          bg-amber-100
          text-yellow-700
          rounded-xl
          px-2
          py-1
          text-sm
          font-semibold
          ${className}
          `}
      >
        <StarRateRoundedIcon sx={{ width: 16 }} />
        {label}
      </Badge>
    );
  }

  return (
    <Badge
      className={`
          px-3
          py-1
          h-fit
          rounded-full
          text-xs
          font-medium
          ${className}
          ${color}
        `}
    >
      {label}
    </Badge>
  );
}