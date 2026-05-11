import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card";
import { Moments } from "@/src/features/home/types/index";
import Image from "next/image";

interface MomentsCardImageProps {
  moment: Moments;
}

export function CardMomentsImage({ moment }: MomentsCardImageProps) {
  return (
    <div className="group relative w-full h-72 overflow-hidden rounded-2xl cursor-pointer shadow-lg">
      {moment.imageUrl && (
        <Image
          fill
          src={moment.imageUrl}
          alt={moment.title}
          className=" object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-black/30 transition-colors hover:bg-black/45"></div>

      <div className="absolute flex flex-col bottom-20 items-center z-0 w-full p-6 text-white">
        <h3 className="text-xl md:text-2xl font-bold drop-shadow-md">{moment.title}</h3>

        <p className="text-sm md:text-base font-light drop-shadow-sm">{moment.description}</p>
      </div>
    </div>
  )
}
//sizes="(max-width: 768px) 100vw, 100vw" 