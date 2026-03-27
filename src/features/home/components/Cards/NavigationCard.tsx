//Card da tela Home sem foto
"use client"
import Link from "next/link";
import { ElementType } from "react"
import { Card, CardContent, CardTitle } from "@/src/components/ui/card";

type Variant = "blue" | "brown" | "purple" | "brownLight";

interface NavigationCardProps {
  title: string;
  href: string;
  icon: ElementType;
  variant: Variant;
}
export function NavigationCard({ title, href, icon: Icon, variant }: NavigationCardProps) {
  const variantStyles = {
    blue: "bg-blue-main  text-white",
    brown: "bg-brown-medium text-white",
    purple: "bg-purple-500 text-white",
    brownLight: "bg-brown-light text-white",
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