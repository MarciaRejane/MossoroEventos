import { TIMELINE_ITEMS } from "@/src/features/history/data/mocks/history";
import { TimelineItem } from "./TimeLineItem";

export function Timeline() {
  return (
    <div className="relative pl-14 pr-8 md:px-8">
      <div className="absolute md:left-1/2 h-full w-1 bg-linear-to-t from-blue-5 to-brown-2 left-8.5 -translate-x-1/2" />
      <div className="flex flex-col gap-16">
        {TIMELINE_ITEMS.map((card, index) => (
          <TimelineItem key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}