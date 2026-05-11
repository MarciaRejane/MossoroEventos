import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

export function SectionHistory() {
  return (
    <section className="px-8 py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="space-y-6">
          <h2 className=" text-3xl md:text-4xl font-bold text-blue-5 mb-2">Conheça Mossoró</h2>
          <div className="h-1 w-20 bg-[#8B4513] mb-6 rounded-full"></div>
          <div className="text-lg font-light text-gray-5 space-y-4 leading-relaxed">
            <p>Mossoró é das maiores cidades do Rio Grande do Norte e destaca-se no cenário nacional por sua rica história e cultura vibrante. A cidade é mundialmente conhecida pelo espetáculo <strong className="text-brown-5">"Chuva de Bala no País de Mossoró"</strong>, que relembra a resistência da população ao ataque do bando de Lampião.</p>
            <p>Durante o mês de junho, Mossoró se transforma no palco do <strong className="text-brown-5">maior São João do mundo</strong>, com uma programação que inclui shows nacionais, apresentações culturais, gastronomia típica e muito mais.</p>
          </div>
          <Link href={"/history"}>
            <Button variant={"secondary"} className="w-fit py-3 px-8 bg-brown-4 hover:bg-brown-5 font-semibold text-md text-white cursor-pointer rounded-xl transition-all shadow-md">
              Conheça Nossa História
            </Button>
          </Link>
        </div>

        <div className="relative rounded-2xl shadow-2xl shadow-gray-4 w-full md:w-[150rem]  h-[400px]">
          <Image
            src="/assets/conheca-historia.png"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            alt="Foto da capela de Santa Luzia"
            className=" rounded object-cover"
          />
        </div>
      </div>
    </section>
  )
}