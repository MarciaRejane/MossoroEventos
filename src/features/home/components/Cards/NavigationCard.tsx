//Card da tela Home sem foto
import Link from "next/link";
import { ElementType } from "react"
import { Card, CardContent, CardTitle } from "@/src/components/ui/card";

type Variant = "blue" | "brown" | "blueLight" | "brownLight";

interface NavigationCardProps {
  title: string;
  href: string;
  icon: ElementType;
  variant: Variant;
}
export function NavigationCard({ title, href, icon: Icon, variant }: NavigationCardProps) {
  const variantStyles = {
    blue: "bg-white text-blue-5 hover:shadow-md hover:shadow-blue-5",
    brown: "bg-white text-blue-5 hover:shadow-md hover:shadow-blue-5",
    blueLight: "bg-white text-blue-5 hover:shadow-md hover:shadow-blue-5",
    brownLight: "bg-white text-blue-5 hover:shadow-md hover:shadow-blue-5",
  };

  return (
    <Link href={href} className="block w-full ">
      <Card
        className={`
      shadow-md transition-colors
      ${variantStyles[variant]}
      `}
      >
        <CardContent className="flex flex-col items-center justify-center gap-3 p-6">
          <Icon sx={{ fontSize: 35 }} />
          <CardTitle className="font-medium text-bs md:text-md">{title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  )
}