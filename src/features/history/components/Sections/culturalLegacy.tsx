import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card"
import Image from "next/image"
import { CULTURAL_LEGACY_CARDS } from "@/src/features/history/data/culturalLegacy";

export function CulturalLegacySection() {
  return (
    <section className="flex flex-col items-center gap-8 py-16 px-8">
      <h2 className="text-blue-5 font-bold text-xl md:text-4xl">Legado Cultural</h2>
      <div className="flex flex-col lg:flex-row gap-5">
        {CULTURAL_LEGACY_CARDS.map((item, index) => (
          <Card key={index} className="flex flex-col items-center border-none transition-shadow duration-300 shadow-lg hover:shadow-gray-4 w-full md:[320px]">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={60}
              height={60}
            />
            <CardContent className="text-center">
              <CardTitle className="font-bold text-xl text-blue-6">{item.title}</CardTitle>
              <CardDescription className="font-medium text-lg text-gray-5">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}