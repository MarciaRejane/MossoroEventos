import { CulturalEventSection } from "./culturalEvent"
import { CulturalLegacySection } from "./culturalLegacy"
import { HeroSection } from "./hero"
import { HistoryTimeLineSection } from "./historyTimeLineSection"

export function HistoryContainer() {
  return (
    <div>
      <HeroSection />
      <HistoryTimeLineSection />
      <CulturalEventSection />
      <CulturalLegacySection />
    </div>
  )
}