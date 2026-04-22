import { events } from "@/src/data/mocks/events";
import { HomeContainer } from "@/src/features/home/components/Sections/homeContainer";

export default function Home() {
  return (
    <main>
      <HomeContainer events={events} />
    </main>
  );
}
