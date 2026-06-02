"use client";
import { Category, PlaceType } from "../../types";
import { FilterExplorer } from "./FilterExplorer";
import { FilterType } from "./FilterType";
import { SearchExplorer } from "./Search";

type SearchFilterProps = {
  search: string;
  setSearch: (value: string) => void;
  categorys: Category | null;
  setCategory: (value: Category | null) => void;
  typeCategory: PlaceType | null;
  setTypeCategory: (value: PlaceType | null) => void;
};

export function SearchFilterContainer({ search, setSearch, categorys, setCategory, typeCategory, setTypeCategory }: SearchFilterProps) {
  return (
    <div className=" border-none flex flex-col md:flex-row gap-5 ">
      <SearchExplorer search={search} onChange={setSearch} />
      <FilterExplorer categorys={categorys} onChange={setCategory} />
      <FilterType typeCategory={typeCategory} onChange={setTypeCategory} selectedCategory={categorys} />
    </div>
  )
}