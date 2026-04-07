import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card"
import Image from "next/image"
import { CULTURAL_LEGARY_CARDS } from "@/src/features/history/data/culturalLegary";

export function CulturalLegacySection() {
  return (
    <section className="flex flex-col items-center gap-8 py-16 px-8">
      <h2 className="text-blue-main font-bold text-xl md:text-4xl">Legado Cultural</h2>
      <div className="flex flex-col md:flex-row gap-5">
        {CULTURAL_LEGARY_CARDS.map((item, index) => (
          <Card key={index} className="flex flex-col items-center border-none shadow-md shadow-gray-2 hover:shadow-gray-4 w-2xs">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={60}
              height={60}
            />
            <CardContent className="text-center">
              <CardTitle className="font-bold text-xl text-blue-dark">{item.title}</CardTitle>
              <CardDescription className="font-medium text-lg text-gray-5">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}