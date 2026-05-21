import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/src/components/ui/card";
import { Place } from "../../types";
import Image from "next/image";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { ExplorerInformation } from "./ExplorerInformation";
import { Button } from "@/src/components/ui/button";
import { ExplorerBadge } from "./explorerBadge";

type placesProps = {
  card: Place;
};

export function ExplorerCard({ card }: placesProps) {
  return (
    <Card className="group max-w-2xl w-full shadow-lg shadow-gray-4 border-none pt-0 overflow-hidden rounded-2xl transition-all duration-300">
      <div className="flex justify-end px-5 pt-5 h-60 w-full relative overflow-hidden">
        <Image
          src={card.imageUrl}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"

          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ExplorerBadge
          variant="category"
          label={card.category}
          className="absolute z-10"
        />

        <div className="absolute inset-0 z-0 bg-black/20 transition-colors duration-300 hover:bg-black/35"></div>
      </div>

      <CardContent className="space-y-3 px-5">
        <div className="">
          <div className="flex justify-between items-start gap-3">
            <CardTitle className="text-lg font-extrabold  text-blue-5">{card.title}</CardTitle>
            <ExplorerBadge variant="rating" label={card.rating} />
          </div>
          <ExplorerBadge variant="default" label={card.type} className="w-fit" />
        </div>
        <CardDescription className="text-md text-gray-5 line-clamp-2 min-h-[48px]">{card.description}</CardDescription>

        <ExplorerInformation
          location={card.address}
          phone={card.phone}
          time={card.schedule}
        />
      </CardContent>

      <CardFooter className="flex items-start flex-col space-y-5  border-t border-gray-3 ">
        <div className=" space-y-2 flex flex-col items-start">
          {card.price && (
            <h3 className="text-blue-5 font-bold">{card.price}</h3>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            {card.tags.map((tag) => (
              <ExplorerBadge key={tag} variant="default" label={tag} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-3">
          <Button className="bg-blue-5 text-white w-full cursor-pointer">Ver Detalhes</Button>
          <Button className="text-white bg-brown-4 w-full cursor-pointer"><NearMeOutlinedIcon /> Rota</Button>
        </div>
      </CardFooter>
    </Card>
  )
}