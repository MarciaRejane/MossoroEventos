import { Place } from "../../types";
import { HeroSection } from "./heroSection";
import { TourismSection } from "./tourismSection";

type PlacesProps = {
  places: Place[];
};

export function ExploreContainerSection({ places }: PlacesProps) {
  return (
    <div>
      <HeroSection />
      <TourismSection places={places} />
    </div>
  )
}