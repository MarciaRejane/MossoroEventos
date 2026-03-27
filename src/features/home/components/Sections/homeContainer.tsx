import { SectionEventsCarrossel } from "./eventsCarrossel";
import { SectionHero } from "./hero";
import { SectionHistory } from "./history";
import { SectionMomentsCards } from "./momentsCard";
import { SectionNavigationCard } from "./navigationCards";

export function HomeContainer() {
  return (
    <div>
      <SectionHero />
      <SectionNavigationCard />
      <SectionHistory />
      <SectionEventsCarrossel />
      <SectionMomentsCards />
    </div>
  )
}