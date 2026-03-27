import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card";
import { Moments } from "@/src/features/home/types/index";
import Image from "next/image";

interface MomentsCardImageProps {
  moment: Moments;
}

export function CardMomentsImage({ moment }: MomentsCardImageProps) {
  return (
    <Card className="relative h-64 w-full border-none ">
      <CardContent>
        <div className="group overflow-hidden cursor-pointer">
          {moment.imageUrl && (
            <Image fill priority className="object-cover transition-transform duration-300 group-hover:scale-105 border-none rounded-xl" src={moment.imageUrl} alt={moment.title} />
          )}
          <div className="absolute inset-0 bg-black/20 hover:bg-black/40 border-none rounded-xl hover:scale-105"></div>

        </div>
        <div className="absolute bottom-5 flex flex-col items-center text-white">
          <CardTitle className="md:text-xl text-lg  font-semibold">{moment.title}</CardTitle>
          <CardDescription className="md:text-bs text-md font-medium">{moment.description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}