import Image from "next/image";
import { CULTURAL_EVENTS } from "../../data/mocks/culturalEvent";

export function CulturalEventSection() {
  return (
    <section className="bg-brown-3 py-20 px-8 lg:px-35 flex  flex-col items-center gap-2 justify-center">
      <h2 className="mb-8 font-semibold text-4xl md:text-5xl text-brown-1">Chuva de Bala no País de Mossoró</h2>
      <div className="mb-2 text-lg text-white font-medium space-y-3 mx-auto max-w-4xl text-justify">
        <p>O espetáculo "Chuva de Bala no País de Mossoró" é considerado o maior espetáculo a céu aberto do Brasil e reconta o episódio histórico da resistência da cidade ao ataque do bando de Lampião em 13 de junho de 1927.</p>
        <p>Com mais de 500 atores em cena, cenários grandiosos e efeitos especiais impressionantes, o espetáculo atrai milhares de turistas todos os anos durante o Mossoró Cidade Junina. A encenação celebra a coragem do povo mossoroense e perpetua a memória deste importante marco da história local.</p>
        <p>O evento se tornou um dos principais atrativos turísticos do Rio Grande do Norte, contribuindo significativamente para a economia local e fortalecendo a identidade cultural da região.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 ">
        {CULTURAL_EVENTS.map((image, index) => (
          <Image
            key={index}
            src={image.imageUrl}
            alt="Espetáculo Chuva de bala no Pais de Mossoró"
            height={image.height}
            width={image.width}
            className="rounded-2xl shadow-2xl shadow-black /40"
          />
        ))}
      </div>
    </section>
  )
}