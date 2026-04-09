import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";
import { SearchFilterConatiner } from "../SearchFilter/SearchFilterContainer";
import { EventList } from "../EventList";

export function EventSction() {
  return (
    <section className="h-screen">
      <ScrollArea className="h-full">
        <div className="sticky bg-white top-0 left-0 z-50 p-8 shadow-md">
          <SearchFilterConatiner />
        </div>

        <EventList />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </section>
  )
}