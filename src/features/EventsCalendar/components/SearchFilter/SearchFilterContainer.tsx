"use client";
import { EventCategory, EventItem } from "@/src/@types/events";
import { FilterEvent } from "./Filter";
import { SearchEvent } from "./Search";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Button } from "@/src/components/ui/button";
import { CalendarViewModal } from "../calendar/calendarViewModal";
import { useCalendar } from "../../hook/useCalendar";

type SearchFilterProps = {
  events: EventItem[]
  search: string;
  setSearch: (value: string) => void;
  category: EventCategory | null;
  setCategory: (value: EventCategory | null) => void;
};

export function SearchFilterContainer({ category, search, setCategory, setSearch, events }: SearchFilterProps) {
  const { currentMonth, dayWithEvents, eventMonths, setCurrentMonth } = useCalendar(events);
  return (
    <div className=" border-none flex flex-col md:flex-row gap-2">
      <SearchEvent search={search} onChange={setSearch} />
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <FilterAltOutlinedIcon className="text-white" />
          <FilterEvent category={category} onChange={setCategory} />
        </div>
        <CalendarViewModal events={events} />
      </div>
    </div>
  )
}