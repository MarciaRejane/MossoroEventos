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

  const variantStyles = {
    green: {
      badge: "bg-green-2",
      text: "text-green-2",
    },

    blueWater: {
      badge: "bg-blue-3",
      text: "text-blue-3",
    },
    brown: {
      badge: "bg-brown-3",
      text: "text-brown-3",
    },
    darkGreen: {
      badge: "bg-green-5",
      text: "text-green-5",
    },
    blueSky: {
      badge: "bg-blue-2",
      text: "text-blue-2",
    },
    blueDark: {
      badge: "bg-blue-5",
      text: "text-blue-5",
    },
  };

  return (
    <div className="relative w-full">
      <Badge
        className={`
          hidden lg:flex absolute text-white lg:left-1/2 md:-translate-x-1/2 z-10
          px-4 py-2 font-semibold
          ${variantStyles[card.variant].badge}
        `}
      >
        {card.year}
      </Badge>

      <div className="lg:hidden flex mb-2 -translate-x-6">
        <Badge
          className={`
          px-4 py-2 font-semibold text-white
          ${variantStyles[card.variant].badge}
          `}
        >
          {card.year}
        </Badge>
      </div>

      <div className={`flex flex-col gap-4
        lg:flex-row lg:items-center lg:gap-32 translate-x-2 lg:justify-center w-full
        ${isReverse ? "lg:flex-row-reverse lg:-translate-x-2 lg:gap-32" : ""}
        `}>

        <Card className="overflow-hidden p-0 mb-4 border-none">
          <Image
            src={card.imageUrl}
            alt={card.title}
            width={600}
            height={370}
            className="object-cover w-full lg:w-[370px] h-auto"
          />
        </Card>

        <Card className="p-6 text-center border-none shadow-md shadow-gray-2 hover:shadow-gray-4  lg:max-w-[24rem]">
          <CardTitle className={`${variantStyles[card.variant].text}  text-xl font-bold mb-2`}>
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