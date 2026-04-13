"use client"
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";
import { SearchFilterContainer } from "../SearchFilter/SearchFilterContainer";
import { EventList } from "../EventList";
import { useEvents } from "../../hook/useEvents";

export function EventSction() {
  const { filteredEvents, category, setCategory, search, setSearch } = useEvents();
  return (
    <section className="min-h-screen">
      <ScrollArea className="h-full">
        <div className="sticky bg-white top-0 left-0 z-50 p-8 shadow-md">
          <SearchFilterContainer search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
        </div>

        <EventList events={filteredEvents} />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </section>
  )
}