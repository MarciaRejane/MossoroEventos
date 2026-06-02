import { PLACES } from "@/src/features/explore-mossoro/mocks/places";
import { notFound } from "next/navigation";
import { ExploreCardSectionContain } from "@/src/features/explore-mossoro/components/Sections/exploreCardPage/exploreCardContainer";

interface placeProps {
  params: Promise<{ slug: string }>;
}

export default async function ExploreCardPage({ params }: placeProps) {
  const { slug } = await params;

  const card = PLACES.find(
    (item) => item.slug === slug
  );

  if (!card) {
    notFound();
  }
  return (
    <ExploreCardSectionContain place={card} />
  )
}