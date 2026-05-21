import { Place } from "../../types";
import { HeroSection } from "./heroSection";
import { TourismSection } from "./tourismSection";

type placesProps = {
  places: Place[];
};

export function ExploreContainerSection({ places }: placesProps) {
  return (
    <div>
      <HeroSection />
      <TourismSection places={places} />
    </div>
  )
}