import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

export function SectionHistory() {
  return (
    <section className="px-8 py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="space-y-6">
          <h2 className=" text-3xl md:text-4xl font-bold text-blue-main">Conheça Mossoró</h2>
          <div className="text-lg font-light text-gray-5 space-y-4 ">
            <p>Mossoró é das maiores cidades do Rio Grande do Norte e destaca-se no cenário nacional por sua rica história e cultura vibrante. A cidade é mundialmente conhecida pelo espetáculo "Chuva de Bala no País de Mossoró", que relembra a resistência da população ao ataque do bando de Lampião.</p>
            <p>Durante o mês de junho, Mossoró se transforma no palco do maior São João do mundo, com uma programação que inclui shows nacionais, apresentações culturais, gastronomia típica e muito mais.</p>
          </div>
          <Link href={"/history"}>
            <Button variant={"secondary"} className="w-fit p-5 bg-brown-light hover:bg-brown-medium font-semibold text-md text-white">
              Conheça Nossa História
            </Button>
          </Link>
        </div>

        <Image
          src="/assets/conheca-historia.png"
          width={600}
          height={400}
          alt="Foto da capela de Santa Luzia"
          className="w-full h-auto  rounded object-cover"
        />
      </div>
    </section>
  )
}