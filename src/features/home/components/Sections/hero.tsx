import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"

export function SectionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/assets/mossoro-home.png"
        fill
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
        className="object-cover"
        alt="Imagem de mossoró"
      />
      <div className="absolute inset-0 bg-blue-main opacity-20"></div>
      <div className=" relative z-10 flex flex-col gap-5 items-center text-white">
        <h1 className="font-bold md:text-6xl text-xl">Mossoró Meu País</h1>
        <div className="md:text-xl text-lg font-medium ">
          <p>O maior São João do mundo te espera!</p>
          <p>Tradição, cultura e alegria em cada evento.</p>
        </div>
        <div className=" flex gap-4 items-center flex-col md:flex-row">
          <Link href="/dashboard/Events">
            <Button className="bg-brown-light hover:bg-brown-medium text-white font-bold text-md md:text-bs cursor-pointer" size={"lg"} variant={"secondary"}>Ver eventos</Button>
          </Link>

          <Link href="/dashboard/Calendar">
            <Button className="text-blue-dark bg-white hover:bg-gray-1 font-bold text-md md:text-bs cursor-pointer" size={"lg"} variant={"secondary"}>Calendário Completo</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}