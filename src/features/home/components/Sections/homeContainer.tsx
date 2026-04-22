import { SectionEventsCarrossel } from "./eventsCarrossel";
import { SectionHero } from "./hero";
import { SectionHistory } from "./history";
import { SectionMomentsCards } from "./momentsCard";
import { SectionNavigationCard } from "./navigationCards";
import { EventItem } from "@/src/@types/events";

type EventItemProps = {
  events: EventItem[]
}

export function HomeContainer({ events }: EventItemProps) {
  return (
    <div>
      <SectionHero />
      <SectionNavigationCard />
      <SectionHistory />
      <SectionEventsCarrossel events={events} />
      <SectionMomentsCards />
    </div>
  )
}