import { ExploreContainerSection } from "@/src/features/explore-mossoro/components/Sections/explorerContainerSection";
import { PLACES } from "@/src/features/explore-mossoro/mocks/places";


export default function exploreMossoro() {
  return (
    <main>
      <ExploreContainerSection places={PLACES} />
    </main>
  )
}