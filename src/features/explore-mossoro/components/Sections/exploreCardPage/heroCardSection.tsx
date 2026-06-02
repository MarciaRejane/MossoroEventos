import Image from "next/image";
import { Place } from "../../../types";
import { ExplorerBadge } from "../../cards/explorerBadge";

type PlacesProps = {
  place: Place;
}

export function HeroSection({ place }: PlacesProps) {
  return (
    <section className="flex md:gap-5 md:pt-30 md:px-8">
      <div className="relative flex items-end px-5 py-5 w-full md:w-[70%] h-100 md:h-[500px]">
        <Image
          src={place.imageUrl}
          fill
          alt={place.title}
          className="object-cover rounded-xl shadow-2xl shadow-gray-3"
        />
        <ExplorerBadge variant="category" label={place.category} className="absolute" />
      </div>

      <div className="flex flex-col gap-5 md:w-[30%]">
        {place.images.map((image, index) => (
          <div key={index} className="relative  md:h-[240px]">
            <Image
              src={image}
              alt={place.title}
              fill
              className="object-cover rounded-xl shadow-2xl shadow-gray-3"
            />
          </div>
        ))}
      </div>
    </section>
  )
}