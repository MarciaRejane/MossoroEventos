"use client";
import { EventCategory } from "@/src/@types/events";
import { FilterEvent } from "./Filter";
import { SearchEvent } from "./Search";

type SearchFilterProps = {
  search: string;
  setSearch: (value: string) => void;
  category: EventCategory | null;
  setCategory: (value: EventCategory | null) => void;
};

export function SearchFilterContainer({ category, search, setCategory, setSearch }: SearchFilterProps) {
  return (
    <div className=" border-none flex flex-col md:flex-row gap-5">
      <SearchEvent search={search} onChange={setSearch} />
      <FilterEvent category={category} onChange={setCategory} />
    </div>
  )
}