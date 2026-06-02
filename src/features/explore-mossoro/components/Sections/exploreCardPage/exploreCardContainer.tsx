import { Place } from "../../../types";
import { HeroSection } from "../exploreCardPage/heroCardSection";
import { InformationCardSection } from "./informationCardSection";

type PlacesProps = {
  place: Place;
}

export function ExploreCardSectionContain({ place }: PlacesProps) {
  return (
    <div>
      <HeroSection place={place} />
      <InformationCardSection place={place} />
    </div>
  )
}