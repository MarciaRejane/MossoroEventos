import { CardMomentsImage } from "@/src/features/home/components/Cards/cardMomentsImage";
import { MomentsMossoro } from "@/src/features/home/data/mocks/moments";

export function SectionMomentsCards() {
  return (
    <section className="bg-white px-8 py-15">
      <div className="space-y-10">
        <div className="flex flex-col items-center">
          <h2 className="text-blue-5 font-bold text-3xl">Momentos Inesquecíveis</h2>
          <p className="text-lg text-brown-3">Veja a magia que acontece em Mossoró</p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
          {MomentsMossoro.map((item) => (
            <CardMomentsImage key={item.id} moment={item} />
          ))}
        </div>
      </div>
    </section>
  )
}