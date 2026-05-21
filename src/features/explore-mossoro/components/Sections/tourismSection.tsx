import { Place } from "../../types";
import { ExplorerCard } from "../cards/ExplorerCard";

type PlacesProps = {
  places: Place[];
}
export function TourismSection({ places }: PlacesProps) {
  return (
    <section className="px-20 py-8 grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">
      {places.map((place) => (
        <ExplorerCard key={place.id} card={place} />
      ))}
    </section>
  )
}