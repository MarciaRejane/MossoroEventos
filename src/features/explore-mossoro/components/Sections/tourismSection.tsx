"use client"
import { Category, Place } from "../../types";
import { ExplorerCard } from "../cards/ExplorerCard";
import { useExplorer } from "../../hook/useExplorer";
import { SearchFilterContainer } from "../SearchFilterExplorer/SearchFilterContainer";

type PlacesProps = {
  places: Place[];
}
export function TourismSection({ places }: PlacesProps) {
  const { search, setSearch, filteredExplorer, selectedType, setSelectedType, selectedCategory, setSelectedCategory } = useExplorer(places);
  function handleCategoryChange(value: Category | null) {
    setSelectedCategory(value);
    setSelectedType(null);
  }
  return (
    <section className="px-5">
      <div className="bg-linear-to-r from-blue-6 to-purple-950 -mt-6 p-8 shadow-md rounded-xl">
        <SearchFilterContainer search={search} setSearch={setSearch} categorys={selectedCategory} setCategory={handleCategoryChange} typeCategory={selectedType} setTypeCategory={setSelectedType} />
      </div>
      <div className="lg:px-20 py-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredExplorer.map((place) => (
          <ExplorerCard key={place.id} card={place} />
        ))}
      </div>
    </section>
  )
}