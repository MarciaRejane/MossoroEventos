
import { HOME_NAVIGATION_CARDS } from "@/src/features/home/data/navigation/homeNavigationCards";
import { NavigationCard } from "../Cards/NavigationCard";

export function SectionNavigationCard() {
  return (
    <div className="px-8 relative z-20 -mt-16 pb-10">
      <div className="flex md:flex-row flex-col justify-center gap-5  md:max-w-6xl mx-auto">
        {HOME_NAVIGATION_CARDS.map((card) => (
          <NavigationCard
            key={card.title}
            title={card.title}
            href={card.href}
            icon={card.icon}
            variant={card.variant}
          />
        ))}
      </div>
    </div>
  )
}