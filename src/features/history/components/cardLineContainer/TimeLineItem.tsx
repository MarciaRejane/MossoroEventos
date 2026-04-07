import { Badge } from "@/src/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import { History } from "../../types";

interface Props {
  card: History;
  index: number;
}

export function TimelineItem({ card, index }: Props) {
  const isReverse = index % 2 !== 0;
  const colorBadge = {
    green: "bg-green-400 text-white",
    purple: "bg-purple-500 text-white",
    blue: "bg-cyan-500 text-white",
    orange: "bg-orange-500 text-white",
    pink: "bg-pink-500 text-white",
    blueDark: "bg-blue-dark text-white",
  };

  return (
    <div className="relative w-full">
      <Badge
        className={`
          hidden md:flex absolute md:left-1/2 md:-translate-x-1/2 z-10
          px-4 py-2 font-semibold
          ${colorBadge[card.variant]}
        `}
      >
        {card.year}
      </Badge>

      <div className="md:hidden flex mb-2 -translate-x-6">
        <Badge
          className={`
          px-4 py-2 font-semibold
          ${colorBadge[card.variant]}
          `}
        >
          {card.year}
        </Badge>
      </div>

      <div className={`flex flex-col gap-4
        md:flex-row md:items-center md:gap-20 translate-x-2 md:justify-center w-full
        ${isReverse ? "md:flex-row-reverse md:-translate-x-2 md:gap-20" : ""}
        `}>

        <Card className="overflow-hidden p-0 mb-4 border-none">
          <Image
            src={card.imageUrl}
            alt={card.title}
            width={600}
            height={370}
            className="object-cover w-full md:w-[370px]"
          />
        </Card>

        <Card className="p-6 text-center border-none shadow-md shadow-gray-2 hover:shadow-gray-4  md:max-w-[24rem]">
          <CardTitle className="text-blue-main text-xl font-bold mb-2">
            {card.title}
          </CardTitle>
          <CardDescription className="text-gray-5 font-medium text-md">
            {card.description}
          </CardDescription>
        </Card>

      </div >
    </div >
  );
}