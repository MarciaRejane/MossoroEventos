import { FilterEvent } from "./Filter";
import { SearchEvent } from "./Search";

export function SearchFilterConatiner() {
  return (
    <div className=" border-none flex flex-col md:flex-row gap-5">
      <SearchEvent />
      <FilterEvent />
    </div>
  )
}